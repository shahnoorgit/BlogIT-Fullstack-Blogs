import { useState } from "react";
import Card from "../components/Card";

const Explore = () => {
  const categories = [
    "music",
    "sports",
    "aI",
    "technology",
    "politic",
    "genral knowledge",
  ];
  const [categorizedBlogs, setCategorizedBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const categoryBlog = async (category) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blog/category/${category}`);
      const data = await res.json();
      setCategorizedBlogs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <center>
        <h1 className=" max-sm:text-sm text-2xl mt-5 ">
          Explore Blogs From Community
        </h1>
        <div className=" max-sm:gap-3 max-sm:flex-wrap max-sm:justify-start max-sm:items-center flex gap-5 items-center justify-center mt-5">
          {categories.map((i) => (
            <button
              onClick={() => categoryBlog(i)}
              className=" max-sm:text-sm btn bg-blue-500 min-w-50"
              key={i}
            >
              {i}
            </button>
          ))}
        </div>
      </center>
      {loading && <span className=" loading loading-spinner" />}
      {!loading && (
        <div className=" grid grid-cols-4 gap-5 p-5 max-sm:grid-cols-1">
          {categorizedBlogs?.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
