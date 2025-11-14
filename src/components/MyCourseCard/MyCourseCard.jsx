import React, { useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCourseCard = ({ course, onDelete }) => {
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteCourse = (id) => {
    setLoading(true);

    axiosSecure
      .delete(`/courses/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          onDelete(id); // update UI instantly
          setOpenModal(false);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* Card */}
      <div className="card bg-base-100 w-96 shadow-2xl">
        <figure className="px-10 pt-10">
          <img
            src={course.courseImage}
            alt={course.courseTitle}
            className="rounded-xl h-[200px] w-80"
          />
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

            <button
              onClick={() => setOpenModal(true)}
              className="btn bg-red-500 text-white"
            >
              Delete Course
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {openModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-500">Confirm Delete</h3>
            <p className="py-4">
              Are you sure you want to delete{" "}
              <strong>{course.courseTitle}</strong>?
              <br />
              This action cannot be undone.
            </p>

            <div className="modal-action">
              {/* Cancel Button */}
              <button
                className="btn"
                onClick={() => setOpenModal(false)}
                disabled={loading}
              >
                Cancel
              </button>

              {/* Confirm Delete */}
              <button
                className="btn bg-red-600 text-white"
                onClick={() => handleDeleteCourse(course._id)}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>

          {/* Modal backdrop */}
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setOpenModal(false)}>close</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default MyCourseCard;
