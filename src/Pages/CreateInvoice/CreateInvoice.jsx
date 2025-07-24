import React, { useContext, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { AuthContext } from '@/Contexts/AuthProvider';
import { useNavigate } from 'react-router';






const CreateInvoice = () => {

    const { register, handleSubmit, control } = useForm();

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const countries = {
        us: "U.S.A",
        ca: "Canada",
        gb: "United Kingdom",
        au: "Australia",
        de: "Germany",
        fr: "France",
        in: "India",
        aw: "Aruba",
        af: "Afghanistan",
        ao: "Angola",
        ai: "Anguilla",
        ax: "Åland Islands",
        al: "Albania",
        ad: "Andorra",
        ae: "United Arab Emirates",
        ar: "Argentina",
        am: "Armenia",
        as: "American Samoa",
        aq: "Antarctica",
        tf: "French Southern Territories",
        ag: "Antigua and Barbuda",
        at: "Austria",
        az: "Azerbaijan",
        bi: "Burundi",
        be: "Belgium",
        bj: "Benin",
        bq: "Bonaire, Sint Eustatius and Saba",
        bf: "Burkina Faso",
        bd: "Bangladesh",
        bg: "Bulgaria",
        bh: "Bahrain",
        bs: "Bahamas",
        ba: "Bosnia and Herzegovina",
        bl: "Saint Barthélemy",
        by: "Belarus",
        bz: "Belize",
        bm: "Bermuda",
        bo: "Bolivia, Plurinational State of",
        br: "Brazil",
        bb: "Barbados",
        bn: "Brunei Darussalam",
        bt: "Bhutan",
        bv: "Bouvet Island",
        bw: "Botswana",
        cf: "Central African Republic",
        cc: "Cocos (Keeling) Islands",
        ch: "Switzerland",
        cl: "Chile",
        cn: "China",
        ci: "Côte d'Ivoire",
        cm: "Cameroon",
        cd: "Congo, The Democratic Republic of the",
        cg: "Congo",
        ck: "Cook Islands",
        co: "Colombia",
        km: "Comoros",
        cv: "Cabo Verde",
        cr: "Costa Rica",
        cu: "Cuba",
        cw: "Curaçao",
        cx: "Christmas Island",
        ky: "Cayman Islands",
        cy: "Cyprus",
        cz: "Czechia",
        dj: "Djibouti",
        dm: "Dominica",
        dk: "Denmark",
        do: "Dominican Republic",
        dz: "Algeria",
        ec: "Ecuador",
        eg: "Egypt",
        er: "Eritrea",
        eh: "Western Sahara",
        es: "Spain",
        ee: "Estonia",
        et: "Ethiopia",
        fi: "Finland",
        fj: "Fiji",
        fk: "Falkland Islands (Malvinas)",
        fo: "Faroe Islands",
        fm: "Micronesia, Federated States of",
        ga: "Gabon",
        ge: "Georgia",
        gg: "Guernsey",
        gh: "Ghana",
        gi: "Gibraltar",
        gn: "Guinea",
        gp: "Guadeloupe",
        gm: "Gambia",
        gw: "Guinea-Bissau",
        gq: "Equatorial Guinea",
        gr: "Greece",
        gd: "Grenada",
        gl: "Greenland",
        gt: "Guatemala",
        gf: "French Guiana",
        gu: "Guam",
        gy: "Guyana",
        hk: "Hong Kong",
        hm: "Heard Island and McDonald Islands",
        hn: "Honduras",
        hr: "Croatia",
        ht: "Haiti",
        hu: "Hungary",
        id: "Indonesia",
        im: "Isle of Man",
        io: "British Indian Ocean Territory",
        ie: "Ireland",
        ir: "Iran, Islamic Republic of",
        iq: "Iraq",
        is: "Iceland",
        il: "Israel",
        it: "Italy",
        jm: "Jamaica",
        je: "Jersey",
        jo: "Jordan",
        jp: "Japan",
        kz: "Kazakhstan",
        ke: "Kenya",
        kg: "Kyrgyzstan",
        kh: "Cambodia",
        ki: "Kiribati",
        kn: "Saint Kitts and Nevis",
        kr: "Korea, Republic of",
        kw: "Kuwait",
        la: "Lao People's Democratic Republic",
        lb: "Lebanon",
        lr: "Liberia",
        ly: "Libya",
        lc: "Saint Lucia",
        li: "Liechtenstein",
        lk: "Sri Lanka",
        ls: "Lesotho",
        lt: "Lithuania",
        lu: "Luxembourg",
        lv: "Latvia",
        mo: "Macao",
        mf: "Saint Martin (French part)",
        ma: "Morocco",
        mc: "Monaco",
        md: "Moldova, Republic of",
        mg: "Madagascar",
        mv: "Maldives",
        mx: "Mexico",
        mh: "Marshall Islands",
        mk: "North Macedonia",
        ml: "Mali",
        mt: "Malta",
        mm: "Myanmar",
        me: "Montenegro",
        mn: "Mongolia",
        mp: "Northern Mariana Islands",
        mz: "Mozambique",
        mr: "Mauritania",
        ms: "Montserrat",
        mq: "Martinique",
        mu: "Mauritius",
        mw: "Malawi",
        my: "Malaysia",
        yt: "Mayotte",
        na: "Namibia",
        nc: "New Caledonia",
        ne: "Niger",
        nf: "Norfolk Island",
        ng: "Nigeria",
        ni: "Nicaragua",
        nu: "Niue",
        nl: "Netherlands",
        no: "Norway",
        np: "Nepal",
        nr: "Nauru",
        nz: "New Zealand",
        om: "Oman",
        pk: "Pakistan",
        pa: "Panama",
        pn: "Pitcairn",
        pe: "Peru",
        ph: "Philippines",
        pw: "Palau",
        pg: "Papua New Guinea",
        pl: "Poland",
        pr: "Puerto Rico",
        kp: "Korea, Democratic People's Republic of",
        pt: "Portugal",
        py: "Paraguay",
        ps: "Palestine, State of",
        pf: "French Polynesia",
        qa: "Qatar",
        re: "Réunion",
        ro: "Romania",
        ru: "Russian Federation",
        rw: "Rwanda",
        sa: "Saudi Arabia",
        sd: "Sudan",
        sn: "Senegal",
        sg: "Singapore",
        gs: "South Georgia and the South Sandwich Islands",
        sh: "Saint Helena, Ascension and Tristan da Cunha",
        sj: "Svalbard and Jan Mayen",
        sb: "Solomon Islands",
        sl: "Sierra Leone"
    };

    const [items, setItems] = useState([
        { name: "lorem iupsum", quantity: 1, rate: 0, tax: 0 },
    ]);


    let subtotal = 0;
    let totalTax = 0;

    items.forEach(item => {
        subtotal += item.quantity * item.rate;
        totalTax += item.tax;
    });

    const grandTotal = subtotal + totalTax;

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

        //formatted date
        const formattedDueDate = data.dueDate
            ? `${String(data.dueDate.getDate()).padStart(2, '0')}-${String(
                data.dueDate.getMonth() + 1
            ).padStart(2, '0')}-${String(data.dueDate.getFullYear()).slice(-2)}`
            : "";
        const formattedIssueDate = data.dueDate
            ? `${String(data.issueDate.getDate()).padStart(2, '0')}-${String(
                data.issueDate.getMonth() + 1
            ).padStart(2, '0')}-${String(data.issueDate.getFullYear()).slice(-2)}`
            : "";

        //image uploaded and insert data 
        
        const uploadedImg = data.img[0]
        const formData = new FormData()
        formData.append("image", uploadedImg)
        const url = 'https://api.imgbb.com/1/upload?key=16612783c60b3795ca45e1987bb6938c';
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const invoiceData = {
                        invoiceLogo: imgData.data.display_url,
                        myCity: data.myCity,
                        myCompanyAddress: data.myCompanyAddress,
                        myCompanyName: data.myCompanyName,
                        myName: data.myName,
                        myEmail:data.myEmail,
                        myCountry: data.myCountry,

                        invoiceNumber: data.invoiceNumber,
                        dueDate: formattedDueDate,
                        issueDate: formattedIssueDate,

                        clientsCity: data.clientsCity,
                        clientsCompanyAddress: data.clientsCompanyAddress,
                        clientsCompanyName: data.clientsCompanyName,
                        clientsName: data.clientsName,
                        clientsEmail: data.clientsEmail,
                        clientsCountry: data.clientsCountry,

                        itemDetails: items,
                        subtotal,
                        totalTax,
                        grandTotal,
                        notes:data.notes,
                        termsCondition:data.termsCondition,

                        
                        email:user?.email


                    }

                    fetch('http://localhost:1000/invoiceCollections',{
                        method:"POST",
                        headers:{
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(invoiceData)
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.acknowledged){
                            navigate('/myInvoices')
                        }
                    })

                }
            })



        // You can also send `items` to a backend or store it in localStorage here
    };

    const deleteLineItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    const calculateAmount = (item) => {
        const rateAndTax = item.rate * item.quantity;
        return (rateAndTax + item.tax);
    };

    


    return (
        <div className="p-6 my-20 max-w-4xl mx-auto space-y-6">
            <Card>
                <CardContent className="p-6 space-y-6 lg:mx-10">
                    {/* Header */}
                    <form onSubmit={handleSubmit(handleSave)}>
                        <div className="text-right flex justify-between">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="flex flex-col items-center gap-4">
                                    <input
                                        className='border-2 px-2 py-2 rounded-sm'
                                        type='file'
                                        accept="image/*"
                                        {...register("img")}/>
                                </div>

                            </div>

                            <div>
                                <h2 className="text-xl font-bold mt-4">INVOICE</h2>
                            </div>
                        </div>



                        <div>
                            <div className=" text-sm">
                                <div className=" mb-1">
                                    <Input {...register("myCompanyName")}
                                        id=""
                                        placeholder="Your Company"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("myName")}
                                        id="name"
                                        placeholder="Your Name"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("myEmail")}
                                        id="name"
                                        placeholder="Your Email"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("myCompanyAddress")}
                                        id="name"
                                        placeholder="Company's Address"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("myCity")}
                                        id="name"
                                        placeholder="City, State Zip"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div>
                                    <select className='mx-2 shadow-none border-transparent focus:border-cyan-700 focus:outline-none text-gray-500' {...register("myCountry")} id="country">
                                        <option value="">Select Country</option>
                                        {Object.entries(countries).map(([code, name]) => (
                                            <option key={code} value={code}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Bill To */}
                        <div className="grid grid-cols-2 gap-6 text-sm mt-15">
                            <div className=" text-sm">
                                <h4 className="font-semibold">Bill To:</h4>
                                <div className="mb-1">
                                    <Input {...register("clientsCompanyName")}
                                        id="name"
                                        placeholder="Clients Company"
                                        className="border h-7 mb-2 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("clientsName")}
                                        id="name"
                                        placeholder="Clients Name"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("clientsEmail")}
                                        id="name"
                                        placeholder="Clients Email"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("clientsCompanyAddress")}
                                        id="name"
                                        placeholder="Client Company's Address"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                        required
                                    />
                                </div>
                                <div className="mb-1">
                                    <Input {...register("clientsCity")}
                                        id="name"
                                        placeholder="City, State Zip"
                                        className="border h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none "
                                    />
                                </div>
                                <div className='mb-5 '>
                                    <select className='mx-2 shadow-none border-transparent focus:border-cyan-700 focus:outline-none text-gray-500' {...register("clientsCountry")} id="country">
                                        <option value="">Select Country</option>
                                        {Object.entries(countries).map(([code, name]) => (
                                            <option key={code} value={code}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center'>
                                    <strong>Invoice#:</strong>
                                    <Input type="number" {...register("invoiceNumber")}
                                        id="name"
                                        placeholder="INV-12"
                                        className="border w-4xl h-7 shadow-none border-transparent focus:border-cyan-700 focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-2 r">
                                    <strong>Issue Date:</strong>

                                    <Controller
                                        name="issueDate"
                                        control={control}
                                        defaultValue={new Date()}
                                        render={({ field }) => (
                                            <DatePicker
                                                className="w-20"
                                                {...field}
                                                selected={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                minDate={new Date()}
                                                dateFormat="dd-MM-yy"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex items-center gap-2">

                                    <strong >Due Date:  </strong>
                                    <Controller
                                        name="dueDate"
                                        control={control}
                                        defaultValue={new Date()}
                                        render={({ field }) => (
                                            <DatePicker
                                                className="w-20"
                                                {...field}
                                                selected={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                minDate={new Date()}
                                                dateFormat="dd-MM-yy"
                                            />
                                        )}
                                    />
                                </div>
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
                                            {calculateAmount(item).toFixed(2)}
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
                                <strong>Sub Total: ${subtotal}</strong>
                            </p>
                            <p>
                                <strong>TAX :</strong> ${totalTax}
                            </p>
                            <div className="flex justify-end items-center gap-2">
                                <strong className="text-base">TOTAL</strong>
                                <Input className="w-32 text-right font-semibold text-lg" value={grandTotal} readOnly />
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