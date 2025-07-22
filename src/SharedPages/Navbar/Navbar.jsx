import React, { useContext, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Menu, User, X } from 'lucide-react';
import { Link } from 'react-router';
import { AuthContext } from '@/Contexts/AuthProvider';

const Navbar = () => {
    const { user,logout } = useContext(AuthContext)
    console.log(user)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <div className=''>
            <header className="w-full px-6 py-4 bg-white shadow-md fixed top-0 z-50 mb-20">
                <div className="flex justify-between items-center container mx-auto">
                    {/* Logo / Brand */}
                    <div className="text-xl font-bold ">EzInvo</div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-6 text-sm ">
                        <Link to='/createInvoice' className="hover:text-primary block">Create Invoice</Link>
                        <Link to='/myInvoices' className="hover:text-primary block">My Invoices</Link>
                        <Link to='/' className="hover:text-primary block">Dashboard</Link>
                        <Link to='/' className="hover:text-primary block">Clients</Link>
                        <Link to='/pricingPlans' className="hover:text-primary block">Pricing</Link>

                    </nav>

                    {/* Right side */}
                    <div className=" gap-4">
                        <div className='hidden lg:inline-block'>
                            <div className="flex items-center space-x-3">
                                {
                                    !user && <Link to='/auth/login' className="hover:text-primary block">Login</Link>
                                }
                                {
                                user && <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <User className="w-5 h-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                       <Link to={'/profile'}>Profile</Link>
                                        </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link>Settings</Link>
                                    </DropdownMenuItem>
                                    <button onClick={logout} className='pointer'><DropdownMenuItem>Logout</DropdownMenuItem></button>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            }
                                <Button className='mx3 bg-cyan-700 text-white hover:bg-cyan-600'>
                                    Try it free
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (

                    <div className="h-screen flex flex-col items-center mb-20 space-y-6 mt-10">
                        {/* Profile and Button */}
                        <div className="flex items-center space-x-3">

                            {
                                !user && <Link to='/auth/login' className="hover:text-primary block">Login</Link>
                            }
                            {
                                user && <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <User className="w-5 h-5" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link>Settings</Link>
                                        </DropdownMenuItem>
                                        <button onClick={logout}><DropdownMenuItem>Logout</DropdownMenuItem></button>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            }
                            <Button className='mx3 bg-cyan-700 text-white hover:bg-cyan-600'>
                                Try it free
                            </Button>
                        </div>

                        {/* Menu Items */}
                        <nav className="flex  flex-col items-center space-y-6 text-black text-sm font-normal ">
                            <Link to='/createInvoice' className="hover:text-primary block">Create Invoice</Link>
                            <Link href="/myInvoices" className="hover:text-primary block">My Invoices</Link>
                            <Link href="#" className="hover:text-primary block">Dashboard</Link>
                            <Link href="#" className="hover:text-primary block">Clients</Link>
                            <Link href="/pricingPlans" className="hover:text-primary block">Pricing</Link>
                        </nav>
                    </div>
                )}


            </header>
        </div>
    );
};

export default Navbar;