import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PortfolioSocials.css";

const PortfolioSocials = () => {
  return (
    <>
      <section className="sectionPortfolioSocials">
        <div className="socialLinks">
          <a
            href="https://unik-website-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-square-whatsapp"></i>
          </a>
          <a
            href="https://github.com/Lynkz22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a
            href="www.linkedin.com/in/odu-anu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default PortfolioSocials;
