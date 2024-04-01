import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateBlog = () => {
  const [updating, setUpdating] = useState(false);
  const Updateblog = async ({ _id, title, content, image }) => {
    setUpdating(true);
    try {
      const res = await fetch(
        "https://blogit-9doz.onrender.com/api/blog/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id,
            title,
            content,
            image,
          }),
        }
      );
      const data = await res.json();
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setUpdating(false);
    }
  };
  return { Updateblog, updating };
};

export default useUpdateBlog;
