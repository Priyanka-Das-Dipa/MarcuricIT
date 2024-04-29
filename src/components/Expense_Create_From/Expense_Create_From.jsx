import { PiCheckFatThin } from "react-icons/pi";

const Expense_Create_From = () => {
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table border shadow-md rounded-xl">
          {/* head */}
          <thead>
            <tr className="bg-blue-500 text-white shadow-lg">
              <th className="font-medium text-lg"> Create Expense</th>
            </tr>
          </thead>
          <tbody className="items-center justify-center border ">
            <div className="p-10 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-between">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold">Category</span>
                    </div>
                    <select className="select select-bordered">
                      <option disabled selected>
                        Pick one
                      </option>
                      <option>Star Wars</option>
                      <option>Harry Potter</option>
                      <option>Lord of the Rings</option>
                      <option>Planet of the Apes</option>
                      <option>Star Trek</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text font-bold">Date</span>
                    </div>
                    <input type="date" className="input input-bordered" />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold">Doctor</span>
                    </div>
                    <select className="select select-bordered">
                      <option disabled selected>
                        Pick one
                      </option>
                      <option>Star Wars</option>
                      <option>Harry Potter</option>
                      <option>Lord of the Rings</option>
                      <option>Planet of the Apes</option>
                      <option>Star Trek</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text font-bold">Amount</span>
                    </div>
                    <input
                      type="number"
                      placeholder=""
                      className="input input-bordered"
                    />
                  </label>
                </div>
              </div>
              <div>
                <h1 className="font-bold">Notes</h1>
                <textarea
                  id="OrderNotes"
                  className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                  rows="4"
                  placeholder="Enter any additional order notes..."
                ></textarea>
              </div>
              <button className="text-white bg-blue-500 px-8 py-2 rounded-md mt-2 flex justify-center items-center gap-2">
                <PiCheckFatThin className="font-bold" />
                Save
              </button>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expense_Create_From;
