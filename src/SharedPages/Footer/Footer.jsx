import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-gray-100 border-t border-gray-200 py-8 px-4 mt-96 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
                    
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-2">InvoiceGen</h3>
                        <p>Simplify your invoicing process with our easy-to-use tools.</p>
                        <p className="mt-2">&copy; {new Date().getFullYear()} InvoiceGen. All rights reserved.</p>
                    </div>

                    <div>
                        <h4 className="text-gray-800 font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-primary">Dashboard</a></li>
                            <li><a href="#" className="hover:text-primary">Clients</a></li>
                            <li><a href="#" className="hover:text-primary">Pricing</a></li>
                            <li><a href="#" className="hover:text-primary">Contact</a></li>
                            <Link href="#" className="hover:text-primary block">Features</Link>
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