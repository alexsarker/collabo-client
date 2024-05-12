import Navbar from "../Shared/Navbar";

const SubmitPage = () => {
  return (
    <div className="bg-back">
      <Navbar></Navbar>
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className=" pb-5 text-5xl font-bold">Submit Assignment</h2>
        <p>
          Share your work and contribute to collaborative learning by submitting
          your assignment.
        </p>
      </div>

      <div className="hero">
        <div className="hero-content text-center mt-6 mb-24">
          <div className="card py-12 px-16 bg-theme-moon shadow-sm rounded-xl">
            <form className="space-y-6 gap-6 w-72 md:w-[500px] lg:w-[800px]">
              {/* PDF/Doc Link Submission */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">
                    PDF/Doc Link Submission
                  </span>
                </label>
                <input
                  type="url"
                  name="link"
                  placeholder="https://"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
              {/* Quick Note */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-base font-bold">
                    Quick Note
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  name="quickNote"
                  placeholder="Quick Note"
                ></textarea>
              </label>

              {/* button */}
              <div className="form-control py-6">
                <button className="btn bg-button w-full text-white hover:bg-[#31308F]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
