import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, setUser, userProfile, googleLogIn } =
    useContext(AuthContext);
  const location = useLocation();
  //   console.log(location)
  const navigate = useNavigate();

  const handleregister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password)
    const passwordLengthPattern = /^.{6,}$/;
    const passwordCasePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordLengthPattern.test(password)) {
      setError("Password Must Be 6 Character or Longer!!");
      return;
    } else if (!passwordCasePattern.test(password)) {
      setError(
        "Password Must Have atleast one Lowercase and UpperCase Letter!!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        userProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
            toast("Registered Successfully!!");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Register</title>
        <meta name="" content="" />
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleregister} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              Already Have an account?{" "}
              <Link to="/login" className="text-secondary">
                LogIn
              </Link>
            </p>
          </form>
          <span className="text-center">OR</span>
          {/* Google */}
          <button
            onClick={handleGoogleLogIn}
            className="btn bg-white text-black shadow-2xs border-[#e5e5e5] m-4"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
