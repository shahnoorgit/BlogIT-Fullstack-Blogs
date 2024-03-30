/* eslint-disable react/prop-types */
import { FaRegUser } from "react-icons/fa";
import { parseDateString } from "../utils/DateConvert";
// eslint-disable-next-line react/prop-types
const Card = ({ blog }) => {
  const MAX_CONTENT_LENGTH = 150;
  const truncatedContent =
    blog.content.length > MAX_CONTENT_LENGTH
      ? blog.content.substring(0, MAX_CONTENT_LENGTH) + "..."
      : blog.content;

  const formatedDate = parseDateString(blog.date);
  return (
    <div className=" cursor-pointer hover:border-4 card card-compact h-30 w-30 bg-base-100 shadow-xl border border-1 border-blue-800">
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
    </div>
  );
};

export default Card;
