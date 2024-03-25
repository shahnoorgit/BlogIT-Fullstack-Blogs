import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800">
      <h1 className=" text-gray-400 text-3xl mb-5">
        Register To Blog<span className=" text-blue-600">IT</span>
      </h1>
      <div className="  p-6 max-sm:w-[80vw] md:w-[40vw] h-auto bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600">
        <form>
          <div>
            <label className=" label">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              placeholder="Your Fullname"
              type="text"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <Link
            className=" text-sm mt-2 inline-block hover:underline hover:text-blue-600"
            to="/login"
          >
            Already have account ? Login{" "}
          </Link>
          <div>
            <button className=" btn btn-block mt-4 ">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
