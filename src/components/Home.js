import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white flex flex-row justify-center items-start h-full absolute pt-32 w-full">
      <Link to={"/notes"}>
        <button className="bg-green-600 text-white rounded-xl px-4 py-2 mr-4">
          Notes
        </button>
      </Link>
      <Link to={"/notes-api"}>
        <button className="bg-green-600 text-white rounded-xl px-4 py-2">
          Notes API
        </button>
      </Link>
    </div>
  );
};
export default Home;
