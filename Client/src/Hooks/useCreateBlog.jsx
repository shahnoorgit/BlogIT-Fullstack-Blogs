import { useState } from "react";
import toast from "react-hot-toast";

const useCreateBlog = () => {
  const [loading, setloading] = useState(false);
  const createBlog = async ({
    author_id,
    title,
    description,
    image,
    categories,
    name,
  }) => {
    setloading(true);
    try {
      const res = await fetch(
        "http://localhost:5000https://blogit-9doz.onrender.com/api/blog/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author_id: author_id,
            title: title,
            description: description,
            image: image,
            categories: categories,
            name: name,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };
  return { loading, createBlog };
};

export default useCreateBlog;
