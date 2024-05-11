import Img1 from "/src/assets/icons/ic_layers_48px.png";
import Img2 from "/src/assets/icons/GitDiff.png";
import Img3 from "/src/assets/icons/chart-bar-33.png";
import Img4 from "/src/assets/icons/a-sync.png";
import Img5 from "/src/assets/icons/preferences-circle.png";
import Img6 from "/src/assets/icons/Headset.png";

const Features = () => {
  return (
    <div className="mt-36">
      <div className="max-w-[800px] text-center mx-auto">
        <h2 className=" pb-5 text-5xl font-bold">
          Unlock the Power of Collaboration with Collabo
        </h2>
        <p>
          Discover Essential Tools for Effortless Collaboration - From
          Assignment Creation to Grading, Collabo Helps You Achieve Success
          Together
        </p>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="flex flex-row gap-4">
            <span>
              <img src={Img1} />
            </span>
            <div className="max-w-72">
              <h4 className="text-xl font-bold pb-4">
                Collaborative Assignment Creation
              </h4>
              <p>
                Easily create assignments and collaborate with your friends.
                Work together to define tasks, set deadlines, and achieve
                academic goals as a team.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span>
              <img src={Img2} />
            </span>
            <div className="max-w-72">
              <h4 className="text-xl font-bold pb-4">
                Customizable Difficulty Levels
              </h4>
              <p>
                Tailor assignments to match your learning pace with customizable
                difficulty levels. Choose from easy, medium, or hard assignments
                to suit your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span>
              <img src={Img3} />
            </span>
            <div className="max-w-72">
              <h4 className="text-xl font-bold pb-4">
                Seamless Submission and Grading
              </h4>
              <p>
                Submit assignments effortlessly and receive feedback from peers.
                Our streamlined submission and grading process ensures smooth
                communication and efficient assessment.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span>
              <img src={Img4} />
            </span>
            <div className="max-w-72">
              <h4 className="text-xl font-bold pb-4">Personalized Dashboard</h4>
              <p>
                Stay organized with your personalized dashboard. Track your
                assignments, view pending tasks, and access your submission
                history all in one place.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span>
              <img src={Img5} />
            </span>
            <div className="max-w-72">
              <h4 className="text-xl font-bold pb-4">
                Secure and Reliable Platform
              </h4>
              <p>
                Rest assured with secure, reliable platform. Your data is
                protected, and our robust infrastructure ensures smooth
                performance, even during peak usage.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span>
              <img src={Img6} />
            </span>
            <div className="max-w-72">
              <h4 className="text-xl font-bold pb-4">Responsive Support</h4>
              <p>
                Need assistance? Our dedicated support team is here to help.
                Whether you have questions about assignments or encounter
                technical issues, we have got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
