import { NavLink, useLocation } from "react-router-dom";
import { Icons } from "./Icons";
import { useState } from "react";
const mainNavItems = [
  {
    name: "Branches",
    href: "/branches",
    icon: <Icons.Building />,
  },
  {
    name: "Roles",
    href: "/roles",
    icon: <Icons.UserSheild />,
  },
  {
    name: "Users",
    href: "/users",
    icon: <Icons.UserGroup />,
  },
  {
    name: "Card Schemes",
    href: "/card-schemes",
    icon: <Icons.Setting />,
  },
  {
    name: "Card Profile",
    href: "/card-profile",
    icon: <Icons.CreditCardPOS />,
  },
  {
    name: "Card Request",
    href: "/card-request",
    icon: <Icons.CreditCardAccept />,
  },
  {
    name: "Stock",
    href: "/stock",
    icon: <Icons.ChartBarLine />,
  },
  {
    name: "Cards",
    href: "/cards",
    icon: <Icons.CreditCard />,
  },
  {
    name: "Block/Unblock Card",
    href: "/block-unblock-card",
    icon: <Icons.CreditCardNotFound />,
  },
  {
    name: "Generate/Reissue Pin",
    href: "/generate-reissue-pin",
    icon: <Icons.PinCode />,
  },
  {
    name: "Authorization List",
    href: "/authorization-list",
    icon: <Icons.List />,
  },
  {
    name: "Authorization Queue",
    href: "/authorization-queue",
    icon: <Icons.LayersThree />,
  },
  {
    name: "Trail",
    href: "/trail",
    icon: <Icons.Map />,
  },
  {
    name: "Account",
    href: "/account",
    icon: <Icons.User />,
  },
];

export function Sidebar() {
  const location = useLocation();
  const isComplaintActive =
    location.pathname.startsWith("/complaint-log") ||
    location.pathname.startsWith("/complaint-resolve");
  const [showComplaintMenu, setShowComplaintMenu] = useState(isComplaintActive);
  return (
    <div className="h-full overflow-y-auto hide-scrollbar">
      {/* Logo */}
      <div className="px-2 py-6">
        <img src="/lapo.png" alt="logo" className="w-[3/5] h-18" />
      </div>

      <div className="p-2">
        {/* Dashboard Link */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive
                ? "bg-[#E4F0FF] text-[#002F6C]"
                : "text-[#DEDEDF] hover:text-[#014DAF] hover:bg-[#AEBAC9]"
            }`
          }
        >
          <div className="mr-3">
            <Icons.Home />
          </div>
          <span className="font-medium text-sm">Dashboard</span>
        </NavLink>

        {/* MAIN MENU */}
        <p className="text-xs text-[#7E8B9C] p-6">MAIN MENU</p>
        <div className="flex flex-col gap-2">
          <nav className="space-y-2">
            {/* Regular menu items */}
            {mainNavItems.slice(0,10).map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg ${
                    isActive
                      ? "bg-[#AEBAC9] text-[#002F6C]"
                      : "text-[#DEDEDF] hover:text-[#014DAF] hover:bg-[#AEBAC9]"
                  }`
                }
              >
                <div className="mr-3">{item.icon}</div>
                <span className="font-medium text-sm">{item.name}</span>
              </NavLink>
            ))}
            {/* Complaint dropdown parent */}
            <div
              onClick={() => setShowComplaintMenu((prev) => !prev)}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                isComplaintActive
                  ? "bg-[#E4F0FF] text-[#002F6C]"
                  : "text-[#DEDEDF] hover:text-[#014DAF] hover:bg-[#AEBAC9]"
              }`}
            >
              <div className="flex items-center">
                <div className="mr-3">{<Icons.File />}</div>
                <span className="font-medium text-sm">Complaint</span>
              </div>
              <span>{showComplaintMenu ? "▲" : "▼"}</span>
            </div>
            {/* Dropdown submenu */}
            {showComplaintMenu && (
              <div className="pl-4 flex flex-col space-y-2">
                <NavLink
                  to="/complaint-log"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-lg ${
                      isActive
                        ? "bg-[#E4F0FF] text-[#002F6C]"
                        : "text-[#DEDEDF] hover:text-[#014DAF] hover:bg-[#AEBAC9]"
                    }`
                  }
                >
                  <div className="mr-3">
                    <Icons.File />
                  </div>
                  <span className="text-sm">Complaint Log</span>
                </NavLink>

                <NavLink
                  to="/complaint-resolve"
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-lg ${
                      isActive
                        ? "bg-[#E4F0FF] text-[#002F6C]"
                        : "text-[#DEDEDF] hover:text-[#014DAF] hover:bg-[#AEBAC9]"
                    }`
                  }
                >
                  <div className="mr-3">
                    <Icons.FileVerified />
                  </div>
                  <span className="text-sm">Complaint Resolve</span>
                </NavLink>
              </div>
            )}
              {/* Remaining menu links items */}
            {mainNavItems.slice(10).map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg ${
                    isActive
                      ? "bg-[#AEBAC9] text-[#002F6C]"
                      : "text-[#DEDEDF] hover:text-[#014DAF] hover:bg-[#AEBAC9]"
                  }`
                }
              >
                <div className="mr-3">{item.icon}</div>
                <span className="font-medium text-sm">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="pt-6">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg ${
                isActive
                  ? "bg-[#E4F0FF] text-[#002F6C] font-bold"
                  : "text-[#DEDEDF] hover:text-[#014DAF] hover:bg-[#AEBAC9]"
              }`
            }
          >
            <div className="mr-3">
              <Icons.LogOut />
            </div>
            <span className="text-sm font-bold">Logout</span>
          </NavLink>
        </div>

        {/* Footer */}
        <div className="">
          <p className="text-xs text-[#7E8B9C] px-6 pt-9">POWERED BY</p>
          <img
            src="/cardInfra.png"
            alt="logo"
            className="w-[4/5] h-18 px-3 pb-4"
          />
        </div>
      </div>
    </div>
  );
}
