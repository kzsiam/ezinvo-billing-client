import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel } from "@/components/ui/dropdown-menu"


import { TableCell, TableRow } from '@/components/ui/table';
import ConfirmationDialogue from '@/SharedPages/ConfirmationDialogue/ConfirmationDialogue';
import axios from 'axios';
import { MoreHorizontal } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const MyInvoice = ({ invoiceData, i, refetch }) => {
   
    const handleDeleteInvoice = (id) => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/invoiceCollections/${id}`, {
            method: "DELETE",
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Delete Successfully')

                }
            })
    }

    const handleSendMail = async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/send-invoice-email/${id}`, {
                method: "POST",
            });
            const data = await res.json();
            if (data) {
                toast.success("Email sent successfully!");
            }

        } catch (err) {
            console.error(err);
            toast.error("Failed to send email");
        }
    };
    const handleGeneratePay = async (id) => {
        
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/invoicePay/${id}`);
        
        if(res.data){
            toast.success("Payment Link Generated")
        }

    }
    return (

        <TableRow key={invoiceData._id}>
            <TableCell>
                <h1 className='mx-5'>{i + 1}</h1>
            </TableCell>
            <TableCell>{invoiceData.clientsName}</TableCell>
            <TableCell>{invoiceData.clientsEmail}</TableCell>
            <TableCell>
                {
                    invoiceData.paid ? <h1>Paid</h1>: <h1>Unpaid</h1>
                }
            </TableCell>
            <TableCell>

                <Link to={`/pdfViewerPage/${invoiceData._id}`} variant="outline" size="sm">
                    <Button size="sm" className="bg-cyan-700 cursor-pointer hover:bg-cyan-600">View Invoice</Button>
                </Link>
            </TableCell>
            <TableCell className="text-right">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <MoreHorizontal className="h-4 w-4 cursor-pointer " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>
                            {/* delete invoice */}
                            {
                                <ConfirmationDialogue
                                    title="Make Admin?"
                                    message={`Are you sure you want to delete this? This action cannot be undone.`}
                                    onConfirm={() => handleDeleteInvoice(invoiceData._id)}
                                    trigger={
                                        <Button className="bg-cyan-700 cursor-pointer hover:bg-cyan-600s w-24" size="sm">
                                            Delete
                                        </Button>
                                    }
                                />
                            }

                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <Button disabled={!invoiceData.pdfViewerLink && !invoiceData.paymentLink || invoiceData.paid} onClick={() => handleSendMail(invoiceData._id)} size="sm" className="bg-cyan-700 w-24 cursor-pointer">Send </Button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            {
                                !invoiceData.paid && !invoiceData.paymentLink && <Button  onClick={() => handleGeneratePay(invoiceData._id)} size="sm" className="bg-cyan-700 cursor-pointer">Generate Payment & Pdf Link </Button>
                            }
                        </DropdownMenuLabel>

                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>

    );
};

export default MyInvoice;




