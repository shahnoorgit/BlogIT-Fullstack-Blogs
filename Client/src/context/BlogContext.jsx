import { createContext, useState } from "react";

export const BlogsProvider = createContext();
// eslint-disable-next-line react/prop-types
const BlogContext = ({ children }) => {
  const [Blogs, setBlogs] = useState([]);
  const [myBlog, setMyBlog] = useState([]);
  return (
    <BlogsProvider.Provider value={{ Blogs, setBlogs, myBlog, setMyBlog }}>
      {children}
    </BlogsProvider.Provider>
  );
};

export default BlogContext;
