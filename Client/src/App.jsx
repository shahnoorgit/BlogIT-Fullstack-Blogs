import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthProvider } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  const { Auth, isAuth } = useContext(AuthProvider);
  return (
    <>
      <Navbar Auth={isAuth} user={Auth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-up"
          element={isAuth ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
