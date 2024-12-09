import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link  from react-router-dom

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
      <h1>Yogesh Hanuman P</h1>
      <ul>
        <li>
          <FaHome /> <Link to="/">Home</Link> {/* Use Link to="/" */}
        </li>
        <li>
          <FaBriefcase /> <Link to="/experience">Experience</Link>{" "}
          {/* Link to Experience */}
        </li>
        <li>
          <FaEnvelope /> <Link to="/contact">Contact</Link>{" "}
          {/* Link to Contact */}
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
