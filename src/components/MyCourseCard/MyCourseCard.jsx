import React from "react";
import { Link } from "react-router";

const MyCourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={course.courseImage} alt={course.courseTitle} className="rounded-xl h-[200px] w-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{course.courseTitle}</h2>

        <div className="card-actions">
          <Link
            to={`/mycourse-details/${course._id}`}
            className="btn btn-primary"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
