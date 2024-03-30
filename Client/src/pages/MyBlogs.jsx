import Card from "../components/Card";
import { MdAddBox } from "react-icons/md";
import useFetchMyBlogs from "../Hooks/useFetchMyBlogs";
import { useContext, useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";
import { BlogsProvider } from "../context/BlogContext";

const MyBlogs = () => {
  const { Auth } = useContext(AuthProvider);
  const { myBlog } = useContext(BlogsProvider);
  const { id } = Auth;
  const { myblogs, loading } = useFetchMyBlogs();
  useEffect(() => {
    myblogs(id);
  }, []);
  if (loading) {
    return (
      <center>
        <span className=" loading  loading-lg  mt-48 " />
      </center>
    );
  }
  return (
    <>
      <div className=" flex items-center  justify-between m-5 max-sm:mx-0 p-5">
        <h1 className=" text-5xl mt-4 max-sm:text-3xl divider">My Blogs</h1>
        <a href="/create-blog">
          <button className=" btn flex items-center cursor-pointer bg-blue-400">
            Add New Blog
            <MdAddBox />
          </button>
        </a>
      </div>

      <div className=" grid grid-cols-4 gap-5 p-5 max-sm:grid-cols-1">
        {myBlog.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default MyBlogs;
