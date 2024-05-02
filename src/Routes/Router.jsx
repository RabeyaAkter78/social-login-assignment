
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import SocialLogin from "../Pages/SocialLogin/SocialLogin";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<SocialLogin></SocialLogin>
        }
      ]
    },
  ]);