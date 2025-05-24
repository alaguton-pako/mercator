import CustomCardLayout from "../../components/CustomCardLayout";
import { Button, ButtonGroup } from "@material-tailwind/react";
import { Icons } from "../../components/Icons";
import TableComponent from "../../components/TableComponent";
import { useState } from "react";
import { allComplaints } from "../../helper";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ComplaintForm from "../../components/ComplaintForm";
import { useLocation } from "react-router-dom";

const ComplaintLog = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const location = useLocation();
  const isResolvePage = location.pathname.includes("complaint-resolve");

  const filteredComplaints = allComplaints.filter((complaint) =>
    activeTab === "pending"
      ? complaint.status === "Pending"
      : complaint.status === "Resolved"
  );

  return (
    <>
      <CustomCardLayout>
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-lg">
            {" "}
            {isResolvePage ? "Complaints: Resolve" : "Complaints: Log"}
          </h1>
          <h5 className="text-sm text-[#475467]">
            {isResolvePage
              ? "View details of treated complaints and resolve pending ones here."
              : "View details of logged complaints and log new ones here."}
          </h5>
        </div>
        <div className="h-[1px] w-full bg-[#98A2B3] my-4"></div>
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <div>
            <ButtonGroup className="border-[#f9fafb9a]">
              <Button
                className={`${
                  activeTab === "pending" ? "bg-[#F9FAFB]" : "bg-white"
                } text-[#1D2939] capitalize flex items-center gap-3 cursor-pointer font-medium text-sm`}
                onClick={() => setActiveTab("pending")}
              >
                {activeTab === "pending" && (
                  <span className="h-2 w-2 bg-[#014DAF] rounded-full"></span>
                )}
                Pending
              </Button>
              <Button
                className={`${
                  activeTab === "resolved" ? "bg-[#F9FAFB]" : "bg-white"
                } text-[#344054] capitalize flex items-center gap-3 cursor-pointer font-medium text-sm`}
                onClick={() => setActiveTab("resolved")}
              >
                {activeTab === "resolved" && (
                  <span className="h-2 w-2 bg-[#014DAF] rounded-full"></span>
                )}
                {isResolvePage ? "Treated" : "Resolved"}
              </Button>
            </ButtonGroup>
          </div>
          {!isResolvePage && (
            <div>
              <Button
                className="capitalize flex items-center gap-3 bg-[#014DAF] text-white font-light px-4 py-2 cursor-pointer"
                onClick={handleOpen}
              >
                <Icons.Icon />
                Log Complaint
              </Button>
            </div>
          )}
        </div>
        <TableComponent complaints={filteredComplaints} />
      </CustomCardLayout>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white h-[70%] w-full max-w-md md:h-[90%] overflow-y-auto rounded-lg shadow-lg p-4 hide-scrollbar">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                <div className="border border-[#EAECF0] rounded-lg p-2 bg-[#F9FAFB]">
                  <Icons.Icon2 />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-sm text-[#344054]">
                    Log Complaint
                  </p>
                  <p className="text-xs text-[#475467] font-light">
                    Select category and fill in details
                  </p>
                </div>
              </div>
              <span className="cursor-pointer" onClick={handleOpen}>
                <Icons.Close />
              </span>
            </div>
            <div className="h-[1px] w-full bg-[#EAECF0] my-1"></div>
            <ComplaintForm />
            <div className="h-[1px] w-full bg-[#EAECF0] my-1"></div>
            <Button
              fullWidth
              onClick={handleOpen}
              className="capitalize text-white bg-[#014DAF] py-4 text-md cursor-pointer rounded-sm"
            >
              Proceed
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ComplaintLog;
