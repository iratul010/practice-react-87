import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
        <div></div>
      </div>
      <div className="fixed  flex gap-10  bottom-10 left-10">
        <button className="border-2 border-orange-400 hover:bg-amber-600 rounded-lg  h-10 w-16 hover:text-white">
          logout
        </button>
        <button className="border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-white  h-10 w-16 ">
          Home
        </button>
      </div>
    </div>
  );
}

export default DashboardLayout;
