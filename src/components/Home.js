import React from "react";
import { motion } from "framer-motion";
// import "./Home.css";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <motion.img
        src="./yogi_profile.jpg"
        alt="Yogesh Hanuman"
        className="profile-pic"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      <motion.h1
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}>
        I am a DevOps Engineer with 2 years of experience in supporting and
        managing development pipelines, CI/CD processes, and cloud-based
        infrastructures.
      </motion.p>
    </motion.div>
  );
};

export default Home;
