import React, { useContext, useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import axios from 'axios';
import ConfirmationDialogue from '@/SharedPages/ConfirmationDialogue/ConfirmationDialogue';
import toast from 'react-hot-toast';
import { AuthContext } from '@/Contexts/AuthProvider';
import { RiseLoader } from 'react-spinners';
import useTitle from '@/hooks/useTitle';

const AllUsers = () => {
    useTitle('All Users')

    const { user } = useContext(AuthContext)
    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [dbUser, setDBuser] = useState([])

    const [searchEmail, setSearchEmail] = useState("")
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/usersCollection/${user?.email}`)
                setDBuser(response.data)
                setLoading(false);      // Start loading
                setError(null);
            }

            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        if (user?.email) {
            fetchUsers()
        }
    }, [user?.email])

    const fetchUser = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/usersCollection?search=${searchEmail}`)
            setAllUsers(res.data)
            setLoading(true)
            setError(null)
        }
        catch (error) {
            setError(error.message)
        }
        finally {
            setError(null)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [searchEmail])

    const handleDeleteUser = (id) => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/usersCollection/${id}`, {
            method: "DELETE",
            headers: {

            }

        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    fetchUser()
                    toast.success("deleted successfully")

                }
            })
    }
    const handleMakeAdmin = (id) => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/makeAdmin/usersCollection/${id}`, {
            method: "PATCH",
            headers: {

            }

        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    fetchUser()
                    toast.success('Make Admin Successfully')

                }
            })
    }
    const handleDeleteAdmin = (id) => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/deleteAdmin/usersCollection/${id}`, {
            method: "PATCH",
            headers: {

            }

        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    fetchUser()
                    toast.success('Delete Admin Successfully')

                }
            })
    }

    console.log(searchEmail)


    if (loading) return <div className=' mt-60 flex justify-center items-center'>
        {/* <h1>loading....</h1> */}
        <RiseLoader />
    </div>;
    if (error) {
        return <h1>error</h1>
    }


    return (
        <div>
            <h1 className='lg:mx-60 mt-10'>EzInvo Users</h1>

            <div className=" text-black p-6 lg:mx-62 mt-0 rounded-lg space-y-4">
                <div className="flex justify-start items-center gap-2">
                    <Input onKeyUp={(e) => setSearchEmail(e.target.value)}
                        placeholder="Filter emails..."
                        className="w-64  border-zinc-700  placeholder:text-zinc-400"
                    />
                </div>

                {
                    allUsers.length === 0 ? <p className="text-center text-gray-500 mt-4">No Users found.</p> : <>
                        <Table className="border  rounded-lg">
                            <TableHeader>
                                <TableRow>
                                    <TableHead >
                                        <h1 className="mx-5">#</h1>
                                    </TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead className="cursor-pointer">Email ⬍</TableHead>
                                    <TableHead>User Type</TableHead>
                                    <TableHead />
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {allUsers.map((allUser, i) => (
                                    <TableRow key={allUser._id}>
                                        <TableCell>
                                            <h1 className='mx-5'>{i + 1}</h1>
                                        </TableCell>
                                        <TableCell>
                                            <div className='flex items-center gap-2'>

                                                <h1>{allUser.fullName}</h1>
                                            </div>

                                        </TableCell>
                                        <TableCell>{allUser.email}</TableCell>
                                        <TableCell>{allUser?.role}</TableCell>
                                        <TableCell className="text-right">

                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <MoreHorizontal className="h-4 w-4 cursor-pointer " />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-56" align="start">
                                                    <DropdownMenuLabel>
                                                        {/* Make admin */}
                                                        {
                                                            allUser.role !== "admin" ? <ConfirmationDialogue
                                                                title="Make Admin?"
                                                                message={`Are you sure you want to Make Admin ${allUser.fullName}? This action cannot be undone.`}
                                                                onConfirm={() => handleMakeAdmin(allUser._id)}
                                                                trigger={
                                                                    <Button className="bg-cyan-700 hover:bg-cyan-600s w-24 cursor-pointer" size="sm">
                                                                        Make Admin
                                                                    </Button>
                                                                }
                                                            /> : <ConfirmationDialogue
                                                                title="Delete Admin?"
                                                                message={`Are you sure you want to Delete Admin ${allUser.fullName}? This action cannot be undone.`}
                                                                onConfirm={() => handleDeleteAdmin(allUser._id)}
                                                                trigger={
                                                                    <Button className="bg-cyan-700 hover:bg-cyan-600s w-24 cursor-pointer" size="sm">
                                                                        Delete Admin
                                                                    </Button>
                                                                }
                                                            />
                                                        }



                                                        {/* Delete admin */}

                                                    </DropdownMenuLabel>
                                                    <DropdownMenuLabel>
                                                        {/* Delete User */}
                                                        <ConfirmationDialogue
                                                            title="Delete User?"
                                                            message={`Are you sure you want to delete ${allUser.fullName}? This action cannot be undone.`}
                                                            onConfirm={() => handleDeleteUser(allUser._id)}
                                                            trigger={
                                                                <Button className="bg-cyan-700 hover:bg-cyan-600 cursor-pointer" size="sm">
                                                                    Delete User
                                                                </Button>
                                                            }
                                                        />
                                                    </DropdownMenuLabel>

                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <div className="flex justify-end text-sm  pt-2">
                            <div className="space-x-2">
                                <Button variant="ghost" size="sm" className="cursor-pointer">Previous</Button>
                                <Button variant="ghost" size="sm" className="cursor-pointer">Next</Button>
                            </div>
                        </div>

                    </>
                }



            </div>
        </div>
    );
};

export default AllUsers;


