import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/eduverse-logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // console.log("user trying to log out")
    logOut()
      .then(() => {
        toast("You Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allcourse">All Courses</NavLink>
      </li>
    </>
  );
  const privateLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allcourse">All Courses</NavLink>
      </li>
      <li>
        <Link to="/addcourse">Add a course</Link>
      </li>
      <li>
        <Link to="/mycourse">My course</Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm w-full backdrop-blur-sm bg-opacity-95">
      <div className="navbar max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 min-h-[60px] sm:min-h-[64px] lg:min-h-[72px]">
        <div className="navbar-start flex-1 lg:flex-none">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden p-1 sm:p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 sm:w-52 p-2 shadow-lg border border-base-300"
            >
              {user ? privateLinks : links}
            </ul>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2 lg:ml-0">
            <img 
              src={logo} 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl" 
              alt="Eduverse logo" 
            />
            <a className="btn btn-ghost text-sm sm:text-lg lg:text-xl text-secondary font-bold px-1 sm:px-2 lg:px-4 normal-case">
              <span className="hidden xs:inline">Eduverse</span>
              <span className="xs:hidden">Eduverse</span>
            </a>
          </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {user ? privateLinks : links}
          </ul>
        </div>
        
        <div className="navbar-end flex items-center gap-1 sm:gap-2">
          <div className="flex items-center">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle toggle-xs sm:toggle-sm lg:toggle-md"
            />
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full">
                  <img 
                    alt={user.displayName || "User"} 
                    src={user.photoURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"} 
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
                <li className="menu-title">
                  <span className="text-xs sm:text-sm font-medium text-base-content/70">
                    {user.displayName || user.email || "User"}
                  </span>
                </li>
                <li>
                  <Link to="/profile" className="text-xs sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button 
                    onClick={handleLogOut}
                    className="text-xs sm:text-sm text-error hover:bg-error/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-1 sm:gap-2">
              <Link 
                to="/login" 
                className="btn btn-primary btn-xs sm:btn-sm lg:btn-md px-2 sm:px-3 lg:px-4 text-xs sm:text-sm lg:text-base"
              >
                <span className="hidden sm:inline">Log In</span>
                <span className="sm:hidden">In</span>
              </Link>
              <Link 
                to="/register" 
                className="btn btn-primary btn-xs sm:btn-sm lg:btn-md px-2 sm:px-3 lg:px-4 text-xs sm:text-sm lg:text-base hidden xs:inline-flex"
              >
                <span className="hidden md:inline">Sign Up</span>
                <span className="md:hidden">Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
