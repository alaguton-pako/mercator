import { useParams, useLocation } from "react-router-dom";
import CustomCardLayout from "./CustomCardLayout";
import { Button } from "@material-tailwind/react";

const ComplaintDetail = () => {
  const { accountNumber } = useParams();
    const location = useLocation();
    const isResolvePage = location.pathname.includes("complaint-resolve");

  return (
    <CustomCardLayout>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-lg">{isResolvePage ? "Complaints Resolve" : "Complaints: Log"}</h1>
        <h5 className="text-sm text-[#475467]">
          View details of logged complaints and log new ones here.
        </h5>
      </div>
      <div className="h-[1px] w-full bg-[#98A2B3] my-4"></div>
      <div className="rounded-lg bg-white border border-[#E2E2E2] p-6 flex flex-col gap-6">
        {/* Title */}
        <h1 className="font-medium text-lg text-[#121212]">
          Complaint Details
        </h1>

        {/* Category and Branch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Category
            </label>
            <p className="w-4/5 text-sm text-[#475467] bg-[#F9FAFB] p-2 rounded border border-[#EAECF0]">
              Card Dispute
            </p>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Branch
            </label>
            <p className="w-4/5 text-sm text-[#475467] bg-[#F9FAFB] p-2 rounded border border-[#EAECF0]">
              Head Office
            </p>
          </div>
        </div>

        {/* Account Number and Customer Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Account Number
            </label>
            <p className="w-4/5 text-sm text-[#475467] bg-[#F9FAFB] p-2 rounded border border-[#EAECF0]">
              {accountNumber}
            </p>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Customer Name
            </label>
            <p className="w-4/5 text-sm text-[#475467] bg-[#F9FAFB] p-2 rounded border border-[#EAECF0]">
              Nazeer
            </p>
          </div>
        </div>

        {/* Complaint Details */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-[#344054]">
            Complaint Details
          </label>
          <div className="w-[90%] text-sm text-[#475467] bg-[#F9FAFB] p-3 rounded border border-[#EAECF0] min-h-[120px]">
            Complaint Details....
          </div>
        </div>

        {/* Submission Date and Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Submission Date
            </label>
            <p className="text-sm text-[#475467]">05/21/2023 10:27 AM</p>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Status
            </label>
            <div className="text-xs px-3 py-1 rounded-full bg-[#ABEFC6] text-[#067647] w-fit font-medium">
              Resolved
            </div>
          </div>
        </div>

        {/* Resolved By and Attachments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Resolved By
            </label>
            <p className="text-sm text-[#475467]">Manager</p>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#344054]">
              Attachment
            </label>
            <div className="flex items-center gap-2 text-sm text-[#475467]">
              <span className="text-xs text-[#101828]">None</span>
            </div>
          </div>
        </div>

        {/* Resolution Date */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-[#344054]">
            Resolution Date
          </label>
          <p className="text-sm text-[#475467]">05/23/2023 02:15 PM</p>
        </div>
        {/* the button here will be conditionally rendered based on who is viewing */}
        <div className="w-[200px]">
          <Button
            fullWidth
            className="bg-[#014DAF] text-[#ffff] capitalize rounded-sm font-medium text-sm px-6 cursor-pointer"
          >
            Resolve
          </Button>
        </div>
      </div>
    </CustomCardLayout>
  );
};

export default ComplaintDetail;
