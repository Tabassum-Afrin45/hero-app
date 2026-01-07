import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import OurApps from "../Pages/OurApps";
import Installation from "../Pages/Installation";

const router=createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
    {
    path: '/apps',
    element:<OurApps/>
    },
    {
    path: '/installation',
    element:<Installation/>
  },
])
export default router