import { useState } from "react";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
  const { loginFunc, loading } = useLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    await loginFunc(Input);
  };
  return (
    <div>
      <center>
        <h1 className="text-3xl mt-10">Hey Welcome Back 🧑‍💻</h1>
      </center>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className=" flex items-center justify-center">
          <div className="w-[50vw] relative h-[50vh] border border-blue-500 max-sm:w-[80vw] mt-20 flex flex-col justify-start gap-4">
            <div className="flex flex-col gap-1 ml-5">
              <label className=" label">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                defaultValue={Input.username}
                onChange={(e) =>
                  setInput({ ...Input, username: e.target.value })
                }
                placeholder="Enter your username"
                type="text"
                required
                className="input input-bordered w-[90%] h-10 "
              />
            </div>
            <div className="flex flex-col gap-1 ml-5">
              <label className=" label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                defaultValue={Input.password}
                onChange={(e) =>
                  setInput({ ...Input, password: e.target.value })
                }
                placeholder="Enter your Password"
                type="text"
                required
                className="input input-bordered w-[90%] h-10 "
              />
            </div>
            <a
              className=" hover:text-blue-500 ml-5 cursor-pointer"
              href="/sign-up"
            >
              New User?, Register First
            </a>
            <button className="btn btn-primary mt-5 w-[50%] mx-auto ">
              {loading ? (
                <span className=" loading loading-spinner" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
