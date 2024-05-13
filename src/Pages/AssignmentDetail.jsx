import { Link } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";

const AssignmentDetail = () => {
  return (
    <div>
      <NavLabel></NavLabel>
      <div className="max-w-[1200px] mx-auto pt-6">
        <img
          src="/src/assets/PastedGraphic-1-636x358 1.png"
          alt="cover"
          className="mx-auto"
        />
        <div className="space-y-6 pt-24">
          <h2 className="text-4xl font-bold">Wired Charging Assessment</h2>
          <p className="text-xl italic text-[#ED0066]">
            Difficulty Level: Easy
          </p>
          <p className="text-xl font-semibold text-[#514B78]">Marks: 50</p>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-sec">Description</h4>
            <hr />
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.Leverage agile frameworks
              to provide a robust synopsis for high level overviews. terative
              approaches to corporate strategy foster collaborative thinking to
              further the overall value proposition.
              <br />
              <br />
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment. Capitalize on low hanging
              fruit to identify a ballpark value added activity to beta test.
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
              <br />
              <br />
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line.
            </p>
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
