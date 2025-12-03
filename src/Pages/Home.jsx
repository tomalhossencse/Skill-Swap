import React from "react";
import PopulartSkills from "../Components/PopulartSkills/PopulartSkills";
import TopRated from "../Components/TopRated/TopRated";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import HeroSlider from "../Components/heroSlider/heroSlider";
import TopSkillsCat from "../Components/Top Skill Categories/TopSkillsCat";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopulartSkills />
      <TopRated />
      <HowItWorks />
      <TopSkillsCat />
    </div>
  );
};

export default Home;
