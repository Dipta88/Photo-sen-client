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
      ]
    },
  ]);
  