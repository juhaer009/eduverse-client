import React from "react";
import { useLocation } from "react-router";

const CourseDetails = () => {
  const { state } = useLocation();

  const course = state?.course; // course data passed from navigate

  if (!course) {
    return (
      <div className="text-center mt-20 text-xl">Loading course details...</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-20 p-6 bg-base-200 rounded-xl shadow-lg">
      <img
        src={course.image}
        alt={course.title}
        className="rounded-xl w-full h-80 object-cover mb-6"
      />
      <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
      <p className="text-lg text-gray-700 mb-4">{course.description}</p>
      <div className="flex justify-between items-center">
        <span className="badge badge-primary text-lg">{course.category}</span>
        <span className="text-xl font-semibold">${course.price}</span>
      </div>
      <div className="mt-3 text-sm text-gray-500">
        Duration: {course.duration}
      </div>
    </div>
  );
};

export default CourseDetails;
