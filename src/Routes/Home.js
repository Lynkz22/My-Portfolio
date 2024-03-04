import React from "react";
// import Navbar from "../Components/Navbar";
// import Hero from "../Components/Hero";
// import Introduction from "../Components/Introduction";
// import MvpmHome from "../Components/MvpmHome";
// import ServicesHome from "../Components/ServicesHome";
// import Phrase from "../Components/Phrase";
// import ProjectsHome from "../Components/ProjectsHome";
// import GetInTouch from "../Components/GetInTouch";
// import Footer from "../Components/Footer";
import PortfolioPageName from "../Components/PortfolioPageName";
import PortfolioAbout from "../Components/PortfolioAbout";
import PortfolioSpacing from "../Components/PortfolioSpacing";
import PortfolioTechSkills from "../Components/PortfolioTechSkills";
import PortfolioProjects from "../Components/PortfolioProjects";
import PortfolioSocials from "../Components/PortfolioSocials";
import PortfolioContact from "../Components/PortfolioContact";
import PortfolioProjectsPic from "../Components/PortfolioProjectsPic";

const Home = () => {
  return (
    <>
      <PortfolioSocials />
      <PortfolioPageName />
      <PortfolioSpacing />
      <PortfolioAbout />
      <PortfolioSpacing />
      <PortfolioTechSkills />
      <PortfolioSpacing />
      <PortfolioProjects />
      <PortfolioSpacing />
      <PortfolioContact />
      <PortfolioSpacing />
      <PortfolioProjectsPic />
      <PortfolioSpacing />

      {/* <Hero />
      <Introduction />
      <MvpmHome />
      <ServicesHome />
      <Phrase />
      <ProjectsHome />
      <GetInTouch />
      <Footer /> */}
      {/* <Navbar /> */}
    </>
  );
};

export default Home;
