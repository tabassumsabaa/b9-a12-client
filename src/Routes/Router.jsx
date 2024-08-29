import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Surveys from "../Pages/Shared/Surveys/Surveys";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard";
import UserHome from "../Pages/DashboardElements/UsersDash/UserHome";
import Reports from "../Pages/DashboardElements/UsersDash/Reports";
import Comments from "../Pages/DashboardElements/UsersDash/Comments";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: "/suurveys",
            element: <Surveys></Surveys>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "singup",
            element: <SingUp></SingUp>
        },       
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        // user routes
        {
            path: '/dashboard/userHome',
            element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
        {
            path: '/dashboard/user/surveys',
            element: <PrivateRoute><Reports></Reports></PrivateRoute>
        },
        {
            path: '/dashboard/user/reports',
            element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
        {
            path: "/dashboard/user/comments",
            element: <PrivateRoute><Comments></Comments></PrivateRoute>
        }
    ]
  }
]);