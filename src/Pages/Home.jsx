import Navbar from "../Shared/Navbar";
import Hero from "../Components/Hero";
import Label from "../Components/Label";
import Features from "../Components/Features";
const Home = () => {
  return (
    <div>
      <div className="bg-main pb-44 px-2 md:px-20 lg:px-40">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="py-20 bg-back">
        <Label></Label>
        <Features></Features>
      </div>
    </div>
  );
};

export default Home;
