import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../Hooks/useSignUp";

const Signup = () => {
  const { signup } = useSignUp();
  const [Input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profile: "",
    bio: "hey there i'm Using BlogIT",
  });
  const base64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setInput({ ...Input, profile: reader.result });
    };
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(Input);
    await signup(Input);
  };

  return (
    <div className="flex flex-col items-center justify-center  mt-5 mb-5">
      <h1 className=" text-gray-400 text-3xl mb-5">
        Register To Blog<span className=" text-blue-600">IT</span>
      </h1>
      <div className="  p-6 max-sm:w-[80vw] md:w-[40vw] h-auto bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600">
        <form onSubmit={(e) => HandleSubmit(e)}>
          <div>
            <label className=" label">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              defaultValue={Input.name}
              onChange={(e) => setInput({ ...Input, name: e.target.value })}
              placeholder="Your Fullname"
              type="text"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">Add Your Profile</span>
            </label>
            <input
              onChange={(e) => base64(e)}
              type="file"
              className="file-input w-full max-w-xs"
              required
              //defaultValue={""}
            />
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">username</span>
            </label>
            <input
              placeholder="Enter your username"
              type="text"
              required
              className=" input input-bordered w-full h-10"
              defaultValue={Input.username}
              onChange={(e) => setInput({ ...Input, username: e.target.value })}
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              defaultValue={Input.email}
              onChange={(e) => setInput({ ...Input, email: e.target.value })}
              placeholder="Enter your email address"
              type="mail"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              defaultValue={Input.password}
              onChange={(e) => setInput({ ...Input, password: e.target.value })}
              placeholder="Enter your password"
              type="password"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              defaultValue={Input.confirmPassword}
              onChange={(e) =>
                setInput({ ...Input, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              type="password"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">About You</span>
            </label>
            <textarea
              placeholder=" Tell Us about yourself"
              type="text"
              required
              defaultValue={Input.bio}
              onChange={(e) => setInput({ ...Input, bio: e.target.value })}
              className=" input input-bordered w-full h-[160px]"
              rows={55}
            ></textarea>
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
