import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[600px] mt-5 bg-white flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-6xl my-10">Welcome To My Invoice APP</h2>
        <Link to={'/orderInfo'} className="bg-blue-500 transition-all duration-300 rounded-lg text-white py-4 px-8 hover:text-blue-500 hover:bg-gray-300 ">Make A Invoice</Link>
      </div>
    </div>
  );
};

export default Home;
