import { FaCalculator, FaRegCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-black text-slate-100 px-5">
        <div className="flex items-center p-2 space-x-4 pt-6">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-normal">MarcuricIT Admin</h2>
          </div>
        </div>
        <div className="divide text-white"></div>
        <ul className="mt-6 space-y-1">
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium flex gap-2 items-center">
                  <FaCalculator /> Accounting
                </span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li className="flex gap-2 items-center">
                  <FaRegCircle />
                  <NavLink to="/expense_categories">Expense Categories</NavLink>
                </li>
                <li className="flex gap-2 items-center">
                  <FaRegCircle />
                  <NavLink to="/expenses">Expenses</NavLink>
                </li>
                <li className="flex gap-2 items-center">
                  <FaRegCircle />
                  <NavLink to="/accounting_report">Accounting Report</NavLink>
                </li>
                <li className="flex gap-2 items-center">
                  <FaRegCircle />
                  <NavLink to="/doctor_report">Doctor Report</NavLink>
                </li>
               
              </ul>
            </details>
          </li>
          <li className="block rounded-lg text-white hover:bg-gray-100 hover:text-gray-700 px-4 py-2 text-sm font-medium ">
            Income Categories
          </li>
          <li className="block rounded-lg text-white hover:bg-gray-100 hover: px-4 py-2 text-sm font-medium ">
            Income
          </li>
          <li className="block rounded-lg text-white hover:bg-gray-100 hover: px-4 py-2 text-sm font-medium ">
            Contractor Reports
          </li>
          <li className="block rounded-lg text-white hover:bg-gray-100 hover: px-4 py-2 text-sm font-medium ">
            Summary
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
