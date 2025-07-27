import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel } from "@/components/ui/dropdown-menu"


import { TableCell, TableRow } from '@/components/ui/table';
import ConfirmationDialogue from '@/SharedPages/ConfirmationDialogue/ConfirmationDialogue';
import { MoreHorizontal } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const MyInvoice = ({ invoiceData, i,refetch }) => {

    const handleDeleteInvoice = (id) => {
        fetch(`http://localhost:1000/invoiceCollections/${id}`, {
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
    return (

        <TableRow key={invoiceData._id}>
            <TableCell>
                <h1 className='mx-5'>{i + 1}</h1>
            </TableCell>
            <TableCell>{invoiceData.clientsName}</TableCell>
            <TableCell>{invoiceData.clientsEmail}</TableCell>
            <TableCell>

                <Link to={`/pdfViewerPage/${invoiceData._id}`} variant="outline" size="sm">
                    <Button size="sm" className="bg-cyan-700 hover:bg-cyan-600">View Invoice</Button>
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
                                        <Button className="bg-cyan-700 hover:bg-cyan-600s w-24" size="sm">
                                            Delete
                                        </Button>
                                    }
                                /> 
                            }

                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <Button size="sm" className="bg-cyan-700 w-24">Pay </Button>
                        </DropdownMenuLabel>

                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>

    );
};

export default MyInvoice;




