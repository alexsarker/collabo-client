import { useState } from "react";
import { Link } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";
import { useQuery } from "@tanstack/react-query";

const Assignments = () => {
  const [selectedLevel, setSelectedLevel] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/data");
      return res.json();
    },
  });

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };
  const filteredData = selectedLevel
    ? data.filter((assignment) => assignment.level === selectedLevel)
    : data;

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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-24">
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
                      to={`/delete/${assignment.id}`}
                      className="btn btn-outline border border-[#31308F] text-sec px-6 hover:bg-[#31308F]"
                    >
                      Delete
                    </Link>
                    <Link
                      to={`/update/${assignment.id}`}
                      className="btn bg-button border-none px-6 hover:bg-[#31308F]"
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Assignments;
