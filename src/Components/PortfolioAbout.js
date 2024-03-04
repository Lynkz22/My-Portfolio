import React from "react";
import { motion } from "framer-motion";
import "../Styles/PortfolioAbout.css";
import aboutMeImage from "../Components/Assets/Portfolio/Profile.png";

const PortfolioAbout = () => {
  return (
    <>
      <motion.section
        className="sectionAbout"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5 }}
        viewport={{ once: true }}
      >
        <div className="divPortfolioAboutPic">
          <img className="aboutMeImage" alt="AboutMeImage" src={aboutMeImage} />
        </div>
        <div className="divPortfolioAboutText">
          <p>
            Hello! I'm Oduneye Anuoluwapo, a dedicated web developer with a
            fervor for creating elegant and functional digital experiences. My
            curiosity led me to explore programming languages, and soon enough,
            I found myself immersed in the world of web development and invested
            in resources where I honed my skills in HTML, CSS, JavaScript, and
            frameworks.
            <br /> <br />
            Web development isn't just lines of code; it's a canvas where
            creativity meets functionality. Driven by a User-Centric Approach, I
            craft intuitive interfaces and optimize site performance to enhance
            the user experience. The ever-evolving tech landscape fuels my
            passion—I thrive on learning new frameworks, libraries, and best
            practices.
            <br /> <br />
            Beyond the code, my motivation lies in making a positive impact.
            Whether it's a small business website, an e-commerce platform, or a
            community forum, I envision my work as a bridge connecting people,
            ideas, and opportunities. So, here's to the lines of code that shape
            our digital world! 🚀 Let's build something remarkable together.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default PortfolioAbout;
