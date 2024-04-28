import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Expense_Categories from "../pages/Expense_Categories/Expense_Categories";
import Expenses from "../pages/Expenses/Expenses";
import Account_Report from "../pages/Account_Report/Account_Report";
import Doctor_Report from "../pages/Doctor_Report/Doctor_Report";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/admin",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "expense_categories",
            element: <Expense_Categories></Expense_Categories>,
          },
          {
            path: "expenses",
            element: <Expenses></Expenses>,
          },
          {
            path: "accounting_report",
            element: <Account_Report></Account_Report>,
          },
          {
            path: "doctor_report",
            element: <Doctor_Report></Doctor_Report>,
          },
        ],
      },
    ],
  },
]);
