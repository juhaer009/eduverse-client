import React from "react";
import errorMsg from "../../assets/error-404.png";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <Helmet>
        <title>Error-404</title>
        <meta name="" content="" />
      </Helmet>
      <img src={errorMsg} alt="error message" />
      <p className="text-2xl text-red-400 font-bold">Page Not Found!!</p>
      <Link className="btn btn-primary p-4 rounded-xl" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
