import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/DashboardHome";
 
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../pages/Products";
import MangeAllRecipe from "../pages/Dashboard/MangeAllRecipe";
import EditRecipe from "../pages/Dashboard/EditRecipe";
import DeleteRecipe from "../pages/Dashboard/DeleteRecipe";

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
        path: "/products", 
        element: <Products />
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
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
         index: true,
          element: <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes> 
        },
        {
          path: 'all-recipe',
          element: <PrivateRoutes>
            <MangeAllRecipe/>
          </PrivateRoutes>
        }
        ,
        {
          path: 'edit-recipe',
          element: <PrivateRoutes>
            <EditRecipe/>
          </PrivateRoutes>
        }
        ,
        {
          path: 'delete-recipe',
          element: <PrivateRoutes>
            <DeleteRecipe/>
          </PrivateRoutes>
        }
     
    ],
  },
]);
