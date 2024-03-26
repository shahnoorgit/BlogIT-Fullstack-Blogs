import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const useLogout = () => {
  const { setAuth } = useContext(AuthProvider);
  const [loading, setLoading] = useState(false);
  const Logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/logout");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuth(null);
      toast.success(data.message);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, Logout };
};

export default useLogout;
