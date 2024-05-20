import { Outlet } from "react-router-dom"
import Navbar from "../components/Home/Navbar"
import Footer from "../components/Home/Footer"

function MainLayouts() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayouts
