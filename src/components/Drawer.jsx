import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Icons } from "./Icons";
import { Sidebar } from "./SideBar";

export default function MobileSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="block lg:hidden">
      {/* Open Button */}
      <Button
        className="capitalize flex items-center gap-3 bg-[#014DAF] text-white font-light p-2 cursor-pointer"
        onClick={toggleDrawer}
      >
        <Icons.LayersThree />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm"
          onClick={toggleDrawer}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#002F6C] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
          <Sidebar />
      </div>
    </div>
  );
}
