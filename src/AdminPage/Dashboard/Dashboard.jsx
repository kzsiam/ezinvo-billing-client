import { Card, CardContent } from '@/components/ui/card';
import useTitle from '@/hooks/useTitle';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FaUsers } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdPaid, MdPayment } from "react-icons/md";
import { AuthContext } from '@/Contexts/AuthProvider';


const Dashboard = () => {
    useTitle('Dashboard')
    const { user } = useContext(AuthContext)
     const email = user?.email;

    const [dbUser, setDBuser] = useState([])
    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/usersCollection`,{
               
                    params: { email },
                    withCredentials: true
            })
            setDBuser(response.data)
        }
        catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        fetchUsers()
    }, [email])

    const [paidInvoice, setPaidInvoice] = useState([])

    const fetchPaidInvoice = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/allPaidData`,
                {
                    params: { email },
                    withCredentials: true
                }
            )
            setPaidInvoice(response.data)
        }
        catch (error) {
            console.error(error)
        }

    }
    useEffect(() => {
        fetchPaidInvoice()
    }, [email])




    //pie chart data
    const pieData = [];
    // const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28"];

    const summary = {};

    paidInvoice?.forEach(invoice => {
        const name = invoice.clientsCompanyName || "Unknown";
        const total = invoice.grandTotal || 0;

        if (!summary[name]) {
            summary[name] = 0;
        }

        summary[name] += total;
    });

    for (const client in summary) {
        pieData.push({ name: client, value: summary[client] });
    }




    const [invoiceCollections, setInvoiceCollections] = useState([]);
   
    const fetchInvoices = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/invoiceCollections`, {
                params: { email },
                withCredentials: true
            })
            setInvoiceCollections(response.data)
        }
        catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        fetchInvoices()
    }, [email])

    const totalPaid = paidInvoice.reduce((sum, invoice) => sum + invoice.grandTotal, 0);


    const totalGrandAmount = invoiceCollections.reduce((sum, invoice) => {
        return sum + (invoice.grandTotal || 0);
    }, 0);

    const dueAmount = totalGrandAmount - totalPaid;

    //barchart data 
    const generateMonthlyBarData = (invoices) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const summary = {};

        invoices.forEach(invoice => {
            const [day, month, year] = invoice.issueDate.split('-'); // "29-07-25"
            const monthIndex = parseInt(month) - 1;
            const monthName = monthNames[monthIndex];

            if (!summary[monthName]) {
                summary[monthName] = 0;
            }

            summary[monthName] += 1;
        });

        const barData = Object.keys(summary).map(month => ({
            name: month,
            invoices: summary[month]
        }));

        return barData;
    };
    const monthlyBarData = generateMonthlyBarData(invoiceCollections);
    const COLORS = [
        "#f97316", // orange
        "#facc15", // yellow
        "#a855f7", // purple
        "#10b981", // green
        "#3b82f6", // blue
        "#ef4444", // red
        "#8b5cf6", // violet
        "#14b8a6", // teal
        "#ec4899", // pink
        "#84cc16", // lime
        "#f59e0b", // amber
        "#6b7280"  // gray
    ];

    return (
        <div className='mx-20 lg:mt-40 mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mt-10'>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-xl text-center   mb-2">Total Users </div>
                        <div className="text-2xl font-semibold flex justify-center text-cyan-700 items-center gap-3">
                            {dbUser.length}
                            <FaUsers />
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-xl text-center  mb-2">Total Invoices</div>
                        <div className="text-2xl font-semibold flex justify-center text-cyan-700 items-center gap-3">
                            {invoiceCollections.length}
                            <LiaFileInvoiceSolid />
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-xl text-center  mb-2">Amount Paid</div>
                        <div className="text-2xl font-semibold flex justify-center text-cyan-700 items-center gap-3">
                            ${totalPaid}
                            <MdPaid />
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-xl text-center  mb-2">Due Amount</div>
                        <div className="text-2xl font-semibold flex justify-center text-cyan-700 items-center gap-3">
                            ${dueAmount}
                            <MdPayment />
                        </div>

                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 mt-20">
                {/* Bar Chart */}
                <Card>
                    <CardContent className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Cashflow Summary</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={monthlyBarData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="invoices" name="Invoices">
                                    {monthlyBarData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Pie Chart */}
                <Card>
                    <CardContent className="p-4">
                        <h2 className="font-semibold mb-4 text-xl ">Invoice By Company</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    label
                                >
                                    {pieData?.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="text-center text-lg font-semibold mt-2">${totalPaid}</div>
                        <div className="text-center text-sm text-muted-foreground">Business Spend</div>
                    </CardContent>
                </Card>
            </div>
            {/* <div>
                <Card>
                    <CardContent className="p-4">
                        <h2 className="text-sm font-semibold mb-4">Best Performing Users</h2>
                        <ul className="space-y-2">
                            {["Layers", "Quotient", "Hourglass", "Sisyphus"].map((name, index) => (
                                <li key={index} className="flex justify-between text-sm">
                                    <span>{name}</span>
                                    <span className="text-muted-foreground">7.9K orders - 20%</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div> */}
        </div>
    );
};

export default Dashboard;