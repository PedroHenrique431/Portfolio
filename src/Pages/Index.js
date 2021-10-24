import React, { useState } from "react";
import Footer from "../Components/Footer/Index";
import HeroSection from "../Components/HeroSection/Index";
import { homeObjectOne, homeObjectTwo, homeObjectThree } from "../Components/InfoSection/Data";
import InfoSection from "../Components/InfoSection/Index";
import Navbar from "../Components/Navbar/Index";
import Services from "../Components/Services/Index";
import Sidebar from "../Components/Sidebar/Index";

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
      <Services />
      <Footer />
    </>
  );
};

export default Home;
