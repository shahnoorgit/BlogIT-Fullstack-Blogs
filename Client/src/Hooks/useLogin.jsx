import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const useLogin = () => {
  const { setAuth } = useContext(AuthProvider);
  const [loading, setLoading] = useState(false);
  const loginFunc = async ({ username, password }) => {
    setLoading(true);
    try {
      console.log("func started");
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuth(data);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, loginFunc };
};

export default useLogin;
