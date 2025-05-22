import Main from "@/Layout/Main";
import CreateInvoice from "@/Pages/CreateInvoice/CreateInvoice";
import ForgetPassword from "@/Pages/ForgetPassword/ForgetPassword";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import Signup from "@/Pages/Signup/Signup";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/signup',
                element:<Signup></Signup>
            },
            {
                path:'/forgetPassword',
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:'/createInvoice',
                element:<CreateInvoice></CreateInvoice>
            }
        ]
    }
])