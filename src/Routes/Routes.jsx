import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import OurApps from "../Pages/OurApps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=>fetch('./appsData.json')
      },
      {
        path: '/apps',
        element: <OurApps />
      },
      {
        path: '/installation',
        element: <Installation />
      },
    ]
  },
])
export default router