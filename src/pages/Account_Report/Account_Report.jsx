import { CiFilter, CiSettings } from "react-icons/ci";

const Account_Report = () => {
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table border shadow-md rounded-xl">
          {/* head */}
          <thead>
            <tr className="bg-blue-500 text-white shadow-lg">
              <th className="font-medium text-lg"> Accounting Report</th>
            </tr>
          </thead>
          <tbody className="items-center justify-center border ">
            <div className="p-10 ">
              <div className="bg-blue-500 text-white  px-5 py-2 font-medium text-center shadow-lg">
                <div className="flex justify-center items-center">
                  <CiFilter className="text-xl font-bold" />
                  Filter
                </div>
              </div>
              <div className="border-r border-b border-l shadow-lg rounded-b-lg">

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 justify-center items-center px-5 pb-5">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold">Date range: </span>
                    </div>
                    <input
                      type="Date"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold">Doctor : </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Doctor"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold">Test : </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Test"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold">Culture : </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Culture"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text font-bold">
                        Show Details :{" "}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="Option2"
                        className="flex cursor-pointer items-start gap-4"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option2"
                          />
                        </div>

                        <div>
                          <strong className="font-medium text-gray-900">
                            Show Group tests
                          </strong>
                        </div>
                      </label>

                      <label
                        htmlFor="Option3"
                        className="flex cursor-pointer items-start gap-4"
                      >
                        <div className="flex items-center">
                          &#8203;
                          <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option3"
                          />
                        </div>

                        <div>
                          <strong className="font-medium text-gray-900">
                            Show Expenses
                          </strong>
                        </div>
                      </label>
                      <label
                        htmlFor="Option3"
                        className="flex cursor-pointer items-start gap-4"
                      >
                        <div className="flex items-center">
                          &#8203;
                          <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option3"
                          />
                        </div>

                        <div>
                          <strong className="font-medium text-gray-900">
                            Show Profit
                          </strong>
                        </div>
                      </label>
                    </div>
                  </label>
                </div>
                <div className="">
                  <div className="bg-blue-500 w-1/3 px-5 py-2 rounded-md text-center">
                    <CiSettings className="text-white text-2xl text-center font-bold" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Account_Report;
