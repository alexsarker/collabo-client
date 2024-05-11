import Navbar from "../Shared/Navbar";
import Hero from "../Components/Hero";
import Label from "../Components/Label";
import Features from "../Components/Features";
import FAQ from "../Components/FAQ";
const Home = () => {
  return (
    <div>
      <div className="bg-main pb-44">
      <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="py-20 bg-back">
        <Label></Label>
        <Features></Features>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
