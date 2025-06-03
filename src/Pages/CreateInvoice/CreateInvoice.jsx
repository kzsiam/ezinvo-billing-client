import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';






const CreateInvoice = () => {

    const { register, handleSubmit, control } = useForm();

    const [items, setItems] = useState([
        { name: "lorem iupsum", quantity: 1, rate: 0, tax: 0 },
    ]);

    const handleChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] =
            field === "quantity" || field === "rate" || field === "tax"
                ? parseFloat(value) || 0
                : value;
        setItems(updated);
    };

    const addLineItem = () => {
        setItems([...items, { name: "", quantity: 1, rate: 0, tax: 0 }]);
    };

    const handleSave = (data) => {
        // console.log("Saved items:", items);
        console.log(data);

        // You can also send `items` to a backend or store it in localStorage here
    };

    const deleteLineItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    const calculateAmount = (item) => {
        return item.quantity * (item.rate + item.tax);
    };


    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;



        const img = new Image();
        const objectUrl = URL.createObjectURL(file);
        img.src = objectUrl;

        img.onload = () => {

            setPreview(objectUrl);
        };
    };



    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="p-6 my-20 max-w-4xl mx-auto space-y-6">
            <Card>
                <CardContent className="p-6 space-y-6 lg:mx-10">
                    {/* Header */}
                    <form onSubmit={handleSubmit(handleSave)}>
                        <div className="text-right flex justify-between">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="flex flex-col items-center gap-4">
                                    <label
                                        htmlFor="image-upload"
                                        className="cursor-pointer px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
                                    >
                                        Upload Image
                                    </label>
                                    <input {...register("image")}
                                        type="file"
                                        id="image-upload"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden w-16"
                                        required
                                    />



                                    {preview && (
                                        <div className="w-[100px] h-[100px] border shadow rounded overflow-hidden">
                                            <img
                                                src={preview}
                                                alt="Uploaded Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div>
                                <h2 className="text-xl font-bold mt-4">INVOICE</h2>
                            </div>
                        </div>



                        <div>
                            <div className=" text-sm">
                                <div className="">
                                    <Input {...register("myCompanyName")}
                                        id=""
                                        placeholder="Your Company"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="">
                                    <Input {...register("myName")}
                                        id="name"
                                        placeholder="Your Name"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="">
                                    <Input {...register("myCompanyAddress")}
                                        id="name"
                                        placeholder="Company's Address"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                    />
                                </div>
                                <div className="">
                                    <Input {...register("myCity")}
                                        id="name"
                                        placeholder="City, State Zip"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-[180px] border-0 shadow-none">
                                            <SelectValue placeholder="Select Country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>

                                                <SelectItem value="us">U.S.A</SelectItem>
                                                <SelectItem value="ca">Canada</SelectItem>
                                                <SelectItem value="gb">United Kingdom</SelectItem>
                                                <SelectItem value="au">Australia</SelectItem>
                                                <SelectItem value="de">Germany</SelectItem>
                                                <SelectItem value="fr">France</SelectItem>
                                                <SelectItem value="it">Italy</SelectItem>
                                                <SelectItem value="es">Spain</SelectItem>
                                                <SelectItem value="br">Brazil</SelectItem>
                                                <SelectItem value="mx">Mexico</SelectItem>
                                                <SelectItem value="in">India</SelectItem>
                                                <SelectItem value="cn">China</SelectItem>
                                                <SelectItem value="jp">Japan</SelectItem>
                                                <SelectItem value="kr">South Korea</SelectItem>
                                                <SelectItem value="za">South Africa</SelectItem>
                                                <SelectItem value="ng">Nigeria</SelectItem>
                                                <SelectItem value="eg">Egypt</SelectItem>
                                                <SelectItem value="ru">Russia</SelectItem>
                                                <SelectItem value="tr">Turkey</SelectItem>
                                                <SelectItem value="sa">Saudi Arabia</SelectItem>
                                                <SelectItem value="ar">Argentina</SelectItem>
                                                <SelectItem value="cl">Chile</SelectItem>
                                                <SelectItem value="co">Colombia</SelectItem>
                                                <SelectItem value="ve">Venezuela</SelectItem>
                                                <SelectItem value="pk">Pakistan</SelectItem>
                                                <SelectItem value="bd">Bangladesh</SelectItem>
                                                <SelectItem value="id">Indonesia</SelectItem>
                                                <SelectItem value="vn">Vietnam</SelectItem>
                                                <SelectItem value="th">Thailand</SelectItem>
                                                <SelectItem value="my">Malaysia</SelectItem>
                                                <SelectItem value="ph">Philippines</SelectItem>
                                                <SelectItem value="ir">Iran</SelectItem>
                                                <SelectItem value="iq">Iraq</SelectItem>
                                                <SelectItem value="uae">United Arab Emirates</SelectItem>
                                                <SelectItem value="qa">Qatar</SelectItem>
                                                <SelectItem value="kw">Kuwait</SelectItem>
                                                <SelectItem value="af">Afghanistan</SelectItem>
                                                <SelectItem value="np">Nepal</SelectItem>
                                                <SelectItem value="lk">Sri Lanka</SelectItem>
                                                <SelectItem value="ke">Kenya</SelectItem>
                                                <SelectItem value="gh">Ghana</SelectItem>
                                                <SelectItem value="tz">Tanzania</SelectItem>
                                                <SelectItem value="ug">Uganda</SelectItem>
                                                <SelectItem value="et">Ethiopia</SelectItem>
                                                <SelectItem value="pl">Poland</SelectItem>
                                                <SelectItem value="se">Sweden</SelectItem>
                                                <SelectItem value="no">Norway</SelectItem>
                                                <SelectItem value="fi">Finland</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Bill To */}
                        <div className="grid grid-cols-2 gap-6 text-sm">
                            <div className=" text-sm">
                                <h4 className="font-semibold">Bill To:</h4>
                                <div className="">
                                    <Input {...register("clientsCompanyName")}
                                        id="name"
                                        placeholder="Your Clients Company"
                                        className="border h-7 mb-2 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="">
                                    <Input {...register("clientsName")}
                                        id="name"
                                        placeholder="Your Clients Name"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="">
                                    <Input {...register("clientsCompanyAddress")}
                                        id="name"
                                        placeholder="Client Company's Address"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="">
                                    <Input {...register("clientsCity")}
                                        id="name"
                                        placeholder="City, State Zip"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                    />
                                </div>
                                <div>
                                    <select {...register("select")} defaultValue="Pick a browser" className="select">
                                        <option disabled={true}>Pick a browser</option>
                                        <option>Chrome</option>
                                        <option>FireFox</option>
                                        <option>Safari</option>
                                    </select>
                                    <Controller name='country' control={control} defaultValue="" render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-[180px] border-0 shadow-none">
                                                <SelectValue placeholder="Select Country" />
                                            </SelectTrigger>
                                            <SelectContent >
                                                <SelectGroup>

                                                    <SelectItem value="us">U.S.A</SelectItem>
                                                    <SelectItem value="ca">Canada</SelectItem>
                                                    <SelectItem value="gb">United Kingdom</SelectItem>
                                                    <SelectItem value="au">Australia</SelectItem>
                                                    <SelectItem value="de">Germany</SelectItem>
                                                    <SelectItem value="fr">France</SelectItem>
                                                    <SelectItem value="it">Italy</SelectItem>
                                                    <SelectItem value="es">Spain</SelectItem>
                                                    <SelectItem value="br">Brazil</SelectItem>
                                                    <SelectItem value="mx">Mexico</SelectItem>
                                                    <SelectItem value="in">India</SelectItem>
                                                    <SelectItem value="cn">China</SelectItem>
                                                    <SelectItem value="jp">Japan</SelectItem>
                                                    <SelectItem value="kr">South Korea</SelectItem>
                                                    <SelectItem value="za">South Africa</SelectItem>
                                                    <SelectItem value="ng">Nigeria</SelectItem>
                                                    <SelectItem value="eg">Egypt</SelectItem>
                                                    <SelectItem value="ru">Russia</SelectItem>
                                                    <SelectItem value="tr">Turkey</SelectItem>
                                                    <SelectItem value="sa">Saudi Arabia</SelectItem>
                                                    <SelectItem value="ar">Argentina</SelectItem>
                                                    <SelectItem value="cl">Chile</SelectItem>
                                                    <SelectItem value="co">Colombia</SelectItem>
                                                    <SelectItem value="ve">Venezuela</SelectItem>
                                                    <SelectItem value="pk">Pakistan</SelectItem>
                                                    <SelectItem value="bd">Bangladesh</SelectItem>
                                                    <SelectItem value="id">Indonesia</SelectItem>
                                                    <SelectItem value="vn">Vietnam</SelectItem>
                                                    <SelectItem value="th">Thailand</SelectItem>
                                                    <SelectItem value="my">Malaysia</SelectItem>
                                                    <SelectItem value="ph">Philippines</SelectItem>
                                                    <SelectItem value="ir">Iran</SelectItem>
                                                    <SelectItem value="iq">Iraq</SelectItem>
                                                    <SelectItem value="uae">United Arab Emirates</SelectItem>
                                                    <SelectItem value="qa">Qatar</SelectItem>
                                                    <SelectItem value="kw">Kuwait</SelectItem>
                                                    <SelectItem value="af">Afghanistan</SelectItem>
                                                    <SelectItem value="np">Nepal</SelectItem>
                                                    <SelectItem value="lk">Sri Lanka</SelectItem>
                                                    <SelectItem value="ke">Kenya</SelectItem>
                                                    <SelectItem value="gh">Ghana</SelectItem>
                                                    <SelectItem value="tz">Tanzania</SelectItem>
                                                    <SelectItem value="ug">Uganda</SelectItem>
                                                    <SelectItem value="et">Ethiopia</SelectItem>
                                                    <SelectItem value="pl">Poland</SelectItem>
                                                    <SelectItem value="se">Sweden</SelectItem>
                                                    <SelectItem value="no">Norway</SelectItem>
                                                    <SelectItem value="fi">Finland</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}>

                                    </Controller>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center'>
                                    <strong>Invoice#:</strong>
                                    <Input {...register("invoiceNumber")}
                                        id="name"
                                        placeholder="INV-12"
                                        className="border w-4xl h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none"
                                        required
                                    />
                                </div>
                                <p className="flex items-center gap-2 r">
                                    {/* <Input type='date' className="w-30"></Input> */}
                                    <strong>Issue Date:</strong>
                                    <DatePicker className='w-20'

                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        minDate={new Date()}
                                        dateFormat={"dd-MM-yy"}

                                    />
                                </p>
                                <p className="flex items-center gap-2">

                                    <strong >Due Date:  </strong>
                                    <DatePicker className='w-20'

                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        minDate={new Date()}
                                        dateFormat={"dd-MM-yy"}

                                    />
                                </p>
                            </div>

                        </div>

                        {/* Table */}
                        <div>
                            <div className="grid grid-cols-7 font-semibold bg-cyan-700 text-white p-2 text-sm">
                                <div className="col-span-2">Item Description</div>
                                <div>Qty</div>
                                <div>Rate</div>
                                <div>TAX</div>
                                <div>AMOUNT</div>
                                <div></div>
                            </div>


                            <div className="space-y-2 mt-2">
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-7 gap-2 items-center border-b pb-2"
                                    >
                                        <Input className="col-span-2"
                                            placeholder="Enter item name/description"
                                            value={item.name}
                                            onChange={(e) => handleChange(index, "name", e.target.value)}
                                        />
                                        <Input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleChange(index, "quantity", e.target.value)}
                                        />
                                        <Input
                                            type="number"
                                            value={item.rate}
                                            onChange={(e) => handleChange(index, "rate", e.target.value)}
                                        />
                                        <Input
                                            type="number"
                                            value={item.tax}
                                            onChange={(e) => handleChange(index, "tax", e.target.value)}
                                        />
                                        {/* <div className="text-center  font-semibold text-sm pr-2">
                                        00
                                    </div> */}
                                        <div className="text-right font-semibold text-sm pr-2">
                                            ${calculateAmount(item).toFixed(2)}
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => deleteLineItem(index)}
                                        >
                                            <h1 className='text-red-500'>x</h1>
                                        </Button>
                                    </div>
                                ))}

                                <Button
                                    variant="link"
                                    className="text-cyan-700 text-sm"
                                    onClick={addLineItem}
                                >
                                    + Add Line Item
                                </Button>
                            </div>
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
                                <Textarea {...register("notes")} defaultValue="It was great doing business with you." />
                            </div>
                            <div>
                                <h4 className="font-semibold">Terms & Conditions</h4>
                                <Textarea {...register("termsCondition")} defaultValue="Please make the payment by the due date." />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-xs text-muted-foreground text-end mt-6">
                            Powered by <strong>EzInvo</strong><br />
                            100% Free Invoicing Solution
                        </div>

                        <div className='flex justify-end'>
                            <Button onClick={handleSave} className="bg-cyan-700">Save Online</Button>

                        </div>
                    </form>
                </CardContent>
            </Card>


        </div>
    );
};

export default CreateInvoice;