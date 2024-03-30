import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthProvider } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import MyBlogs from "./pages/MyBlogs";
import CreateBlog from "./components/CreateBlog";

const App = () => {
  const { Auth, isAuth } = useContext(AuthProvider);
  return (
    <>
      <Navbar Auth={isAuth} user={Auth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route
          path="/sign-up"
          element={isAuth ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/my-blogs"
          element={isAuth ? <MyBlogs /> : <Navigate to="/" />}
        />
        <Route
          path="/create-blog"
          element={isAuth ? <CreateBlog /> : <Navigate to="/" />}
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
