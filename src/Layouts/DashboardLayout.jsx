import  { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';

const Drawer = () => {
  const { logOut, loading } = useAuth();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const openButtonRef = useRef(null);
  const mainContentRef = useRef(null);

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
  
    document.addEventListener('click', handleClickOutsideDrawer);
  
    return () => {
      document.removeEventListener('click', handleClickOutsideDrawer);
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
    <div className="relative h-screen flex overflow-hidden">
      {/* Open Drawer Button */}
      {!isOpen && (
        <button
          ref={openButtonRef}
          className="fixed top-4 left-4 z-10 p-2 bg-blue-600 text-white rounded-full"
          onClick={toggleDrawer}
        >
          Open Drawer
        </button>
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-full md:w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow p-4">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <nav>
              <ul>
                <li className="mb-2  p-2 rounded hover:bg-slate-600 "><a href="#home">All Recipe</a></li>
                <li className="mb-2 p-2 rounded hover:bg-slate-600"><a href="#profile">Edit</a></li>
                <li className="mb-2 p-2 rounded hover:bg-slate-600"><a href="#settings">Settings</a></li>
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <Link onClick={handleLogOut} className="btn w-full py-2 mb-2 bg-red-600 hover:bg-red-700 rounded text-white border-orange-500">
            Logout
            </Link>
            <Link to='/' className=" btn bg-green-600 w-full py-2   hover:bg-green-700 rounded text-white border-orange-500">Home</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={mainContentRef}
        className={`flex-grow bg-gray-100 p-8 ${
          isOpen ? 'ml-64' : 'ml-0'
        } md:ml-64`}
        onClick={handleMainContentClick}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Drawer;
