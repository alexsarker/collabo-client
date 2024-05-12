import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";

const Assignments = () => {
  return (
    <div className="bg-back">
      <Navbar></Navbar>
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className=" pb-5 text-5xl font-bold">Explore Assignments</h2>
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
          <select name="level" className="select select-bordered">
            <option disabled selected>
              Select
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
      </div>

      <div className="container mx-auto py-24">
        <div className="card p-4 w-80 bg-base-100 shadow-sm">
          <figure>
            <img
              src="/src/assets/img2.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bengali-5</h2>
            <p>
              Difficulty Level: <span>Medium</span>
            </p>
            <p className="text-[#1082E9]">
              Marks: <span>75%</span>
            </p>
            <div className="card-actions pt-4 items-center justify-between">
              <Link
                to="/"
                className="btn bg-button border-none px-10 hover:bg-[#31308F]"
              >
                View
              </Link>
              <div className="flex items-center gap-1">
                <Link>
                  <RxUpdate className="btn text-5xl bg-transparent text-[#1082E9] p-3 border border-[#1082E9] rounded-lg hover:bg-[#1082E9] hover:text-white hover:border-none" />
                </Link>
                <Link>
                  <AiOutlineDelete className="btn text-5xl bg-transparent text-[#F64B4B] p-3 border border-[#F64B4B] rounded-lg hover:bg-[#F64B4B] hover:text-white hover:border-none" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
