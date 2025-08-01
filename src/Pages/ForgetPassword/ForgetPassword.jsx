import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthContext } from '@/Contexts/AuthProvider';
import useTitle from '@/hooks/useTitle';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    useTitle('Forgot Password')

    const {emailReset} = useContext(AuthContext)

    const { register, handleSubmit,reset } = useForm();

    const handleForget = (data,e) =>{
        emailReset(data.email)
        .then(() =>{
            toast.success("email sent,please check your email and reset it")
            reset()
            e.preventDefault()
        })
    }
    return (
        <div className='mb-96'>
            <form onSubmit={handleSubmit(handleForget)}>
                <div className="grid justify-center w-full items-center gap-1.5 mb-2">
                    <h1 className='mt-40 mb-5 text-center text-xl font-semibold'>Forgot your Password</h1>
                    <Input {...register("email")} placeholder="email" type={"email"} required className="bg-gray-100 py-6 border-0 text-gray-700 w-80 placeholder:text-gray-400 rounded-md" />
                    <Button type="submit" className="w-full bg-cyan-700 hover:bg-cyan-600 mb-3 py-6 mt-2 cursor-pointer text-white">
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;