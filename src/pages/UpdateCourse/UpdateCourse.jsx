import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const UpdateCourse = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [course, setCourse] = useState([]);
  //   console.log("update course id", id);
  useEffect(() => {
    axiosSecure.get(`/course-details/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, [axiosSecure, id]);
  const handleUpdateCourse = (e) => {
    e.preventDefault();
    const courseTitle = e.target.title.value;
    const courseImage = e.target.courseImage.value;
    const price = parseFloat(e.target.price.value);
    const duration = e.target.duration.value;
    const category = e.target.category.value;
    const description = e.target.description.value;

    const updateCourse = {
      courseTitle,
      courseImage,
      price,
      duration,
      category,
      description,
    };
    axiosSecure.patch(`/courses/${id}`, updateCourse).then((res) => {
      //   console.log("after updating course", data.data);
      if (res.data.acknowledged) {
        toast("Course updated Successfuly!!");
        // e.target.reset();
      }
    });
  };
  return (
    <div>
      <h2 className="font-semibold text-secondary text-center text-4xl mt-6">
        Update Course
      </h2>
      <div className=" flex justify-center items-center my-15">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateCourse} className="card-body">
            <fieldset className="fieldset">
              {/* course title */}
              <label className="label">Course Title</label>
              <input
                type="text"
                name="title"
                className="input"
                placeholder="Course Title"
                defaultValue={course.courseTitle}
                required
              />
              {/* course image */}
              <label className="label">Course Image URL</label>
              <input
                type="text"
                name="courseImage"
                className="input"
                placeholder="Course Image URL"
                required
              />
              {/* price */}
              <label className="label">Course Price</label>
              <input
                type="text"
                name="price"
                className="input"
                placeholder="Course Price"
                defaultValue={course.price}
                required
              />
              {/* duration */}
              <label className="label">Course Duration</label>
              <input
                type="text"
                name="duration"
                className="input"
                placeholder="Course Duration"
                defaultValue={course.duration}
                required
              />
              {/* category */}
              <label className="label">Course Category</label>
              <input
                type="text"
                name="category"
                className="input"
                placeholder="Course Category"
                defaultValue={course.category}
                required
              />
              {/* description */}
              <label className="label">Course Description</label>
              <input
                type=""
                name="description"
                className="input"
                placeholder="Course Description"
                defaultValue={course.description}
                required
              />
              <button className="btn btn-primary mt-4">Update Course</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
