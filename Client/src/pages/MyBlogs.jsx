import Card from "../components/Card";
import { MdAddBox } from "react-icons/md";

const MyBlogs = () => {
  return (
    <>
      <div className=" flex items-center border justify-between m-10 max-sm:mx-0 p-5">
        <h1 className=" text-5xl mt-4 max-sm:text-2xl">My Blogs</h1>
        <a href="/create-blog">
          <button className=" btn flex items-center cursor-pointer bg-blue-400">
            Add New Blog
            <MdAddBox />
          </button>
        </a>
      </div>

      <div className=" grid grid-cols-4 gap-5 p-5 max-sm:grid-cols-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default MyBlogs;
