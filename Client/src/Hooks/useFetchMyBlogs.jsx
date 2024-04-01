import { useContext, useState } from "react";
import { BlogsProvider } from "../context/BlogContext";

const useFetchMyBlogs = () => {
  const [loading, setloading] = useState(false);
  const { setMyBlog } = useContext(BlogsProvider);
  const myblogs = async (_id) => {
    setloading(true);
    try {
      const res = await fetch(
        `https://blogit-9doz.onrender.com/api/blog/myblogs/${_id}`
      );
      const data = await res.json();
      setMyBlog(data);
      setloading(false);
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };
  return { loading, myblogs };
};

export default useFetchMyBlogs;
