import { useLoaderData } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";
import toast from "react-hot-toast";

const UpdatePage = () => {
  const data = useLoaderData();
  const { _id, title, level, dueDate, totalMarks, thumbnailURL, description } =
    data;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const totalMarks = form.totalMarks.value;
    const dueDate = form.date.value;
    const level = form.level.value;
    const thumbnailURL = form.thumbnailURL.value;
    const description = form.description.value;

    const updateData = {
      title,
      level,
      dueDate,
      totalMarks,
      thumbnailURL,
      description,
    };

    console.log(updateData);

    fetch(`http://localhost:5000/data/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          toast.success("Updated Successfully");
        }
      })
      .catch(() => {
        toast.error("Not Updated");
      });
  };
  return (
    <div className="bg-back">
      <NavLabel></NavLabel>
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className=" pb-5 text-5xl font-bold">Update Assignment</h2>
        <p>
          Modify assignment details to keep your tasks relevant and engaging for
          your study group.
        </p>
      </div>

      <div className="hero">
        <div className="hero-content text-center mt-6 mb-24">
          <div className="card p-12 bg-theme-moon shadow-sm rounded-xl">
            <form
              onSubmit={handleUpdate}
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
                  defaultValue={title}
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
                    defaultValue={totalMarks}
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
                    defaultValue={dueDate}
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
                <select
                  name="level"
                  className="select select-bordered"
                  defaultValue={level}
                >
                  <option disabled defaultValue="">
                    Select
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </label>
              {/* Thumbnail Image URL */}
              <div className="form-control lg:col-span-2">
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
                    defaultValue={thumbnailURL}
                    placeholder="https://"
                  />
                </label>
              </div>
              {/* Description */}
              <label className="form-control lg:col-span-2">
                <div className="label">
                  <span className="label-text text-base font-bold">
                    Description
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  name="description"
                  defaultValue={description}
                  placeholder="Description"
                ></textarea>
              </label>

              {/* button */}
              <div className="form-control py-6 lg:col-span-2">
                <button className="btn bg-button w-full text-white hover:bg-[#31308F]">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
