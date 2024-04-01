import { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import useLogout from "../Hooks/useLogout";

// eslint-disable-next-line react/prop-types
const Navbar = ({ Auth, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { Logout } = useLogout();
  const handleLogout = () => {
    Logout();
  };
  return (
    <nav className=" bg-cyan-400 rounded-full max-sm:rounded-lg shadow-lg">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-evenly py-[10px] max-sm:justify-between  h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <a className=" min-w-[100px] max-w-[135px]" href="/">
                <span className=" text-white text-lg font-bold">
                  Blog<span className=" text-blue-900">IT</span>
                </span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/my-blogs"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Blogs
                </a>
                <a
                  href="/explore"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Explore
                </a>
                <a
                  href="/my-profile"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </a>
                <>
                  {Auth ? (
                    <a
                      onClick={() => handleLogout()}
                      className="flex gap-2 items-center text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout <IoMdLogIn className=" text-xl" />
                    </a>
                  ) : (
                    ""
                  )}
                </>
              </div>
            </div>
            {Auth && (
              <div>
                <img
                  className=" max-sm:hidden w-10 h-10 rounded-badge"
                  // eslint-disable-next-line react/prop-types
                  src={user?.profile.url}
                />
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/my-blogs"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              My Blogs
            </a>
            <a
              href="/explore"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Explore
            </a>
            <a
              href="/my-profile"
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Profile
            </a>
            {Auth ? (
              <a
                onClick={() => handleLogout()}
                className="flex gap-2 items-center text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout <IoMdLogIn className=" text-xl" />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
