import MobileSideBar from "./Drawer";
import { Icons } from "./Icons";
import { useLocation } from "react-router-dom";

const DashNavbar = () => {
  const location = useLocation();
  const isResolvePage = location.pathname.includes("complaint-resolve");

  return (
    <>
      <header className="flex items-center justify-between border-b border-b-[#DEE6E2] px-6 py-2">
        <div className="flex items-center gap-2">
          <MobileSideBar />
          <div className="flex items-center gap-2">
            {isResolvePage ? <Icons.FileVerified2 /> : <Icons.File2 />}
            <span className="text-sm text-[#001735] font-medium">
              {isResolvePage ? "Complaints: Resolve" : "Complaints: Log"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Icons.Actions />
          <Icons.UserDropDown />
        </div>
      </header>
    </>
  );
};

export default DashNavbar;
