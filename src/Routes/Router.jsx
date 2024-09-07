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
import UserSurveys from "../Pages/DashboardElements/UsersDash/UserSurveys";
import SurveysDetails from "../Pages/Shared/Surveys/SurveysDetails";
import AdminHome from "../Pages/DashboardElements/AdminDash/AdminHome";
import AdminUser from "../Pages/DashboardElements/AdminDash/AdminUser";
import AdminSurveys from "../Pages/DashboardElements/AdminDash/AdminSurveys";
import AdminPayments from "../Pages/DashboardElements/AdminDash/AdminPayments";
import SurveyorHome from "../Pages/DashboardElements/SurveyorDash/SurveyorHome";
import SurveyorMake from "../Pages/DashboardElements/SurveyorDash/SurveyorMake";
import SurveyorsSurveys from "../Pages/DashboardElements/SurveyorDash/SurveyorsSurveys";
import Work from "../Pages/Home/Work/Work";
import Faqs from "../Pages/Home/Home/Faqs/Faqs";
import Pricing from "../Pages/Home/Pricing/Pricing";
import Pay from "../Pages/Home/Pricing/Pay";





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
            path: "work",
            element: <Work></Work>
        },
        {
            path: "faqs",
            element: <Faqs></Faqs>
        },
        {
            path: "pricing",
            element: <Pricing></Pricing>
        },
        {
            path: "pay",
            element: <Pay></Pay>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "singup",
            element: <SingUp></SingUp>
        },     
        {
            path: 'suurveys/:id',
            element: <SurveysDetails></SurveysDetails>
        },  
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        // user routes
        {
            path: 'user/Home',
            element: <UserHome></UserHome>
        },
        {
            path: 'user/surveys',
            element: <PrivateRoute><UserSurveys></UserSurveys></PrivateRoute>
        },
        
        {
            path: 'user/reports',
            element: <PrivateRoute><Reports></Reports></PrivateRoute>
        },
        {
            path: "user/comments",
            element: <PrivateRoute><Comments></Comments></PrivateRoute>
        },
        // admin routes
        {
            path: "adminHome",
            element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
        },
        {
            path: "admin/users",
            element: <PrivateRoute> <AdminUser></AdminUser></PrivateRoute>
        },
        {
            path: "admin/surveys",
            element: <PrivateRoute><AdminSurveys></AdminSurveys></PrivateRoute>
        },
        {
            path: "admin/payments",
            element: <PrivateRoute><AdminPayments></AdminPayments></PrivateRoute>
        },
        // surveyor
        {
            path: "surveyor",
            element: <PrivateRoute><SurveyorHome></SurveyorHome></PrivateRoute>
        },
        {
            path: "surveyor/create",
            element: <PrivateRoute><SurveyorMake></SurveyorMake></PrivateRoute>
        },
        {
            path: "surveyor/surveys",
            element: <PrivateRoute><SurveyorsSurveys></SurveyorsSurveys></PrivateRoute>
        }
    ]
  }
]);