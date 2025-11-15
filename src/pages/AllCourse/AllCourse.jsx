import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../../components/CourseCard/CourseCard";
import { Helmet } from "react-helmet-async";

const AllCourse = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <Helmet>
        <title>All Course</title>
        <meta name="" content="" />
      </Helmet>
      <h2 className="text-center p-2">
        <span className="font-semibold">Total Course :</span> {courses?.length}
      </h2>
      <div className="max-w-7xl mx-auto my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses?.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
