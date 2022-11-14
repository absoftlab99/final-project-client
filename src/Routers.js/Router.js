import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/home',
                element: <Home></Home>,
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/appointment',
                element: <Appointment></Appointment>
            },
            {
                path:'/reviews',
                element: <Reviews></Reviews>
            },
            {
                path:'/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'*',
                element: <Error></Error>
            }
        ]
    }
]);