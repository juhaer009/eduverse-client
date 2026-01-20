import { Link } from "react-router";

const CourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md border border-base-200 hover:border-primary transition-all duration-300 h-[420px] w-full rounded-xl">
      <figure className="px-4 pt-4 h-[200px]">
        <img 
          src={course.image} 
          alt={course.title}
          className="rounded-xl h-full w-full object-cover" 
        />
      </figure>
      <div className="card-body p-4 flex flex-col justify-between flex-1">
        <div className="text-center">
          <h2 className="card-title text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
            {course.title}
          </h2>
          <p className="text-sm text-base-content/70 mb-3">{course.category}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <div className="badge badge-primary badge-sm px-2 py-1">
            ${course.price}
          </div>
          <div className="badge badge-secondary badge-sm px-2 py-1">
            {course.duration}
          </div>
          <div className="badge badge-accent badge-sm px-2 py-1">
            {course.category}
          </div>
        </div>
        
        <div className="card-actions justify-center mt-auto">
          <Link
            to={`/course-details/${course._id}`}
            className="btn btn-primary btn-sm w-full"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
