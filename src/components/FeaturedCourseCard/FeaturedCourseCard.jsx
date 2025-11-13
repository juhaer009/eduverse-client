import React from "react";

const FeaturedCourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={course.image} alt="" className="rounded-xl h-[200px] w-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{course.title}</h2>

        {/* <div className="card-actions">
          <Link
            to={`/course-details/${course._id}`}
            className="btn btn-primary"
          >
            Show Details
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
