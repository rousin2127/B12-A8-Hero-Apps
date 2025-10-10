import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Error from "../Pages/ErrorPage/Error";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppsDetails/AppDetails";
import LoadingSpiner from "../Loading/LoadingSpiner";
import ErrorA from "../Pages/ErrorPage/ErrorA";


const router= createBrowserRouter([
  {
    path:'/',
    Component: Root,
    hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
    children:[
        {
            index:true,
            Component:Home,
            loader: () => fetch('../appsData.json')
        },
        {
            path:'/apps',
            Component:Apps,
            loader: () => fetch('../appsData.json')
        },
        {
            path:'installation',
            Component:Installation,
            loader: () => fetch('../appsData.json')
        },
        {
          path:'/app/:id',
          Component:AppDetails,
          loader: () => fetch('../appsData.json')

        },
        {
          path:'/loading',
          Component: LoadingSpiner
        },
        {
          path:'*',
          Component:Error
        },

        
        // {
        //   path:'/app/*',
        //   Component:Error
        // }
    ]
  }
])

export default router;