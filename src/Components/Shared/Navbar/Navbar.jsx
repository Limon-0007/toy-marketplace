import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const defaultPhoto = "https://www.svgrepo.com/show/18941/man-user.svg";

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-700" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/allToys"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-700" : ""
                }
              >
                All toys
              </NavLink>
            </li>
            {user && (
              <li tabIndex={0}>
                <NavLink
                  to="/myToys"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700" : ""
                  }
                >
                  My toys
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-700" : ""
                }
              >
                Blogs
              </NavLink>
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
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-700" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <Link
              to="/allToys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-700" : ""
              }
            >
              All toys
            </Link>
          </li>
          {user && (
            <li tabIndex={0}>
              <Link
                to="/myToys"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-700" : ""
                }
              >
                My toys
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-700" : ""
              }
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end me-4">
        {!user ? (
          <Link to="/login" className="btn sm:btn-sm md:btn-md">
            Login
          </Link>
        ) : (
          <div
            className="dropdown dropdown-end tooltip tooltip-bottom font-semibold pe-2 md:pe-4"
            data-tip={user.displayName}
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL === null ? defaultPhoto : user.photoURL}
                  alt="Image not found"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li onClick={handleLogOut}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
