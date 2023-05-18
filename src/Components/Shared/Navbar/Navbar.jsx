import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  return (
    <nav className="navbar bg-base-100 py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link>All toys</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost">
          <img
            className="h-12"
            src="https://i.ibb.co/jJ6BxCn/kiditos-logo-d56906d7-4313-4692-9e87-3f12e2d65e28.jpg"
            alt="Image not found"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>All toys</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end me-4">
        {!user ? <Link to="/login" className="btn sm:btn-sm md:btn-md">
          Login
        </Link> : 
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user ? user.photoURL : ""} alt="Image not found"/>
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link>Settings</Link></li>
          <li onClick={handleLogOut}><Link>Logout</Link></li>
        </ul>
      </div>
      }
      </div>
    </nav>
  );
};

export default Navbar;
