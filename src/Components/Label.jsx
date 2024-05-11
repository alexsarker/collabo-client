import Img1 from "/src/assets/codeacademy logo.png";
import Img2 from "/src/assets/coursera logo.png";
import Img3 from "/src/assets/Duolingo_logo logo.png";
import Img4 from "/src/assets/edTech.png";
import Img5 from "/src/assets/Quizlet_Logo logo.png";

const Label = () => {
  return (
    <div className="flex md:justify-evenly lg:justify-evenly border-b-2 pb-16">
      <img src={Img1} className="max-w-52 max-h-10" />
      <img src={Img2} className="max-w-52 max-h-10" />
      <img src={Img3} className="max-w-52 max-h-10" />
      <img src={Img4} className="max-w-52 max-h-10" />
      <img src={Img5} className="max-w-52 max-h-10" />
    </div>
  );
};

export default Label;
