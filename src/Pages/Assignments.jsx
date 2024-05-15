import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Assignments = () => {
  const { user } = useContext(AuthContext);
  const [selectedLevel, setSelectedLevel] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/data", {
        credentials: "include",
      });
      return res.json();
    },
  });

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };
  const filteredData = selectedLevel
    ? data.filter((assignment) => assignment.level === selectedLevel)
    : data;

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/data/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          window.location.reload();
          toast.success("Deleted Successfully");
        }
      });
  };

  return (
    <div className="bg-back">
      <NavLabel />
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className="pb-5 text-5xl font-bold">Explore Assignments</h2>
        <p>
          Discover a variety of assignments created by your peers. Collaborate,
          learn, and achieve together!
        </p>
      </div>

      {/* filter button */}
      <div className="container mx-auto mt-12">
        <label className="form-control">
          <div className="label">
            <span className="label-text text-base font-bold">
              Difficulty Level
            </span>
          </div>
          <select
            name="level"
            className="select select-bordered"
            value={selectedLevel}
            onChange={handleLevelChange}
          >
            <option disabled value="">
              Select
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>
      </div>

      {isLoading ? (
        <div className="text-center text-2xl font-semibold py-32">
          Loading...
        </div>
      ) : isError ? (
        <div className="text-center text-2xl font-semibold py-32">
          Error fetching data
        </div>
      ) : filteredData.length < 1 ? (
        <div className="text-center text-2xl font-semibold py-32">
          No data available
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-24 justify-items-center">
          {filteredData.map((assignment) => (
            <div
              key={assignment._id}
              className="card w-72 bg-base-100 shadow-sm"
            >
              <figure>
                <img
                  src={assignment.thumbnailURL}
                  alt={assignment.title}
                  className="w-full max-h-48"
                />
              </figure>
              <div className="card-body">
                <Link to={`/data/${assignment?._id}`}>
                  <h2 className="card-title hover link-hover">
                    {assignment.title}
                  </h2>
                </Link>
                <p>
                  Difficulty Level: <span>{assignment.level}</span>
                </p>
                <p className="text-[#1082E9]">
                  Marks: <span>{assignment.totalMarks}</span>
                </p>
                <div className="card-actions pt-4 items-center justify-between">
                  <div className="flex items-center justify-between gap-6">
                    <Link
                      to={`/updatePage/${assignment._id}`}
                      className="btn bg-button border-none px-6 hover:bg-[#31308F]"
                    >
                      Update
                    </Link>
                    {assignment.email === user.email && (
                      <>
                        <button
                          onClick={() =>
                            document
                              .getElementById(`my_modal_1_${assignment._id}`)
                              .showModal()
                          }
                          className="btn btn-outline border border-[#31308F] text-sec px-6 hover:bg-[#31308F]"
                        >
                          Delete
                        </button>
                        {/* delete dialog */}
                        <dialog
                          id={`my_modal_1_${assignment._id}`}
                          className="modal"
                        >
                          <div className="modal-box text-center flex flex-col items-center">
                            <p className="py-4">
                              Are you sure want to delete this assignment?
                            </p>
                            <div className="modal-action">
                              <form method="dialog" className="space-x-4">
                                <button
                                  onClick={() => handleDelete(assignment._id)}
                                  className="btn bg-button border-none px-6 hover:bg-[#31308F]"
                                >
                                  Confirm
                                </button>
                                <button className="btn px-6">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Assignments;
