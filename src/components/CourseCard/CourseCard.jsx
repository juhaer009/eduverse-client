import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const CourseCard = ({ course }) => {
  // console.log(course)
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleShowDetails = async (id) => {
    try {
      const { data } = await axiosSecure.get(`/course-details/${id}`);
      navigate(`/course-details/${id}`, { state: { course: data } });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={course.image} alt="" className="rounded-xl h-[200px] w-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{course.title}</h2>

        <div className="card-actions">
          <button
            onClick={() => handleShowDetails(course._id)}
            className="btn btn-primary"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
