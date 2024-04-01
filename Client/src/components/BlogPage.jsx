import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { useParams } from "react-router-dom";
import { parseDateString } from "../utils/DateConvert";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const BlogPage = () => {
  const { blog_id } = useParams();
  const nav = useNavigate();
  const [loading, setloading] = useState(false);
  const [blog, setBlog] = useState();
  const formateDate = parseDateString(blog?.date);
  const fetchBlog = async () => {
    setloading(true);
    try {
      const response = await fetch(
        `https://blogit-9doz.onrender.com/api/blog/fetch/${blog_id}`
      );
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  const goToAuthor = () => {
    nav(`/author/${blog.author_name}`);
  };
  return (
    <>
      <div className=" border h-full">
        {loading ? (
          <center className=" flex justify-center items-center h-screen w-screen">
            <span className="loading loading-spinner text-3xl" />
          </center>
        ) : (
          <div>
            <div className=" flex justify-center items-center p-10">
              <img
                className=" border-2 max-sm:w-[100vw] max-sm:p-0 w-[80vw] md:h-[500px]"
                src={blog?.thumbnail}
              />
            </div>
            <div className="flex gap-4 max-sm:gap-0">
              <div
                onClick={() => goToAuthor()}
                className=" text-white flex gap-2 justify-start items-center mb-10 text-xl max-sm:text-sm rounded p-1 ml-5 cursor-pointer bg-blue-600"
              >
                <FaUserAlt />
                {blog?.author_name}
              </div>
              <div className="text-white flex gap-2 justify-start items-center mb-10 text-xl max-sm:text-sm rounded p-1 ml-5 cursor-pointer bg-blue-600">
                <MdOutlineDateRange />
                {formateDate}
              </div>
            </div>
            <div className="flex flex-col item-center gap-10">
              <h1 className=" max-sm:text-xl text-3xl mt-10">{blog?.title}</h1>
              <p className="font-sans text-xl max-sm:text-sm p-5 tracking-wide leading-relaxed">
                {blog?.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;
