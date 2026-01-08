import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Children } from "react"

const MainLayout=()=> {

  return (
      <div>
         <Navbar/>
         <Outlet/>
         <Footer/>
         
      </div>
  )
}

export default MainLayout