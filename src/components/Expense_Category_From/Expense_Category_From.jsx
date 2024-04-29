import { PiCheckFatThin } from "react-icons/pi";

const Expense_Category_From = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="table border shadow-md rounded-xl">
        {/* head */}
        <thead>
          <tr className="bg-blue-500 text-white shadow-lg">
            <th className="font-medium text-lg"> Create Expense Category</th>
          </tr>
        </thead>
        <tbody className="items-center justify-center border ">
          <div className="p-10 ">
            <label className="form-control">
              <div className="label">
                <span className="label-text font-bold">Category</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
              />
            </label>

            <button className="text-white bg-blue-500 px-8 py-2 rounded-md mt-2 flex justify-center items-center gap-2">
              <PiCheckFatThin className="font-bold" />
              Save
            </button>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Expense_Category_From;
