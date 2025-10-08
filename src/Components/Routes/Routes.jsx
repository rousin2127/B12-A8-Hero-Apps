import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Error from "../Pages/ErrorPage/Error";
import Installation from "../Pages/Installation/Installation";


const router= createBrowserRouter([
  {
    path:'/',
    Component: Root,
    hydrateFallbackElement: <p><span>Loading.....</span></p>,
    children:[
        {
            index:true,
            loader: ()=> fetch('./appsData.json'),
            Component:Home
        },
        {
            path:'/apps',
            Component:Apps
        },
        {
            path:'installation',
            Component:Installation
        }
    ]
  }
])

export default router;