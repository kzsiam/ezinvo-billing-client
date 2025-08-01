import React, { useState } from 'react';
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
import { useContext } from 'react';
import { AuthContext } from '@/Contexts/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';
import useTitle from '@/hooks/useTitle';

const Login = () => {
  useTitle("Login")
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { register, handleSubmit } = useForm()
  const { signInEmail } = useContext(AuthContext)
  const [signinError, setSigninError] = useState(null)
  const handleSignin = (data) => {
    signInEmail(data.email, data.password)
      .then(() => {
        toast.success('welcome back')
        const user = { email: data.email }
        axios.post('http://localhost:1000/jwt', user, {
          withCredentials: true
        })
          .then(res => { })
        navigate(from, { replace: true })

      })
      .catch(error => {
        setSigninError(error.message)
      })
  }
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <CardTitle className="text-center text-xl py-7">
            <h1>Login to EzInvo</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>

          <form onSubmit={handleSubmit(handleSignin)}>
            <div className="grid w-full items-center gap-1.5 mb-5">
              <Label htmlFor="email" className="text-sm text-gray-600"> Enter Email </Label>
              <Input {...register("email")} type="email" id="email" placeholder="Enter Email" className="bg-gray-100 text-gray-700 placeholder:text-gray-400 border-0 rounded-md" />
            </div>
            <div className="grid w-full items-center gap-1.5 mb-2">
              <Label htmlFor="password" className="text-sm text-gray-600"> Password </Label>
              <Input {...register("password")} id="password"
                name="password"
                type="password"
                placeholder="********"

                required className="bg-gray-100 border-0 text-gray-700 placeholder:text-gray-400 rounded-md" />
              {
                signinError && <span className='text-red-600 mt-2'>{signinError}</span>
              }
            </div>

            <div className="text-right mt-2 mb-5"> <Label className="text-sm hover:underline cursor-pointer"> <Link to="/forgetPassword">Forgot Password?</Link> </Label> </div>

            <Button type="submit" className="w-full cursor-pointer bg-cyan-700 hover:bg-cyan-600 mb-3 text-white">
              Login
            </Button>
          </form>

          <div className="mb-5 items-center space-x-2 justify-center flex">
            <h1>Don't have an account? <Link className='underline' to="/auth/signup">Sign up</Link></h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;