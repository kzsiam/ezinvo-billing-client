import { Button } from '@/components/ui/button';
import React from 'react';
import invoiceImg from '../../assets/Invoice.png'
import image2 from "../../assets/laptop and pdf.png"
import image3 from "../../assets/hpdah[1].png"
import { Mail } from 'lucide-react';
import { Link } from 'react-router';
import useTitle from '@/hooks/useTitle';

const Home = () => {
  useTitle("Home")
  return (
    <div className='mt-20'>
      <div className="bg-white py-16 px-4 mx-auto flex justify-center items-center text-center  ">

        {/* Content */}
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Online Invoice Generator
          </h1>
          <p className="text-gray-600 mb-6 text-base">
            Create & download invoices for free
          </p>
          <Link to={"/createInvoice"}><Button className="bg-cyan-700 hover:bg-cyan-800 px-6 py-5 cursor-pointer text-white text-sm rounded-full shadow-md">
            Create Free Invoice Now
          </Button></Link>

          <div className='lg:w-96 flex justify-center items-center shadow-xl'>
            <img className='' src={invoiceImg} alt=''></img>
          </div>
        </div>
      </div>
      <section>
        <div className="px-6 py-12 md:py-20 bg-white lg:mx-52">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Image Section */}
            <div className="flex justify-center md:order-2">
              <img
                src={image3} // replace with actual path
                alt="Invoice Illustration"
                className="w-full max-w-sm object-contain"
              />
            </div>


            {/* Text Section */}
            <div className="md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Brand your invoices with your customized business logo for free
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Each invoice created with our online invoice maker can be customized to the specific client you’re sending it to.
                You can choose to add your company or business logo, add sender info (or set default sender in the settings),
                add client info, add as many items as you wish such as products with fixed prices & services with hourly rates,
                add taxes and to make sure to get paid on time add invoice payment terms such as banking details or payment link
                and due date.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                The clean, user-friendly interface of the invoice generator also lets you add new clients and manage them easily.
                Contact, company & payment details and customized{" "}
                <a href="#" className="text-cyan-600 font-medium underline hover:text-cyan-800">
                  invoice templates
                </a>{" "}
                can be saved for recurring invoices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-6 py-12 md:py-20 bg-white lg:mx-52">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Image Section */}
            <div className="flex justify-center ">
              <img
                src={image2} // replace with actual path
                alt="Invoice Illustration"
                className="w-full max-w-sm object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Generate unlimited invoices & PDF download
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Using our online invoice maker, you can generate an unlimited number of invoices and download them as PDF without having to pay extra. Free Invoice Builder will help you to make invoices in the correct format with all essential elements. Plus, you can easily help you save, track and manage all your invoices & contacts, so you’ll never lose or misplace an invoice and clients business details.
              </p>

            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="px-6 py-16 md:py-24 bg-white text-center md:text-left">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Why use Free Invoice Builder?
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              Sending invoices to clients is a large part of any business – in order to keep a business running, payments from clients must be received on time. However, the{" "}
              <span className="text-cyan-600 font-medium">process of producing invoices</span>{" "}
              can often be quite tedious, which is why many business owners defer it to the last possible minute. But now, with new digital tools and technologies available, all that has changed: producing invoices and sending them to clients has never been easier.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              Free Invoice Builder is an{" "}
              <a href="#" className="text-cyan-600 font-medium underline hover:text-cyan-800">
                online invoice generator
              </a>{" "}
              – an innovative business tool you can use for creating invoices online without any hassle. It allows businesses to produce invoices using a ready-made template, where all that needs to be done is inserting the client’s details, the items for payment,{" "}
              <a href="#" className="text-cyan-600 font-medium underline hover:text-cyan-800">
                taxes (if necessary)
              </a>{" "}
              and the total amount – then sending the invoice to the client online.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              With this free invoice maker, you can build great-looking PDF invoices from scratch on your web browser and send them to clients in seconds – which saves time for both you and your clients.
            </p>

            <div className="mt-8 space-y-4 text-center">
              <div className="flex justify-center items-center space-x-2 text-cyan-700">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:contact@freeinvoicebuilder.com"
                  className="font-medium underline hover:text-cyan-700"
                >
                  contact@freeinvoicebuilder.com
                </a>
              </div>

              <Link to={"/createInvoice"}><Button className="bg-cyan-700 hover:bg-cyan-800 px-6 py-5 cursor-pointer text-white text-sm rounded-full shadow-md">
            Create Free Invoice Now
          </Button></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;