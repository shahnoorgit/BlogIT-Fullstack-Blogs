import { useContext, useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import useCreateBlog from "../Hooks/useCreateBlog";
import { useNavigate } from "react-router-dom";
const categories = [
  "music",
  "sports",
  "aI",
  "technology",
  "all",
  "politics",
  "general Knowledge",
];
const CreateBlog = () => {
  const nav = useNavigate();
  const { Auth } = useContext(AuthProvider);
  const { loading, createBlog } = useCreateBlog();
  const [Input, setInput] = useState({
    author_id: Auth.id,
    name: Auth.name,
    title: "",
    description: "",
    image: null,
    categories: [],
  });
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInput({ ...Input, categories: [...Input.categories, value] });
      console.log(Input.description);
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        categories: prevInput.categories.filter(
          (category) => category !== value
        ),
      }));
    }
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setInput({ ...Input, image: reader.result });
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  console.log(Input.categories);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog(Input);
    nav("/my-blogs");
  };
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
                      onChange={handleImageChange}
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
              defaultValue={Input.description}
              onChange={(e) =>
                setInput({ ...Input, description: e.target.value })
              }
              type="text"
              className=" input input-bordered h-[400px]"
              placeholder="Enter Description"
            />
          </div>
          <div>
            <label className=" label text-xl label-text">Select Category</label>
            <div className="flex border border-blue-500 rounded-sm h-full bg-gray-900 p-10">
              <div className=" rounded-md shadow-md text-center">
                <div className="flex max-sm:flex-col gap-5 mb-4">
                  <p className="font-medium mb-2">Select Category:</p>
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={category}
                        value={category}
                        className="mr-2 cursor-pointer"
                        onChange={handleCategoryChange}
                      />
                      <label htmlFor={category} className="cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className=" btn bg-blue-500">Create My Blog</button>
        </form>
      )}
    </div>
  );
};

export default CreateBlog;
