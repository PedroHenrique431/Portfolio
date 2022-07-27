import React, { useState } from "react";

//Nav
import Navbar from "../Components/Nav/Navbar/Index";
import Sidebar from "../Components/Nav/Sidebar/Index";

//Heros
import HeroSection2 from "../Components/Heros/HeroSection 2/Index";
import HeroSection from "../Components/Heros/HeroSection/Index";
import HeroSection3 from "../Components/Heros/HeroSection 3/Index";

//Sections
import InfoSection from "../Components/Sections/InfoSection/Index";
import WorkSection from "../Components/Sections/WorkSection/Index";
import SkillsSection from "../Components/Sections/SkillsSection/Index";

//Datas
import { homeObjectOne, homeObjectTwo, homeObjectThree } from "../Components/Sections/InfoSection/Data";
import { workObjectFive, workObjectFour, workObjectOne, workObjectThree, workObjectTwo } from "../Components/Sections/WorkSection/Data";
import { skillObjectOne, skillObjectTwo } from "../Components/Sections/SkillsSection/Data";

import Services from "../Components/Services/Index";

//Footers
import Contact from "../Components/Footers/Contact/Index";
import ScrollToTop from "../Components/Footers/ScrollToTop/Index";
import Footer from "../Components/Footers/Footer/Index";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjectOne}/>
      <InfoSection {...homeObjectTwo}/>
      <InfoSection {...homeObjectThree}/>
      <HeroSection2 />
      <WorkSection {...workObjectOne}/>
      <WorkSection {...workObjectTwo}/>
      <WorkSection {...workObjectThree}/>
      <WorkSection {...workObjectFour}/>
      <WorkSection {...workObjectFive}/>
      <HeroSection3 />
      <SkillsSection {...skillObjectOne}/>
      <SkillsSection {...skillObjectTwo}/>
      <Services />
      <ScrollToTop />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
