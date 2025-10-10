import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Error from "../Pages/ErrorPage/Error";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppsDetails/AppDetails";
import LoadingSpiner from "../Loading/LoadingSpiner";


const router= createBrowserRouter([
  {
    path:'/',
    Component: Root,
    // hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/apps',
            Component:Apps
        },
        {
            path:'installation',
            Component:Installation
        },
        {
          path:'/app/:id',
          Component:AppDetails

        },
        {
          path:'/loading',
          Component: LoadingSpiner
        },
        {
          path:'*',
          Component:Error
        }
        
        // {
        //   path:'/app/*',
        //   Component:Error
        // }
    ]
  }
])

export default router;