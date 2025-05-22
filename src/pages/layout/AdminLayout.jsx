import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/SideBar";
import DashNavbar from "../../components/DashNavbar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <aside className="hidden lg:block w-70 bg-[#002F6C] h-screen overflow-hidden">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-white">
        <DashNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
