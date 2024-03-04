import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/PortfolioProjects.css";
import hsaImage from "../Components/Assets/Portfolio/HSA1.webp";
import unikImage from "../Components/Assets/Portfolio/UNIK2.webp";
const PortfolioProjects = () => {
  return (
    <>
      <section className="sectionPortfolioProjects">
        <div className="divProjectHSA">
          <motion.div
            className="divProjectsHSAPicture"
            initial={{ opacity: 0.3, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 6 }}
            viewport={{ once: true }}
          >
            <img className="hsaImage" alt="HSAImage" src={hsaImage} />
          </motion.div>
          <motion.div
            className="divProjectsHSAText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 6 }}
            viewport={{ once: true }}
          >
            <p>
              A website for Hand Sketch Architect, an architectural firm that
              specializes in architecture of various kinds of buildings -
              residential, commercial, institutional, and industrial buildings.
              and also provide services on architectural consultancy, project
              management, interior design, and remodelling.
            </p>
            <a
              href="https://handsketcharchitect.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonVisitSite">Visit Site</button>
            </a>
          </motion.div>
        </div>
        <br />
        <br />
        <br />
        <div className="divProjectUNIK">
          <motion.div
            className="divProjectsHSAText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 6 }}
            viewport={{ once: true }}
          >
            <p>
              A website for UNIK-TOSA Limited, an organization serving private
              enterprises and governmental agencies in providing consultancy and
              advisory services in civil/structural engineering, including
              construction with services including every stage of development
              from reconnaissance, through feasibility investigations, design,
              and construction of such projects.
            </p>
            <a
              href="https://unik-website-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonVisitSite">Visit Site</button>
            </a>
          </motion.div>
          <motion.div
            className="divProjectsHSAPicture"
            initial={{ opacity: 0.3, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 6 }}
            viewport={{ once: true }}
          >
            <img className="hsaImage" alt="UNIKImage" src={unikImage} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioProjects;
