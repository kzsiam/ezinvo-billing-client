import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Download, Printer } from 'lucide-react';
import { Link } from 'react-router';

const MyInvoice = ({ invoiceData }) => {
    return (
        <div className="p-4">
            <div className="overflow-x-auto  ">
                <Table>
                    <TableBody>
                        <TableRow key={invoiceData._id}>
                            <TableCell>{invoiceData.invoiceNumber}</TableCell>
                            <TableCell>{invoiceData.clientsCompanyName}</TableCell>
                            <TableCell>{invoiceData.clientsCompanyAddress}</TableCell>
                            <TableCell className="text-right space-x-2">
                                {/* <Button onClick={() => clickToView(invoiceData._id)} variant="outline" size="sm">View Invoice</Button> */}
                                <Link to={`/pdfViewerPage/${invoiceData._id}`} variant="outline" size="sm">View Invoice</Link>
                                <Button variant="destructive" size="sm">Delete</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default MyInvoice;




