import { Link } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Pending = () => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["answers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/answers");
      return res.json();
    },
  });

  console.log(data);

  return (
    <div className="bg-back">
      <NavLabel></NavLabel>
      <div className="max-w-[700px] text-center mx-auto pt-6">
        <h2 className=" pb-5 text-5xl font-bold">Pending Assignments</h2>
        <p>
          Review and grade pending assignments submitted by your study group
          members. Provide constructive feedback to support their learning
          journey.
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
                <th>Examine Name</th>
                <th>Submitted Date</th>
                <th></th>
              </tr>
            </thead>
            {data?.map((pendingData) => (
              <tbody key={pendingData._id}>
                {/* row */}
                {pendingData.status === "Pending" &&
                  pendingData.submitEmail !== user.email && (
                    <tr className="text-base">
                      <td>
                        <div className="flex items-center gap-3 py-2">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={pendingData.thumbnailURL}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{pendingData.title}</div>
                          </div>
                        </div>
                      </td>
                      <td>{pendingData.totalMarks}</td>
                      <td>{pendingData.submitName}</td>
                      <td>{pendingData.submitDate}</td>
                      <td className="text-center">
                        <Link
                          to={`/gradePage/${pendingData._id}`}
                          className="btn bg-button border-none px-10 hover:bg-[#31308F]"
                        >
                          Give Mark
                        </Link>
                      </td>
                    </tr>
                  )}
              </tbody>
            ))}
          </table>
        </div>
        {/* <button className="btn bg-theme-moon border-none px-10 hover:bg-[#31308F] hover:text-white mt-4">
          Continue Checking
        </button> */}
      </div>
    </div>
  );
};

export default Pending;
