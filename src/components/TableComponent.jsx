import { Icons } from "./Icons";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FilterComponent from "./FilterComponent";

const TableComponent = ({ complaints = [] }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isResolvePage = location.pathname.includes("complaint-resolve");
  const handleRowClick = (accountNumber) => {
    const basePath = isResolvePage ? "complaint-resolve" : "complaint-log";
    navigate(`/${basePath}/${accountNumber}`);
  };
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="bg-[#EAECF0] w-full rounded-t-lg px-2 py-2 flex flex-wrap items-center gap-2 justify-between mt-6 border-b-1 border-b-[#D0D5DD]">
        <div className="flex items-center gap-2 w-[300px] bg-white px-3 py-2 rounded-md">
          <Icons.Search />
          <input
            type="text"
            placeholder="Search complaint"
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>
        <div className="flex gap-4">
          <Button className="bg-[#F9FAFB] text-[#1D2939] capitalize flex gap-2 cursor-pointer font-medium text-sm border-[#D0D5DD] py-2 rounded-sm">
            <Icons.Calender />
            Date
          </Button>
          <Button
            className="bg-[#F9FAFB] text-[#1D2939] capitalize flex gap-2 cursor-pointer font-medium text-sm border-[#D0D5DD] py-2 rounded-sm"
            onClick={handleOpen}
          >
            <Icons.Filter />
            Filter
          </Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto rounded-b-lg border border-[#EAECF0]">
        <div className="min-w-[768px]">
          {" "}
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-[#EAECF0]">
                <th className="text-left px-4 py-3 border-r border-[#EAECF0] capitalize font-medium bg-[#F9FAFB] text-sm text-[#475467]">
                  Account Number
                </th>
                <th className="text-center px-4 py-3 border-r border-[#EAECF0] capitalize font-medium bg-[#F9FAFB] text-sm text-[#475467]">
                  Customer Name
                </th>
                <th className="text-center px-4 py-3 border-r border-[#EAECF0] capitalize font-medium bg-[#F9FAFB] text-sm text-[#475467]">
                  Submission Date
                </th>
                {isResolvePage && (
                  <th className="text-center px-4 py-3 capitalize font-medium bg-[#F9FAFB] text-sm text-[#475467]">
                    Resolution Date
                  </th>
                )}
                <th className="text-center px-4 py-3 border-r border-[#EAECF0] capitalize font-medium bg-[#F9FAFB] text-sm text-[#475467]">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-[#475467]">
              {complaints.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#EAECF0] last:border-b-0 hover:bg-gray-50 hover:cursor-pointer"
                  onClick={() => handleRowClick(item.accountNumber)}
                >
                  <td className="text-left px-4 py-3 border-r border-[#EAECF0]">
                    {item.accountNumber}
                  </td>
                  <td className="text-center px-4 py-3 border-r border-[#EAECF0]">
                    {item.customerName}
                  </td>
                  <td className="text-center px-4 py-3 border-r border-[#EAECF0]">
                    {item.submissionDate}
                  </td>
                  {isResolvePage && (
                    <td className="text-center px-4 py-3">
                      11/14/2024 10:27:43F
                    </td>
                  )}
                  <td className="text-center px-4 py-3 border-r border-[#EAECF0]">
                    {item.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="w-full flex justify-between items-center py-2 px-6 border-t border-[#EAECF0]">
            <p className="text-[#344054] text-md">Page 1 of 20</p>
            <div className="flex items-center gap-2">
              <Button className="bg-white text-[#344054] capitalize rounded-sm font-medium text-sm border border-[#D0D5DD]">
                Previous
              </Button>
              <Button className="bg-white text-[#344054] capitalize rounded-sm font-medium text-sm border border-[#D0D5DD]">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm max-h-[95vh] overflow-y-auto rounded-lg shadow-lg p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="border border-[#EAECF0] rounded-lg p-2 bg-[#F9FAFB]">
                  <Icons.Filter />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-sm text-[#344054]">Filter</p>
                  <p className="text-xs text-[#475467] font-light">
                    Select conditions and apply
                  </p>
                </div>
              </div>
              <span className="cursor-pointer" onClick={handleOpen}>
                <Icons.Close />
              </span>
            </div>

            <div className="h-[1px] w-full bg-[#EAECF0] my-1"></div>

            {/* Body */}
            <div className="overflow-y-auto">
              <FilterComponent />
            </div>

            <div className="h-[1px] w-full bg-[#EAECF0] my-1"></div>

            {/* Footer */}
            <div className="mt-3">
              <Button
                fullWidth
                onClick={handleOpen}
                className="capitalize text-white bg-[#014DAF] py-1 text-md cursor-pointer rounded-sm"
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableComponent;
