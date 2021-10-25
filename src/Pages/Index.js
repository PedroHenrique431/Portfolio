import React, { useState } from "react";
import Footer from "../Components/Footer/Index";
import HeroSection2 from "../Components/HeroSection copy/Index";
import HeroSection from "../Components/HeroSection/Index";
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour, homeObjectFive } from "../Components/InfoSection/Data";
import InfoSection from "../Components/InfoSection/Index";
import WorkSection from "../Components/WorkSection/Index";
import Navbar from "../Components/Navbar/Index";
import Services from "../Components/Services/Index";
import Sidebar from "../Components/Sidebar/Index";
import { workObjectOne, workObjectThree, workObjectTwo } from "../Components/WorkSection/Data";

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
      <Services />
      <Footer />
    </>
  );
};

export default Home;
