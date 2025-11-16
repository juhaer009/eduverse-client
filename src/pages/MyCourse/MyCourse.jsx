import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCourseCard from "../../components/MyCourseCard/MyCourseCard";
import { Helmet } from "react-helmet-async";

const MyCourse = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/mycourses?email=${user?.email}`)
      .then((data) => {
        setCourses(data.data);
      });
  }, [axiosSecure, user]);
  const handleDeleteFromUI = (id) => {
    const filtered = courses.filter((course) => course._id !== id);
    setCourses(filtered);
  };

  return (
    <div>
      <Helmet>
        <title>My Course</title>
        <meta name="" content="" />
      </Helmet>
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-center">
          Courses for :{" "}
          <span className="text-secondary">{user?.displayName}</span>
        </h2>
        <img src={user?.photoURL} alt="" />
      </div>
      <div className="max-w-7xl mx-auto my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <MyCourseCard
            key={course._id}
            course={course}
            onDelete={handleDeleteFromUI}
          ></MyCourseCard>
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
