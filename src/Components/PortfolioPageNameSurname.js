import React from "react";
import { motion } from "framer-motion";
import "../Styles/PortfolioPageName.css";

const PortfolioPageNameSurname = () => {
  return (
    <>
      <section className="divNameHeadingSurname">
        <motion.div
          className="NameHeadingSurname"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, delay: 1 }}
          viewport={{ once: true }}
        >
          <p>O</p>
        </motion.div>
        <motion.div
          className="NameHeadingSurname"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 6, delay: 2 }}
          viewport={{ once: true }}
        >
          <p>D</p>
        </motion.div>
        <motion.div
          className="NameHeadingSurname"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 7, delay: 3 }}
          viewport={{ once: true }}
        >
          <p>U</p>
        </motion.div>
        <motion.div
          className="NameHeadingSurname"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 8, delay: 4 }}
          viewport={{ once: true }}
        >
          <p>N</p>
        </motion.div>
        <motion.div
          className="NameHeadingSurname"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 9, delay: 5 }}
          viewport={{ once: true }}
        >
          <p>E</p>
        </motion.div>
        <motion.div
          className="NameHeadingSurname"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 10, delay: 6 }}
          viewport={{ once: true }}
        >
          <p>Y</p>
        </motion.div>
        <motion.div
          className="NameHeadingSurname"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 11, delay: 7 }}
          viewport={{ once: true }}
        >
          <p>E</p>
        </motion.div>
      </section>
    </>
  );
};

export default PortfolioPageNameSurname;
