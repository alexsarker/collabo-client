import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const MySubmit = () => {
  return (
    <div className="bg-back">
      <Navbar></Navbar>
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className=" pb-5 text-5xl font-bold">My Submitted Assignments</h2>
        <p>
          View and track the assignments you have submitted. Monitor your
          progress and receive feedback from your peers.
        </p>
      </div>

      <div className="container mx-auto py-24">
        <div className="overflow-x-auto p-10 bg-theme-moon rounded-3xl">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base text-label">
                <th>Assignment</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              <tr className="text-base">
                <td>
                  <div className="flex items-center gap-3 py-2">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        New Assignments by Jennifer Roy
                      </div>
                      <div className="text-sm opacity-50">12/04/2024</div>
                    </div>
                  </div>
                </td>
                <td>100</td>
                <td>65</td>
                <td className="text-[#68D585]">Completed</td>
                <td className="text-center">
                  <Link
                    to="/"
                    className="btn bg-button border-none px-10 hover:bg-[#31308F]"
                  >
                    Feedback
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySubmit;
