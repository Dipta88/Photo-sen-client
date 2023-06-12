import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Error from "../Error/Error";
import Privatroute from "./Privateroute";
import Secret from "../pages/Shared/Secret/Secret";
import Classes from "../Classes/Classes";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";
import Instructor from "../Instructor/Instructor";


   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
          path: '*',
          element: <Error></Error>,
        },
        {
         path: 'secret',
         element: <Privatroute><Secret></Secret></Privatroute>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
         },
         {
          path: 'instructor',
          element: <Instructor></Instructor>
         },
         
      ]
     
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);
  