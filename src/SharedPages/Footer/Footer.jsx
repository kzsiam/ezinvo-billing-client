import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-gray-100 border-t border-gray-200 py-20  bottom-0 relative px-4 mt-96 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
                    
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-2">EzInvo</h3>
                        <p>Simplify your invoicing process with our easy-to-use tools.</p>
                        <p className="mt-2">&copy; {new Date().getFullYear()} InvoiceGen. All rights reserved.</p>
                    </div>

                    <div>
                        <h4 className="text-gray-800 font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-1">
                            <Link to='/createInvoice' className="hover:text-primary block">Create Invoice</Link>
                            <Link to="/myInvoices" className="hover:text-primary block">My Invoices</Link>
                            <Link to="/clients" className="hover:text-primary block">Clients</Link>
                            <Link to="/report" className="hover:text-primary block">Report</Link>
                            <Link to="/pricingPlans" className="hover:text-primary block">Pricing</Link>
                            <Link to="/features" className="hover:text-primary block">Features</Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-800 font-semibold mb-2">Payments</h4>
                        <p className="mb-2">Secure payments powered by:</p>
                        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://stripe.com/img/v3/home/social.png" alt="Stripe" className="h-8" />
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;