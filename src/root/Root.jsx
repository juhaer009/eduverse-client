import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading/Loading";

const Root = () => {
  const location = useLocation();
  const [routeLoading, setRouteLoading] = useState();
  useEffect(() => {
    setRouteLoading(true);
    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);
  if (routeLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
