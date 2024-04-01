import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useUpdateBlog from "../Hooks/useUpdateBlog";

const EditPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [Input, setInput] = useState({
    _id: id,
    title: "",
    content: "",
    image: "",
    author: "",
  });
  const fetchBlog = async () => {
    setloading(true);
    try {
      const response = await fetch(`/api/blog/fetch/${id}`);
      const data = await response.json();
      setInput({
        _id: data._id,
        title: data.title,
        content: data.content,
        image: data.thumbnail,
        author: data.author,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Updateblog(Input);
    nav("/my-blogs");
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  const { updating, Updateblog } = useUpdateBlog();

  return (
    <div className=" mb-5 border w-[80vw] max-sm:w-[95vw] mx-auto mt-5 p-10 max-sm:p-3">
      {loading ? (
        <center>
          <span className=" loading loading-spinner" />
        </center>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">
          <div className=" flex flex-col ">
            <label className=" text-xl label label-text">Thumbnail</label>
            <div className="flex justify-center items-center ">
              <div className="bg-blue-500 p-8 rounded-md shadow-md text-center">
                {Input.image ? (
                  <img
                    defaultValue={Input.image}
                    src={Input.image}
                    alt="Uploaded"
                    className="max-w-full max-h-80 rounded-md mb-4"
                  />
                ) : (
                  <div className="cursor-pointer">
                    <label htmlFor="file-input">
                      <i className="fas fa-cloud-upload-alt text-blue-500 text-6xl mb-4"></i>
                      <span className="block">Click to upload image</span>
                    </label>
                    <input
                      required
                      type="file"
                      id="file-input"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" flex flex-col ">
            <label className=" label text-xl label-text">Title</label>
            <input
              required
              defaultValue={Input.title}
              onChange={(e) => setInput({ ...Input, title: e.target.value })}
              type="text"
              className=" input input-bordered"
              placeholder="Enter Title"
            />
          </div>
          <div className=" flex flex-col ">
            <label className=" label text-xl label-text">Description</label>
            <textarea
              required
              defaultValue={Input.content}
              onChange={(e) => setInput({ ...Input, content: e.target.value })}
              type="text"
              className=" input input-bordered h-[400px]"
              placeholder="Enter Description"
            />
          </div>

          <button className=" btn bg-blue-500">
            {updating ? (
              <span className=" loading  loading-spinner" />
            ) : (
              "Update My Blog"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditPage;
