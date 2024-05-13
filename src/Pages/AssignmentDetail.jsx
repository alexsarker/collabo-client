import { Link, useLoaderData } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";

const AssignmentDetail = () => {
  const data = useLoaderData();
  const { title, level, totalMarks, thumbnailURL, description } = data;

  return (
    <div>
      <NavLabel />
      <div className="max-w-[1200px] mx-auto pt-6">
        <img src={thumbnailURL} alt="cover" className="max-w-2xl mx-auto" />
        <div className="space-y-6 pt-24">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-xl italic text-[#ED0066]">Difficulty Level: {level}</p>
          <p className="text-xl font-semibold text-[#514B78]">Marks: {totalMarks}</p>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-sec">Description</h4>
            <hr />
            <p>{description}</p>
          </div>
        </div>
        <div className="pt-12 pb-36">
          <Link
            to="/"
            className="btn bg-button border-none px-10 hover:bg-[#31308F]"
          >
            Take Assignment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
