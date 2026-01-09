import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const MainLayout=()=> {

  return (
      <div className="flex flex-col">
         <Navbar/>
         <div className="flex-1">
          <Outlet/>
         </div>
         <Footer/>
         
      </div>
  )
}

export default MainLayout