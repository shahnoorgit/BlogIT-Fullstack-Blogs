/* eslint-disable react/prop-types */
import { FaRegUser } from "react-icons/fa";
import { parseDateString } from "../utils/DateConvert";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
// eslint-disable-next-line react/prop-types
const Card = ({ blog }) => {
  const { Auth } = useContext(AuthProvider);
  const isEdit = blog.author === Auth.id;

  const nav = useNavigate();
  const MAX_CONTENT_LENGTH = 150;
  const truncatedContent =
    blog?.content.length > MAX_CONTENT_LENGTH
      ? blog.content.substring(0, MAX_CONTENT_LENGTH) + "..."
      : blog.content;

  const formatedDate = parseDateString(blog.date);
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://blogit-9doz.onrender.com/api/blog/delete/${blog._id}`
      );
      const data = await response.json();
      toast.success(data.message);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageOpen = () => {
    nav(`/read-blog/${blog._id}`);
  };
  return (
    <>
      <div className=" p-3 cursor-pointer hover:border-4 card card-compact h-30 w-30 bg-base-100 shadow-xl border border-1 border-blue-800">
        {isEdit && (
          <div className=" border flex justify-end absolute gap-4 bg-gray-700 z-10 ">
            <button onClick={() => console.log("hiii")}>
              <MdDelete
                onClick={() => handleDelete()}
                className=" text-3xl text-red-600"
              />
            </button>
            <button>
              <FaEdit
                onClick={() => nav(`/edit-blog/${blog._id}`)}
                className=" text-3xl text-green-500"
              />
            </button>
          </div>
        )}
        <div onClick={() => handlePageOpen()}>
          <figure>
            <img src={blog.thumbnail} alt="Shoes" />
          </figure>
          <div className="card-body flex w-full">
            <h2 className="card-title text-xl">{blog.title}</h2>
            <p className=" text-md">{truncatedContent}</p>

            <div className=" flex justify-evenly text-xs">
              <p className=" flex justify-start items-center gap-1">
                <FaRegUser />
                {blog.author_name}
              </p>
              <p className=" ml-20">{formatedDate}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            {blog.categories.map((tag) => (
              <div key={blog.id} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
