import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Error from "../Pages/ErrorPage/Error";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppsDetails/AppDetails";


const router= createBrowserRouter([
  {
    path:'/',
    Component: Root,
    hydrateFallbackElement: <p><span>Loading.....</span></p>,
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

        
        // {
        //   path:'/app/*',
        //   Component:Error
        // }
    ]
  }
])

export default router;