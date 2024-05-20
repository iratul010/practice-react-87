import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
 
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage/>,
    children: [
      {
         path: "/",
          element: <Home /> 
        },
      { 
        path: "/about", 
        element: <About />
       },
      { 
        path: "/login", 
        element: <Login />
       },
      { 
        path: "/register", 
        element: <Registration />
       },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
         path: "/dashboard",
          element: <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes> 
        },
     
    ],
  },
]);
