import { useContext } from "react";
import NavLabel from "../Shared/NavLabel";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const CreatePage = () => {
  const { user } = useContext(AuthContext);

  const createHandle = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const totalMarks = form.totalMarks.value;
    const dueDate = form.date.value;
    const level = form.level.value;
    const thumbnailURL = form.thumbnailURL.value;
    const description = form.description.value;
    const email = user.email;
    const name = user.displayName;

    const createData = {
      title,
      totalMarks,
      dueDate,
      level,
      thumbnailURL,
      description,
      name,
      email,
    };
    console.log(createData);

    fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Created Successfully");
          form.reset();
        }
      })
      .catch(() => {
        toast.error("Not Created");
      });
  };
  return (
    <div className="bg-back">
      <NavLabel></NavLabel>
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className=" pb-5 text-5xl font-bold">Create Assignment</h2>
        <p>
          Empower your learning community by creating engaging assignments for
          collaboration and skill-building.
        </p>
      </div>

      <div className="hero">
        <div className="hero-content text-center mt-6 mb-24">
          <div className="card p-12 bg-theme-moon shadow-sm rounded-xl">
            <form
              onSubmit={createHandle}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:w-[500px] lg:w-[800px]"
            >
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
              {/* Total Marks */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">
                    Total Marks
                  </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="number"
                    name="totalMarks"
                    className="grow text-sm"
                    placeholder="Total Marks"
                  />
                </label>
              </div>
              {/* Due Date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">
                    Due Date
                  </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="date"
                    name="date"
                    className="grow text-sm"
                    placeholder="MM/DD/YYYY"
                  />
                </label>
              </div>
              {/* Difficulty Level */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-base font-bold">
                    Difficulty Level
                  </span>
                </div>
                <select name="level" className="select select-bordered">
                  <option disabled defaultValue="">
                    Select
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </label>
              {/* Thumbnail Image URL */}
              <div className="form-control md:col-span-2 lg:col-span-2">
                <label className="label">
                  <span className="label-text text-base font-bold">
                    Thumbnail URL
                  </span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="url"
                    name="thumbnailURL"
                    className="grow text-sm"
                    placeholder="https://"
                  />
                </label>
              </div>
              {/* Description */}
              <label className="form-control md:col-span-2 lg:col-span-2">
                <div className="label">
                  <span className="label-text text-base font-bold">
                    Description
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  name="description"
                  placeholder="Description"
                ></textarea>
              </label>

              {/* button */}
              <div className="form-control py-6 md:col-span-2 lg:col-span-2">
                <button className="btn bg-button w-full text-white hover:bg-[#31308F]">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default CreatePage;
