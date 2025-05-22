import React from "react";

const ComplaintForm = () => {
  return (
    <div>
      <form className="space-y-4">
        {/* Category */}
        <div className="space-y-1">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-[#344054]"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select category from dropdown</option>
            <option value="billing">Billing</option>
            <option value="service">Service</option>
            <option value="technical">Technical</option>
            <option value="card">Card Dispute</option>
          </select>
        </div>

        {/* Account Number */}
        <div className="space-y-1">
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-[#344054]"
          >
            Account Number*
          </label>
          <input
            type="text"
            id="accountNumber"
            className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter account number"
          />
        </div>

        {/* Customer Name */}
        <div className="space-y-1">
          <label
            htmlFor="customerName"
            className="block text-sm font-medium text-[#344054]"
          >
            Customer Name*
          </label>
          <input
            type="text"
            id="customerName"
            className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter customer name"
          />
        </div>

        {/* Complaint Detail */}
        <div className="space-y-1">
          <label
            htmlFor="complaintDetail"
            className="block text-sm font-medium text-[#344054]"
          >
            Complaint Detail*
          </label>
          <textarea
            id="complaintDetail"
            rows={4}
            className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Describe your complaint in detail"
          />
        </div>

        {/* File Upload */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-[#344054]">
            Upload File (Optional)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#D0D5DD] border-dotted rounded-md">
            <div className="space-y-1 text-center">
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                >
                  <span className="font-semibold">Click to upload</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, JPG up to 10MB</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
