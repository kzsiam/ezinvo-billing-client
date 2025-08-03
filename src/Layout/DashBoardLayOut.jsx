import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AuthContext } from '@/Contexts/AuthProvider';
import useTitle from '@/hooks/useTitle';
import { ChevronDown, Menu } from 'lucide-react';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router';

const DashBoardLayOut = () => {
    const { user, logout } = useContext(AuthContext)
    useTitle('Dashboard')
   
    return (
        <div className="flex min-h-screen">
            {/* Sidebar for desktop */}
            <div className="hidden lg:flex w-64 flex-col bg-gray-100 p-2 shadow-md fixed top-0 bottom-0">

                <DropdownMenu className="mb-5">
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-lg border shadow-sm hover:bg-muted">

                            <Avatar>
                                {
                                    user?.photoURL ? <AvatarImage className="rounded-4xl hover:cursor-pointer" src={user?.photoURL} /> : <AvatarFallback className="text-cyan-700 hover:cursor-pointer">{user?.displayName?.slice(0, 1).toUpperCase()}</AvatarFallback>
                                }

                            </Avatar>
                            <span className="text-sm font-medium">{user?.displayName}</span>
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                    </DropdownMenuTrigger>
                </DropdownMenu>
                <Link to={"/"} className="mb-5 mt-5 px-2" >Home</Link>
                <Link to={"/dashboard"} className="mb-5 px-2">Dashboard</Link>
                <Link to={"/dashboard/allUsers"} className="mb-5 px-2">All Users</Link>
                <Link to={"/dashboard/reports"}  className="mb-5 px-2">Reports</Link>
                <Link onClick={logout} className="mb-5 px-2">Logout</Link>
            </div>

            {/* Drawer for small screens */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="cursor-pointer" variant="ghost" size="icon">
                            {/* <RiMenu3Fill className="w-6 h-6" /> */}
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 p-6">
                        <DropdownMenu className="mb-5">
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center gap-3 mt-5 cursor-pointer px-4 py-2 rounded-lg border shadow-sm hover:bg-muted">

                                    <Avatar>
                                        {
                                            user?.photoURL ? <AvatarImage className="rounded-4xl hover:cursor-pointer" src={user?.photoURL} /> : <AvatarFallback className="text-cyan-700 hover:cursor-pointer">{user?.displayName?.slice(0, 1).toUpperCase()}</AvatarFallback>
                                        }

                                    </Avatar>
                                    <span className="text-sm font-medium">{user?.displayName}</span>
                                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </DropdownMenuTrigger>

                        </DropdownMenu>
                        <Link to={"/"} className="mb-5 mt-5 px-2" >Home</Link>
                        <Link to={"/dashboard"} className="mb-5 px-2">Dashboard</Link>
                        <Link to={"/dashboard/allUsers"} className="mb-5 px-2">All Users</Link>
                        <Link to={"/dashboard/sellerOrders"} className="mb-5 px-2">Reports</Link>
                        <Link onClick={logout} className="mb-5 px-2">Logout</Link>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Page content */}
            <div className="flex-1 lg:ml-64 flex flex-col ">
                {/* Top bar */}
                <header className="flex lg:justify-center justify-end fixed top-0 w-full items-center px-6 py-4 shadow-sm bg-white">
                    <h2 className="text-xl text-end font-bold">
                        Welcome to EzInvo Admin Dashboard
                    </h2>
                </header>



                {/* Main outlet */}
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayOut;