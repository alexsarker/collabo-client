import { useLoaderData } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { format } from "date-fns";

const SubmitPage = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { title, level, totalMarks, thumbnailURL, description } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const pdfLink = form.pdfLink.value;
    const quickNote = form.quickNote.value;
    const submitName = user.displayName;
    const submitEmail = user.email;
    const submitDate = format(new Date(), "MM-dd-yyyy");
    const submitData = {
      title,
      level,
      totalMarks,
      thumbnailURL,
      description,
      pdfLink,
      quickNote,
      submitName,
      submitEmail,
      submitDate,
    };

    fetch("https://b9a11-collabo-server.vercel.app/answers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((res) => res.json())
      .then(() => {
        if (data.insertedId) {
          form.reset();
          toast.success("Submitted Successfully");
        }
      })
      .catch(() => {
        toast.error("Not Submitted");
      });
  };

  return (
    <div className="bg-back">
      <NavLabel></NavLabel>
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className=" pb-5 text-5xl font-bold">Submit Assignment</h2>
        <p>
          Share your work and contribute to collaborative learning by submitting
          your assignment.
        </p>
      </div>

      <div className="hero">
        <div className="hero-content text-center mt-6 mb-24">
          <div className="card p-12 bg-theme-moon shadow-sm rounded-xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 gap-6 md:w-[500px] lg:w-[800px]"
            >
              <h2 className="text-2xl">{title}</h2>
              {/* PDF/Doc Link Submission */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">
                    PDF/Doc Link Submission
                  </span>
                </label>
                <input
                  type="url"
                  name="pdfLink"
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
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default SubmitPage;
