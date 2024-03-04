import React from "react";
import { motion } from "framer-motion";
import "../Styles/PortfolioPageName.css";
import PortfolioPageNameSurname from "./PortfolioPageNameSurname";
import bcgImage from "../Components/Assets/BCG.jpg";
import profilePic from "../Components/Assets/ProfilePic.jpg";
import PortfolioPageNameFirstName from "./PortfolioPageNameFirstName";

const PortfolioPageName = () => {
  return (
    <>
      <section className="sectionPortfolioName">
        <img className="bcgImage" alt="BcgImage" src={bcgImage} />

        <div className="divPortfolioName">
          <div className="divName">
            <div className="divNameHeading">
              <motion.div
                className="divNameHeadingText"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 4, delay: 1 }}
                viewport={{ once: true }}
              >
                <p>Hi, my name is </p>
              </motion.div>

              <PortfolioPageNameSurname />

              <PortfolioPageNameFirstName />
              <motion.div
                className="divNameHeadingText-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 7, delay: 5 }}
                viewport={{ once: true }}
              >
                <p>
                  I'm a software engineer specialized in building and designing
                  exceptional digital experiences.
                </p>
              </motion.div>
            </div>
            <div className="divNameAbout"></div>
          </div>
          <div className="divProfilePicture">
            <img className="profilePic" alt="Profile Pic" src={profilePic} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPageName;
