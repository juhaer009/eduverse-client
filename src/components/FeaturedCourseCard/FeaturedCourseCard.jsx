import React from "react";
import { motion } from "framer-motion";

const FeaturedCourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5, 
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)", 
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="card bg-base-100 w-96 shadow-xl cursor-pointer border border-base-200 hover:border-primary transition-colors duration-200"
    >
      <figure className="px-10 pt-10">
        <motion.img
          src={course.image}
          alt={course.title}
          className="rounded-xl h-[200px] w-80 object-cover"
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }}
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-semibold">{course.title}</h2>
        <p className="text-sm opacity-80">{course.category}</p>
        <p className="font-bold text-primary">${course.price}</p>
      </div>
    </motion.div>
  );
};

export default FeaturedCourseCard;
