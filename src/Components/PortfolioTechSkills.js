import React from "react";
import "../Styles/PortfolioTechSkills.css";
import html from "../Components/Assets/Portfolio/HTML.webp";
import css from "../Components/Assets/Portfolio/CSS.png";
import js from "../Components/Assets/Portfolio/JS.png";
import jsx from "../Components/Assets/Portfolio/JSX.png";
import reactlogo from "../Components/Assets/Portfolio/REACT.png";
import nodelogo from "../Components/Assets/Portfolio/NODE.png";
import git from "../Components/Assets/Portfolio/GIT.png";


const PortfolioTechSkills = () => {
  return (
    <>
      <section className="sectionPortfolioTechSkills">
        <div className="divPortfolioTechSkills">
          <div>
            <div className="skillsContainer">
              <img className="techSkillsImage" alt="SkillsImage" src={html} />
              <div className="divTechSkillsText">
                <p className="techSkillsText">HTML</p>
              </div>
            </div>
          </div>

          <div>
            <div className="skillsContainer">
              <img className="techSkillsImage" alt="SkillsImage" src={css} />
              <div className="divTechSkillsText">
                <p className="techSkillsText">CSS</p>
              </div>
            </div>
          </div>

          <div>
            <div className="skillsContainer">
              <img className="techSkillsImage" alt="SkillsImage" src={js} />
              <div className="divTechSkillsText">
                <p className="techSkillsText">JS</p>
              </div>
            </div>
          </div>

          <div>
            <div className="skillsContainer">
              <img className="techSkillsImage" alt="SkillsImage" src={jsx} />
              <div className="divTechSkillsText">
                <p className="techSkillsText">REACT</p>
              </div>
            </div>
          </div>

          <div>
            <div className="skillsContainer">
              <img
                className="techSkillsImage"
                alt="SkillsImage"
                src={reactlogo}
              />
              <div className="divTechSkillsText">
                <p className="techSkillsText">JSX</p>
              </div>
            </div>
          </div>

          <div>
            <div className="skillsContainer">
              <img
                className="techSkillsImage"
                alt="SkillsImage"
                src={nodelogo}
              />
              <div className="divTechSkillsText">
                <p className="techSkillsText">NODE</p>
              </div>
            </div>
          </div>

          <div>
            <div className="skillsContainer">
              <img
                className="techSkillsImage"
                alt="SkillsImage"
                src={git}
              />
              <div className="divTechSkillsText">
                <p className="techSkillsText">GITHUB</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioTechSkills;
