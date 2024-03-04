import React from "react";
import { motion } from "framer-motion";
import "../Styles/PortfolioPageName.css";

const PortfolioPageNameFirstName = () => {
  return (
    <>
      <section className="divNameHeadingFirstName">
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <p>A</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 6, delay: 2 }}
          viewport={{ once: true }}
        >
          <p>N</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 7, delay: 3 }}
          viewport={{ once: true }}
        >
          <p>U</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 8, delay: 4 }}
          viewport={{ once: true }}
        >
          <p>O</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 9, delay: 5 }}
          viewport={{ once: true }}
        >
          <p>L</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 10, delay: 6 }}
          viewport={{ once: true }}
        >
          <p>U</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 11, delay: 7 }}
          viewport={{ once: true }}
        >
          <p>W</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 12, delay: 8 }}
          viewport={{ once: true }}
        >
          <p>A</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 13, delay: 9 }}
          viewport={{ once: true }}
        >
          <p>P</p>
        </motion.div>
        <motion.div
          className="nameHeadingFirstName"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 14, delay: 10 }}
          viewport={{ once: true }}
        >
          <p>O</p>
        </motion.div>
      </section>
    </>
  );
};

export default PortfolioPageNameFirstName;
