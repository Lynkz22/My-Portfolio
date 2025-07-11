import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/PortfolioProjects.css";
import hsaImage from "../Components/Assets/Portfolio/HSA1.webp";
import unikImage from "../Components/Assets/Portfolio/UNIK2.webp";
// import unikImage from "../Components/Assets/Portfolio/UNIK2.webp";
import kgreatImage from "../Components/Assets/Portfolio/KGREAT.webp";
import walkProjects from "../Components/Assets/Portfolio/WalkProjects.webp";

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
            <img className="hsaImage" alt="HSAImage" src={walkProjects} />
          </motion.div>
          <motion.div
            className="divProjectsHSAText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 6 }}
            viewport={{ once: true }}
          >
            <p>
              A website for Walk Projects, a Mechanical, Electrical, and
              Plumbing (MEP) firm that specializes in the design and
              implementation of building systems for a wide range of
              structures—residential, commercial, institutional, and industrial.
              They provide specialized services in HVAC design, electrical power
              and lighting systems, water supply and drainage solutions, fire
              protection systems, and building automation. Let me know if you'd
              like to add visuals, animations, or any specific project
              highlights to the site description—it could really show off your
              design talent!
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
              href="https://https://uniktosalimited.com/"
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
        <br />
        <br />
        <br />
        <div className="divProjectUNIK">
          <motion.div
            className="divProjectsHSAPicture"
            initial={{ opacity: 0.3, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 6 }}
            viewport={{ once: true }}
          >
            <img className="hsaImage" alt="K-GreatImage" src={kgreatImage} />
          </motion.div>
          <motion.div
            className="divProjectsHSAText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 6 }}
            viewport={{ once: true }}
          >
            <p>
              A website for K-Great Engineering, an organization serving private
              enterprises and governmental agencies in providing consultancy and
              advisory services in Mechanical and Electrical Engineering,
              including construction with services including every stage of
              development from reconnaissance, through feasibility
              investigations, design, and construction of such projects.
            </p>
            <a
              href="http://kgreatengineering.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonVisitSite">Visit Site</button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioProjects;
