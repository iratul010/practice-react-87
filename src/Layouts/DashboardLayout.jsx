import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import CgProfile from "../assets/profile.png";
const Drawer = () => {
  const { user, logOut, loading } = useAuth();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const openButtonRef = useRef(null);
  const mainContentRef = useRef(null);
  console.log(user);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutsideDrawer = (event) => {
      if (
        isOpen &&
        drawerRef.current &&
        openButtonRef.current &&
        !drawerRef.current.contains(event.target) &&
        !openButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutsideDrawer);

    return () => {
      document.removeEventListener("click", handleClickOutsideDrawer);
    };
  }, [isOpen]);

  const handleMainContentClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogOut = async () => {
    if (confirmLogout) {
      await logOut();
      setConfirmLogout(false); // Reset confirmation state after logout
    } else {
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
        setConfirmLogout(true); // Set confirmation state to true to proceed with logout
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative  flex overflow-hidden">
      {/* Open Drawer Button */}
      {!isOpen && (
        <button
          ref={openButtonRef}
          onClick={toggleDrawer}
          className="fixed top-4 left-4 z-10 p-2 bg-blue-600 text-white rounded lg:w-[220px] xxl:w-[220px] sm:w-[140px]  md:w-[220px]"
        >
          Open Drawer
        </button>
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-full md:w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow p-4">
            <nav>
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-4">Profile</h2>
                  <div className="avatar online left-10 w-[100px]">
                    {user ? (
                      <div className="w-24 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    ) : (
                      <img src={CgProfile} className="" />
                    )}
                  </div>

                  <div className="mb-4">
                    <p>Name: {user?.displayName}</p>
                    <p>Email: {user?.email}</p>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Menu</h2>
                </div>
              </div>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/dashboard/all-recipe"
                    className="btn p-2 rounded hover:bg-slate-600 w-full"
                    style={({ isActive,  isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color:isActive? 'white':'black',
                        backgroundColor: isActive?'rgb(234,88,12)':'',
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    All Recipe
                  </NavLink>
                </li>
                <li className="mb-2">
                <NavLink
                    to="/dashboard/recipe-maintain"
                    className="btn p-2 rounded hover:bg-slate-600 w-full"
                    style={({ isActive,  isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color:isActive? 'white':'black',
                        backgroundColor: isActive?'rgb(234,88,12)':'',
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                  Recipe Maintenance
                  </NavLink>
                </li>
                <li className="mb-2">
                <NavLink
                    to="/dashboard/add-recipe"
                    className="btn p-2 rounded hover:bg-slate-600 w-full"
                    style={({ isActive,  isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color:isActive? 'white':'black',
                        backgroundColor: isActive?'rgb(234,88,12)':'',
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                   Delete Recipe
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <button
              onClick={handleLogOut}
              className="btn w-full py-2 mb-2 bg-red-600 hover:bg-red-700 rounded text-white"
            >
              Logout
            </button>
            <Link
              to="/"
              className="btn bg-green-600 w-full py-2 hover:bg-green-700 rounded text-white"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={mainContentRef}
        className={`flex-grow bg-gray-100 p-8 ${
          isOpen ? "ml-64" : "ml-0"
        } md:ml-64`}
        onClick={handleMainContentClick}
      >
        <Outlet />
      </div>

      {/* Right Side Profile Section */}
      {/* <div className="fixed top-0 right-0 h-full bg-gray-800 text-white w-full md:w-64 p-4">
      
      </div> */}
    </div>
  );
};

export default Drawer;
