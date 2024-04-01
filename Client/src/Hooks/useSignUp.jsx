import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAuth } = useContext(AuthProvider);
  const signup = async ({
    profile,
    name,
    username,
    bio,
    password,
    confirmPassword,
    email,
  }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile,
          name,
          username,
          bio,
          password,
          confirmPassword,
          email,
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;
