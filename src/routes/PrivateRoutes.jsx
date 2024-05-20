import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import LoadingSpinner from "../components/LoadingSpinner";

// eslint-disable-next-line react/prop-types
function PrivateRoutes({children}) {
  const location = useLocation();
  const {user,loading} = useAuth();
  if(loading){
    return <LoadingSpinner/>
  }
  if(user){
    return children;
  }
  console.log(location)
  return <Navigate to={'/login'} state={{from: location}} replace />
}

export default PrivateRoutes
