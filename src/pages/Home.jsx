import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import FeaturedCourseCard from "../components/FeaturedCourseCard/FeaturedCourseCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [featuredCourses, setFeaturedCourses] = useState();
  useEffect(() => {
    axiosSecure.get("/featured-courses").then((data) => {
      setFeaturedCourses(data.data);
    });
  }, [axiosSecure, setFeaturedCourses]);
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="" content="" />
      </Helmet>
      <Banner></Banner>
      <h2 className="text-center font-semibold mt-6 text-3xl">
        <span className="text-secondary">Popular</span> Courses
      </h2>
      <div className="max-w-7xl mx-auto my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredCourses?.map((course) => (
          <FeaturedCourseCard
            key={course._id}
            course={course}
          ></FeaturedCourseCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
