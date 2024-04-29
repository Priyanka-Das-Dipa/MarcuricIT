import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit, FaPlus } from "react-icons/fa";
const Expenses = () => {
  return (
    <div className=" p-8 border border-blue-600 bg-white border-t-8 rounded-t-3xl ">
      <div>
        <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-normal">Expenses Table</h1>
            </div>
            <div className="flex items-center gap-1 bg-blue-600 text-white p-2 rounded-md">
            <FaPlus /> Create
            </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between mb-3">
          <div>Show<input type="number" defaultValue="5" className="w-16 border ml-2 mr-2 border-black rounded-md"/>records</div>
          <div>
            Search: <input type="search" className="" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-blue-600 text-white">
              <th>#</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>6</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 7 */}
            <tr>
              <th>7</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 8 */}
            <tr>
              <th>8</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 9 */}
            <tr>
              <th>9</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
            {/* row 10 */}
            <tr>
              <th>10</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="">
                <button className="p-2 rounded-full bg-blue-500 ">
                  <FaEdit className="text-xl text-white" />
                </button>
                <button className="ml-4 p-2 rounded-full bg-red-500">
                  <AiOutlineDelete className="text-xl text-white" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
