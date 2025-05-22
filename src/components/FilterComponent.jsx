const FilterComponent = () => {
  return (
    <>
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
      </form>
    </>
  );
};

export default FilterComponent;
