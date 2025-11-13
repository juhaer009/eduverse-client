import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="font-semibold text-secondary text-center text-4xl mt-6">Add a Course</h2>
      <div className=" flex justify-center items-center my-15">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
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
