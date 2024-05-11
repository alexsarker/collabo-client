const CreatePage = () => {
  return (
    <div className="bg-back">
      <div className="max-w-[700px] text-center mx-auto pt-24">
        <h2 className=" pb-5 text-5xl font-bold">Create Assignment</h2>
        <p>
          Empower your learning community by creating engaging assignments for
          collaboration and skill-building.
        </p>
      </div>

      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="hero pt-10 pb-24">
              <div className="py-12 px-16 bg-white shadow-sm rounded-xl">
                <div className="card w-full">
                  <form>
                    {/* Title */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Title
                        </span>
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
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
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
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
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
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Difficulty Level
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
                    {/* Thumbnail Image URL */}
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Thumbnail Image URL
                        </span>
                      </label>
                      <label className="input input-bordered flex items-center gap-2">
                        <input
                          type="url"
                          name="thumbImageURL"
                          className="grow text-sm"
                          placeholder="Thumbnail Image URL"
                        />
                      </label>
                    </div>
                    {/* Description */}
                    <div className="form-control pt-2">
                      <label className="label">
                        <span className="label-text font-medium text-base">
                          Description
                        </span>
                      </label>
                      <label className="input input-bordered flex items-center gap-2">
                        <input
                          type="url"
                          name="thumbImageURL"
                          className="grow text-sm"
                          placeholder="Thumbnail Image URL"
                        />
                      </label>
                    </div>

                    {/* button */}
                    <div className="form-control mt-6">
                      <button className="btn bg-button w-full text-white hover:bg-[#5c5bba]">
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
