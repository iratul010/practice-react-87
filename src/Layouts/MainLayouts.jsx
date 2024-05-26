import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
 

function MainLayouts() {
  const {loading} = useAuth();
  if(loading){
    return <LoadingSpinner/>
  }
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayouts
