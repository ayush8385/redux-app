import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to={"/"}>
        <button className="bg-gray-700 text-white m-10 rounded-xl px-4 py-2 mr-4">
          Home
        </button>
      </Link>
      <Outlet />
    </div>
  );
};
export default Dashboard;
