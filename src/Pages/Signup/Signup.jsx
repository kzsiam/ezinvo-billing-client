import React, { useContext, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/Contexts/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
    const { createUser, updateUserInfo } = useContext(AuthContext)
    // console.log(user)
    const [isAccepted, setIsAccepted] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [signupError, setSignupError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignup = (data) => {
        

        const userData = {
            fullName: data.fullName,
            email: data.email,
            userType: "",
            mobileNumber: "",
            profileImage: "",
            gender: ""
        }

        if (data.password !== data.confirmPassword) {
            setPasswordError('password did not match')
        }

        if (data.password === data.confirmPassword) {
            createUser(data.email, data.password)
                .then(result => {
                    handleUpdate(data.fullName)
                    toast.success(
                        "Signup Successful! Please verify your email address to continue using our services. A verification link has been sent to your email. Access will remain restricted until verification is complete."
                    );

                    fetch("http://localhost:1000/usersCollection",{
                        method: "POST",
                         headers:{
                            "content-type": "application/json"
                        },
                        body:JSON.stringify(userData)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        navigate(from,{replace:true})
                    })
                    console.log(result.user.displayName)

                })
                .catch(error => {
                    setSignupError(error.message)
                })
        }
        // console.log(data)
    }

    const handleUpdate = (name) => {
        const profile = {
            displayName: name
        }
        updateUserInfo(profile)
            .then(() => {

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <Card className="w-full max-w-md shadow-lg rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-center text-xl py-7">
                        <h1>Create your EzInvo account</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>

                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="grid w-full items-center gap-1.5 mb-5">
                            <Label htmlFor="email" className="text-sm text-gray-600"> Full Name </Label>
                            <Input {...register("fullName", { required: true, maxLength: 20 })} id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="EX: John Smith" className="bg-gray-100 text-gray-700 placeholder:text-gray-400 border-0 rounded-md" />
                            {errors.fullName && <span className='text-red-600 mt-2'>Name is too long</span>}
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-5">
                            <Label htmlFor="email" className="text-sm text-gray-600"> Email </Label>
                            <Input {...register("email")} id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"

                                required className="bg-gray-100 text-gray-700 placeholder:text-gray-400 border-0 rounded-md" />
                            {errors.email && <span className='text-red-600 mt-2'>{errors.email.message}</span>}
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-5">
                            <Label htmlFor="email" className="text-sm text-gray-600"> Password </Label>
                            <Input {...register("password", {
                                required: "password is required",
                                minLength: { value: 8 },
                                pattern: { value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: 'password must have uppercase number & special characters' }
                            })} id="password"
                                name="password"
                                type="password"
                                placeholder="********"

                                required className="bg-gray-100 text-gray-700 placeholder:text-gray-400 border-0 rounded-md" />
                            {errors.password && <span className='text-red-600 mt-2'>{errors.password.message}</span>}
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-5">
                            <Label htmlFor="email" className="text-sm text-gray-600"> Confirm Password </Label>
                            <Input {...register("confirmPassword")} id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="********"

                                required className="bg-gray-100 text-gray-700 placeholder:text-gray-400 border-0" />
                            {
                                passwordError && <span className='text-red-600 mt-2'>{passwordError}</span>
                            }
                            {
                                signupError && <span className='text-red-600 mt-2'>{signupError.slice(9, 50)}</span>
                            }

                        </div>
                        <div className="flex mb-10 items-center space-x-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={isAccepted}
                                    onChange={(e) => setIsAccepted(e.target.checked)}
                                    className="h-4 w-4 "
                                />
                                <span><h1> By creating and/or using your account, you agree to our <Link className='text-blue-700'>Terms of Use</Link>  and <Link className='text-blue-700'>Privacy Policy</Link>.</h1></span>
                            </label>
                        </div>
                        <Button disabled={!isAccepted} type="submit" className="w-full bg-cyan-700
 hover:bg-cyan-600 mb-3 text-white">
                            Register
                        </Button>
                    </form>

                    <div className="mb-5 items-center space-x-2 justify-center flex">
                        <h1>Already have an account? <Link className='underline' to="/auth/login">Sign in</Link></h1>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Signup;