import { FaUser } from "react-icons/fa";
import NavLabel from "../Shared/NavLabel";
import { useLoaderData } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
const GradingPage = () => {
  const data = useLoaderData();
  const {
    _id,
    title,
    level,
    totalMarks,
    thumbnailURL,
    description,
    pdfLink,
    quickNote,
    submitName,
    submitEmail,
    status,
    submitDate,
  } = data;

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

      <div className="max-w-7xl mx-auto mt-20 space-y-12">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-4 text-xl">
            <FaUser className="text-5xl text-sec p-4 rounded-md bg-[#C6C5FE]" />
            <div>
              <h2 className="text-xl font-bold">{submitName}</h2>
              <small className="italic">{submitEmail}</small>
            </div>
          </div>
          <div>
            <p className="font-bold">
              Submitted Date:{" "}
              <span className="text-xl text-[#473BF0]">{submitDate}</span>
            </p>
          </div>
        </div>
        <hr className="my-12" />
        <div>
          <h4 className="text-2xl font-bold pb-4">Submitted PDF/Doc</h4>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfLink} />;
          </Worker>

          <p className="text-center">Or</p>
          <div className="flex justify-center pt-4">
            <a
              className="btn"
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold pb-4">Note from Examinee</h4>
          <p>{quickNote}</p>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content text-center my-24">
          <div className="card p-12 bg-theme-moon shadow-sm rounded-xl">
            <h2 className="text-2xl font-bold">Grading Area</h2>
            <form className="space-y-6 gap-6 w-72 md:w-96 lg:w-96">
              {/* Marks */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">Marks</span>
                </label>
                <input
                  type="number"
                  name="marks"
                  placeholder="Marks"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
              {/* Feedback */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-base font-bold">
                    Feedback
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  name="feedback"
                  placeholder="Feedback"
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

export default GradingPage;
