import { useContext, useEffect } from "react";
import Card from "../components/Card";
import useFetch from "../Hooks/useFetch";
import { BlogsProvider } from "../context/BlogContext";

// eslint-disable-next-line react/prop-types
const Home = ({ isAuth }) => {
  const { Blogs } = useContext(BlogsProvider);
  const { fetchBlog, loading } = useFetch();
  useEffect(() => {
    fetchBlog();
  }, []);
  if (loading) {
    return (
      <center>
        <span className=" loading  loading-lg  mt-48 " />
      </center>
    );
  }
  return (
    <>
      {!isAuth && (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello👋</h1>
              <p className="py-6">
                Hey there Welcome to the Home page of BlogIT. Myself shahnoor
                the developer of this site , To acesss all the amazing content ,
                Please Register your account by clicking on the button below
                below
              </p>
              <div className="flex items-center justify-center gap-5">
                <a href="/sign-up">
                  <button className="btn btn-primary w-50">New Here?</button>
                </a>
                <a href="/login">
                  <button className="btn btn-primary w-50">
                    Already have account
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAuth && (
        <>
          <center>
            <h1 className=" max-sm:text-sm text-3xl mt-10 divider">
              Recent Blogs From Community
            </h1>
          </center>
          <div className=" grid grid-cols-4 gap-5 p-5 max-sm:grid-cols-1">
            {Blogs.map((blogs) => (
              <Card key={blogs.id} blog={blogs} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
