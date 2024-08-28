import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Surveys from "../Pages/Shared/Surveys/Surveys";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";

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
]);