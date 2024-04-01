import { useContext, useState } from "react";
import { BlogsProvider } from "../context/BlogContext";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const { setBlogs } = useContext(BlogsProvider);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://blogit-9doz.onrender.com/api/blog/fetch"
      );
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchBlog };
};

export default useFetch;
