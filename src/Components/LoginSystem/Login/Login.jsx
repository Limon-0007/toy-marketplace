import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  // const {user} = useContext(AuthContext)

  // console.log(user)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loggedUser = {
      email: email,
      password: password,
    };
    console.log(loggedUser);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col md:px-20 px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 font-semibold text-sm">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card mx-auto w-full max-w-sm font-semibold shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-3xl font-bold">Login!</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <span className="text-sm text-center mt-4">
              Don`t have an account? Please &nbsp;
              <Link to="/signup" className="link link-hover text-orange-500">
                Sign up
              </Link>
            </span>
            <div className="divider">or</div>
            <div className="mx-auto flex gap-4">
              <FaGoogle className="text-2xl hover:text-yellow-600 duration-200 cursor-pointer"></FaGoogle>
              <FaGithub className="text-2xl hover:text-blue-600 duration-200 cursor-pointer"></FaGithub>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
