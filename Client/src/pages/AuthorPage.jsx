import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import Card from "../components/Card";
const AuthorPage = () => {
  const { author_name } = useParams();
  const [loading, setloading] = useState(false);
  const [author, setAuthor] = useState(null);
  const [authorBlog, setAuthorBlog] = useState([]);
  const authorDetails = async (author_name) => {
    setloading(true);
    try {
      const res = await fetch(
        `https://blogit-9doz.onrender.com/api/users/author/${author_name}`
      );
      const data = await res.json();
      setAuthor(data);
      try {
        const res = await fetch(
          `https://blogit-9doz.onrender.com/api/blog/myblogs/${data._id}`
        );
        const Authdata = await res.json();
        setAuthorBlog(Authdata);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    authorDetails(author_name);
  }, []);

  return (
    <>
      {loading ? (
        <center>
          <span className="loading loading-spinner mt-48" />
        </center>
      ) : (
        <div className=" flex max-sm:flex-col border gap-20 ">
          <div className=" max-sm:gap-0 flex  flex-col gap-5 item-center">
            <img
              className="border w-[300px] h-[200px] bg-contain rounded-full m-5 max-sm:justify-center "
              src={author?.profile.url}
            />
            <h2 className="m-5 text-xl">{author?.name}</h2>
            <p className=" m-5">{author?.bio}</p>
            <div className=" m-5 flex gap-2 items-center">
              <CiMail />
              <p>{author?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 p-5 max-sm:grid-cols-1 overflow-auto">
            {authorBlog.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthorPage;
