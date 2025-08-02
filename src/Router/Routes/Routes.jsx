import Main from "@/Layout/Main";
import CreateInvoice from "@/Pages/CreateInvoice/CreateInvoice";
import ForgetPassword from "@/Pages/ForgetPassword/ForgetPassword";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import MyInvoices from "@/Pages/MyInvoices/MyInvoices";
import Signup from "@/Pages/Signup/Signup";
import { createBrowserRouter } from "react-router";
import { PDFViewer } from '@react-pdf/renderer';
import MyDocuments from "@/Pages/MyInvoices/MyDocuments";
import PDFViewerPage from "@/Pages/MyInvoices/PDFViewerPage ";
import PricingPlans from "@/Pages/PricingPlans/PricingPlans";
import Profile from "@/Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoardLayOut from "@/Layout/DashBoardLayOut";
import AllUsers from "@/AdminPage/AllUsers/AllUsers";
import Dashboard from "@/AdminPage/Dashboard/Dashboard";
import AdminRoute from "../AdminRoute/AdminRoute";
import Success from "@/Pages/Payment/Success";
import Cancel from "@/Pages/Payment/Cancel";

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
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/createInvoice',
                element:<PrivateRoute><CreateInvoice></CreateInvoice></PrivateRoute>
            },
            {
                path:'/myInvoices',
                element:<PrivateRoute><MyInvoices></MyInvoices></PrivateRoute>
            },
            {
                path:'/pdfViewerPage/:id',
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_BASE_URL}/invoiceCollections/invoice/${params.id
                }`),
                element:<PDFViewerPage></PDFViewerPage>
            },
            {
                path:'/pricingPlans',
                element:<PricingPlans></PricingPlans>
            },
        ]
    },
    {
        path: "/dashboard",
        element:<AdminRoute><DashBoardLayOut></DashBoardLayOut></AdminRoute>,
        children:[
            {
                path:'/dashboard/allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard',
                element:<AdminRoute><Dashboard></Dashboard></AdminRoute>
            },
            {
                path:'/dashboard/allUsersee',
                element:<></>
            }
        ]
    },
    {
        path:'*',
        element:<h1>page not found</h1>
    },
    {
        path:'/success',
        element:<Success></Success>
    },
    {
        path:'/cancel',
        element:<Cancel></Cancel>
    },
])