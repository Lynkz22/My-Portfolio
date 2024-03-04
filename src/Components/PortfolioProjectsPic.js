import React from "react";
import "../Styles/PortfolioProjectsPic.css";
import projPic1 from "../Components/Assets/Portfolio/HSA1.webp";
import projPic2 from "../Components/Assets/Portfolio/UNIK3.webp";
import projPic3 from "../Components/Assets/Portfolio/HSA4.webp";
import projPic4 from "../Components/Assets/Portfolio/UNIK5.webp";
import projPic5 from "../Components/Assets/Portfolio/HSA3.webp";
import projPic6 from "../Components/Assets/Portfolio/UNIK4.webp";
import projPic7 from "../Components/Assets/Portfolio/HSA6.webp";
import projPic8 from "../Components/Assets/Portfolio/UNIK2.webp";
import projPic9 from "../Components/Assets/Portfolio/HSA7.webp";

const PortfolioProjectsPic = () => {
  return (
    <>
      <section className="sectionProjectPics">
        <div className="divPictures">
          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic1}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic2}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic3}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic4}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic5}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic6}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic7}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic8}
            />
          </div>

          <div className="projectsHomeContainer">
            <img
              className="projectHomeImage"
              alt="ProjectsImage"
              src={projPic9}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioProjectsPic;
