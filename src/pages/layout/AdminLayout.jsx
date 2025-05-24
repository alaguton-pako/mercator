// AdminLayout.jsx
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/SideBar";
import DashNavbar from "../../components/DashNavbar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <aside className="hidden lg:block w-70 bg-[#002F6C] h-full">
        <Sidebar />
      </aside>
      {/* Content Area */}
      <div className="flex-1 flex flex-col bg-white h-full overflow-hidden">
        <DashNavbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
