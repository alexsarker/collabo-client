import { BsArrowRight } from "react-icons/bs";
import Img from "/src/assets/Img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 my-6">
        <img src={Img} />
        <div className="text-white mt-8">
          <h1 className="text-6xl max-w-[500px] font-bold">
            Welcome to Collabo
          </h1>
          <p className="py-6 text-p max-w-[400px]">
            Join Collabo to create and complete assignments with friends.
            Collaborate on projects, share knowledge, and achieve academic
            success together.
          </p>
          <button className="flex items-center text-xl font-semibold text-[#68D585] gap-4">
            Get Started <BsArrowRight className="text-xl"></BsArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
