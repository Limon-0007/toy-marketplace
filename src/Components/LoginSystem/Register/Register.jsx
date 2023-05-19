import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [mailError, setMailError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = {
      name: name,
      email: email,
      password: password,
      photo: photo,
    };
    // console.log(user);
    
    if (password.length < 6) {
      setError("Your password should at least 6 characters long");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result);
        setError("");
        mailError("");
        form.reset();
      })
      .catch(() => {
        setMailError("Email already in use");
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col md:px-20 px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 font-semibold text-sm">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card mx-auto w-full max-w-sm font-semibold shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-3xl font-bold">Register!</h2>
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              <p className="text-red-600 font-semibold text-sm">{mailError}</p>
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-600 font-semibold text-sm">{error}</p>
            </div>
            {/* photo  URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <span className="text-sm text-center mt-4">
              Already have an account? Please &nbsp;
              <Link to="/login" className="link link-hover text-orange-500">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
