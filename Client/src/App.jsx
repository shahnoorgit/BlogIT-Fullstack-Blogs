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
import BlogPage from "./components/BlogPage";
import Explore from "./pages/Explore";
import AuthorPage from "./pages/AuthorPage";
import EditPage from "./components/EditPage";
import Profile from "./pages/Profile";

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
          path="/read-blog/:blog_id"
          element={isAuth ? <BlogPage /> : <Navigate to="/" />}
        />
        <Route
          path="/create-blog"
          element={isAuth ? <CreateBlog /> : <Navigate to="/" />}
        />
        <Route
          path="/edit-blog/:id"
          element={isAuth ? <EditPage /> : <Navigate to="/" />}
        />
        <Route
          path="/explore"
          element={isAuth ? <Explore /> : <Navigate to="/" />}
        />
        <Route
          path="/author/:author_name"
          element={isAuth ? <AuthorPage /> : <Navigate to="/" />}
        />
        <Route
          path="/my-profile"
          element={isAuth ? <Profile /> : <Navigate to="/" />}
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
