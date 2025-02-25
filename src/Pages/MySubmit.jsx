import NavLabel from "../Shared/NavLabel";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";

const MySubmit = () => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["answers"],
    queryFn: async () => {
      const res = await fetch(
        "https://b9a11-collabo-server.vercel.app/answers",
        {
          credentials: "include",
        }
      );
      return res.json();
    },
  });

  return (
    <div className="bg-back">
      <NavLabel></NavLabel>
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
            {data?.map((submitData) => (
              <tbody key={submitData._id}>
                {/* row */}
                {user.email === submitData?.submitEmail && (
                  <tr className="text-base">
                    <td>
                      <div className="flex items-center gap-3 py-2">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={submitData.thumbnailURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{submitData.title}</div>
                          <div className="text-sm opacity-50">
                            {submitData.submitDate}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{submitData?.totalMarks}</td>
                    <td>{submitData?.marks}</td>
                    {submitData.marks ? (
                      <td className=" text-[#68D585]">Completed</td>
                    ) : (
                      <td className="text-[#F64B4B]">Pending</td>
                    )}

                    {submitData?.marks && (
                      <td className="text-center">
                        <button
                          className="btn bg-button border-none px-10 hover:bg-[#31308F]"
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        >
                          Feedback
                        </button>
                        <dialog id="my_modal_1" className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg">Feedback</h3>
                            <p className="py-4">{submitData.feedback}</p>
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn  bg-button border-none hover:bg-[#31308F]">
                                  Close
                                </button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </td>
                    )}
                  </tr>
                )}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySubmit;
