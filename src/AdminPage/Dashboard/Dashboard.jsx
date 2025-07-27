// import { Card, CardContent } from '@/components/ui/card';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// const Dashboard = () => {
//     const pieData = [
//         { name: "Income", value: 8000 },
//         { name: "Expand", value: 9000 },
//         { name: "Booking", value: 7000 },
//     ];

//     const barData = [
//         { name: "Jan", hot: 4570, warm: 3000, traffic: 4570 },
//         { name: "Feb", hot: 4570, warm: 2000, traffic: 3000 },
//         { name: "Mar", hot: 2000, warm: 2780, traffic: 2500 },
//         { name: "Apr", hot: 1890, warm: 4800, traffic: 2400 },
//         { name: "May", hot: 2390, warm: 3800, traffic: 2500 },
//         { name: "Jun", hot: 3490, warm: 4300, traffic: 2100 },
//     ];

//      const [dbUser, setDBuser] = useState([])

//     const fetchUsers = async() =>{
//         try{
//             const response = await axios.get("http://localhost:1000/usersCollection")
//             setDBuser(response.data)
//         }
//         catch(error){
//             console.log(error)
//         }
        
//     }

//     useEffect(() =>{
//         fetchUsers()
//     },[])
//      const [invoiceCollections, setInvoiceCollections] = useState([])

//     const fetchInvoices = async() =>{
//         try{
//             const response = await axios.get("http://localhost:1000/invoiceCollections")
//             setInvoiceCollections(response.data)
//         }
//         catch(error){
//             console.log(error)
//         }
        
//     }

//     useEffect(() =>{
//         fetchInvoices()
//     },[])

//     return (
//         <div className='mx-20'>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-10'>
//                 <Card>
//                     <CardContent className="p-4">
//                         <div className="text-sm text-muted-foreground mb-2">Total Users</div>
//                         <div className="text-xl font-semibold">{dbUser.length}</div>
                        
//                     </CardContent>
//                 </Card>
//                 <Card>
//                     <CardContent className="p-4">
//                         <div className="text-sm text-muted-foreground mb-2">Total Invoices</div>
//                         <div className="text-xl font-semibold">{invoiceCollections.length}</div>
                       
//                     </CardContent>
//                 </Card>
//                 <Card>
//                     <CardContent className="p-4">
//                         <div className="text-sm text-muted-foreground mb-2">Amount Paid</div>
//                         <div className="text-xl font-semibold">$4386</div>
                        
//                     </CardContent>
//                 </Card>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 mt-20">
//                 {/* Bar Chart */}
//                 <Card>
//                     <CardContent className="p-4">
//                         <h2 className="text-sm font-semibold mb-4">Cashflow Summary</h2>
//                         <ResponsiveContainer width="100%" height={250}>
//                             <BarChart data={barData}>
//                                 <XAxis dataKey="name" />
//                                 <YAxis />
//                                 <Tooltip />
//                                 <Legend />
//                                 <Bar dataKey="hot" fill="#f97316" name="Hot lead" />
//                                 <Bar dataKey="warm" fill="#facc15" name="Warm lead" />
//                                 <Bar dataKey="traffic" fill="#a855f7" name="CRM Traffic" />
//                             </BarChart>
//                         </ResponsiveContainer>
//                     </CardContent>
//                 </Card>

//                 {/* Pie Chart */}
//                 <Card>
//                     <CardContent className="p-4">
//                         <h2 className="text-sm font-semibold mb-4">Invoice By Amount</h2>
//                         <ResponsiveContainer width="100%" height={250}>
//                             <PieChart>
//                                 <Pie
//                                     data={pieData}
//                                     dataKey="value"
//                                     nameKey="name"
//                                     cx="50%"
//                                     cy="50%"
//                                     outerRadius={80}
//                                     label
//                                 >
//                                     {pieData.map((entry, index) => (
//                                         <Cell key={`cell-${index}`} />
//                                     ))}
//                                 </Pie>
//                             </PieChart>
//                         </ResponsiveContainer>
//                         <div className="text-center text-lg font-semibold mt-2">$24,006</div>
//                         <div className="text-center text-sm text-muted-foreground">Business Spend</div>
//                     </CardContent>
//                 </Card>
//             </div>
//             <div>
//                 <Card>
//                     <CardContent className="p-4">
//                         <h2 className="text-sm font-semibold mb-4">Best Performing Users</h2>
//                         <ul className="space-y-2">
//                             {["Layers", "Quotient", "Hourglass", "Sisyphus"].map((name, index) => (
//                                 <li key={index} className="flex justify-between text-sm">
//                                     <span>{name}</span>
//                                     <span className="text-muted-foreground">7.9K orders - 20%</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;