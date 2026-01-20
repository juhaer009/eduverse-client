import { motion } from "framer-motion";

const FeaturedCourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -2, 
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="card bg-base-100 shadow-sm hover:shadow-md border border-base-200 hover:border-primary transition-all duration-300 h-[420px] w-full rounded-xl cursor-pointer"
    >
      <figure className="px-4 pt-4 h-[200px]">
        <motion.img
          src={course.image}
          alt={course.title}
          className="rounded-xl h-full w-full object-cover"
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        />
      </figure>

      <div className="card-body p-4 flex flex-col justify-between flex-1">
        <div className="text-center">
          <h2 className="card-title text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
            {course.title}
          </h2>
          <p className="text-sm text-base-content/70 mb-3">{course.category}</p>
        </div>
        
        <div className="flex justify-center mb-4">
          <div className="badge badge-primary badge-lg px-3 py-2 font-semibold">
            ${course.price}
          </div>
        </div>
        
        <div className="text-center mt-auto">
          <p className="text-xs text-base-content/60">Featured Course</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCourseCard;
