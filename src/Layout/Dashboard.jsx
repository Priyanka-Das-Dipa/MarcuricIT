import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-3">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-4">
          <li>
            <NavLink to="/admin/expense_categories">
              Expense Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/expenses">Expenses</NavLink>
          </li>
          <li>
            <NavLink to="/admin/accounting_report">Accounting Report</NavLink>
          </li>
          <li>
            <NavLink to="/admin/doctor_report">Doctor Report</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
