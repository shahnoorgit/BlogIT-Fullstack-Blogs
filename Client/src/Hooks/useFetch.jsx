import { useContext, useState } from "react";
import { BlogsProvider } from "../context/BlogContext";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const { setBlogs } = useContext(BlogsProvider);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blog/fetch");
      const data = await res.json();
      console.log(data);
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
