import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleAddCourse = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const title = e.target.title.value;
    const image = e.target.courseImage.value;
    const price = parseFloat(e.target.price.value);
    const duration = e.target.duration.value;
    const category = e.target.category.value;
    const description = e.target.description.value;

    const newCourse = {
      name,
      email,
      photo,
      title,
      image,
      price,
      duration,
      category,
      description,
    };
    // console.log(newCourse);
    axiosSecure.post("/courses", newCourse).then((data) => {
      // console.log("after adding course", data.data);
      if (data.data.insertedId) {
        toast("Course added Successfuly!!");
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Add Course</title>
        <meta
          name=""
          content=""
        />
      </Helmet>
      <h2 className="font-semibold text-secondary text-center text-4xl mt-6">
        Add a Course
      </h2>
      <div className=" flex justify-center items-center my-15">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleAddCourse} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                defaultValue={user.displayName}
                readOnly
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                defaultValue={user.email}
                readOnly
              />
              {/* photoURL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                defaultValue={user.photoURL}
                readOnly
              />
              {/* course title */}
              <label className="label">Course Title</label>
              <input
                type="text"
                name="title"
                className="input"
                placeholder="Course Title"
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
                required
              />
              {/* duration */}
              <label className="label">Course Duration</label>
              <input
                type="text"
                name="duration"
                className="input"
                placeholder="Course Duration"
                required
              />
              {/* category */}
              <label className="label">Course Category</label>
              <input
                type="text"
                name="category"
                className="input"
                placeholder="Course Category"
                required
              />
              {/* description */}
              <label className="label">Course Description</label>
              <input
                type=""
                name="description"
                className="input"
                placeholder="Course Description"
                required
              />
              <button className="btn btn-primary mt-4">Add Course</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
