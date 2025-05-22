import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Upload } from "lucide-react";

const CreateInvoice = () => {
    return (
        <div className="p-6 my-20 max-w-4xl mx-auto space-y-6">
            <Card>
                <CardContent className="p-6 space-y-6 lg:mx-10">
                    {/* Header */}
                    <div className="text-right flex justify-between">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="border rounded-md p-2 w-32 h-32 flex flex-col justify-center items-center text-xs text-muted-foreground">
                                <Upload className="w-5 h-5 mb-1" />
                                Upload Logo
                                <span className="text-[10px]">240×240 px @ 72DPI</span>
                                <span className="text-[10px]">Max size: 1MB</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mt-4">INVOICE</h2>
                        </div>
                    </div>

                    <div>
                        <div className="space-y-1 text-sm">
                            <Input className="w-30 " placeholder="Your Company"></Input>
                            <p>Your Company</p>
                            <p>Your Name</p>
                            <p>Company's Address</p>
                            <p>City, State Zip</p>
                            <p>U.S.A</p>
                        </div>
                    </div>

                    {/* Bill To */}
                    <div className="grid grid-cols-2 gap-6 text-sm">
                        <div>
                            <h4 className="font-semibold">Bill To:</h4>
                            <p>Your Client's Company</p>
                            <p>Client's Address</p>
                            <p>City, State Zip</p>
                            <p>U.S.A</p>
                        </div>
                        <div>
                            <p>
                                <strong>Invoice#:</strong> INV-12
                            </p>
                            <p className="flex items-center gap-1">
                                {/* <Input type='date' className="w-30"></Input> */}
                                <CalendarDays className="w-4 h-4" />
                                <strong>Invoice Date:</strong> May 21, 2025
                            </p>
                            <p className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4" />
                                <strong>Due Date:</strong> May 21, 2025
                            </p>
                        </div>
                    </div>

                    {/* Table */}
                    <div>
                        <div className="grid grid-cols-6 font-semibold bg-cyan-700 text-white p-2 text-sm">
                            <div className="col-span-2">Item Description</div>
                            <div>Qty</div>
                            <div>Rate</div>
                            <div>TAX</div>
                            <div>AMOUNT</div>
                        </div>

                        <div className="grid grid-cols-6 items-center text-sm p-2 border-b">
                            <div className="col-span-2">Brochure Design</div>
                            <div>2</div>
                            <div>$100.00</div>
                            <div>$12</div>
                            <div>$120</div>
                        </div>
                        {[1, 2].map((_, i) => (
                            <div key={i} className="grid grid-cols-6 items-center gap-2 border-b p-2 text-sm">
                                <Input placeholder="Enter item name/description" className="col-span-2" />
                                <Input type="number" placeholder="1" />
                                <Input type="number" placeholder="0.00" />
                                <Input type="number" placeholder="0.00" />
                            </div>
                        ))}

                        <Button variant="link" className="text-cyan-700 pl-2">
                            + Add Line Item
                        </Button>
                    </div>

                    {/* Totals */}
                    <div className="text-sm space-y-1 text-right">
                        <p>
                            <strong>Sub Total:</strong> $200.00
                        </p>
                        <p>
                            <strong>TAX (12%):</strong> $24.00
                        </p>
                        <div className="flex justify-end items-center gap-2">
                            <strong className="text-base">TOTAL</strong>
                            <Input className="w-32 text-right font-semibold text-lg" value="$224.00" readOnly />
                        </div>
                    </div>

                    {/* Notes and Terms */}
                    <div className="text-sm space-y-4">
                        <div>
                            <h4 className="font-semibold">Notes</h4>
                            <Textarea value="It was great doing business with you." readOnly />
                        </div>
                        <div>
                            <h4 className="font-semibold">Terms & Conditions</h4>
                            <Textarea value="Please make the payment by the due date." readOnly />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-xs text-muted-foreground text-end mt-6">
                        Powered by <strong>Zoho Invoice</strong><br />
                        100% Free Invoicing Solution
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateInvoice;