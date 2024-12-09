import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Make sure the CSS file is in the same directory

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

      <section className="skills-section">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}>
          Skills
        </motion.h2>
        <ul className="skills-list">
          {[
            "Docker & Kubernetes",
            "CI/CD Pipelines",
            "AWS & Cloud Infrastructure",
            "Ansible & Configuration Management",
            "Linux & Scripting",
            "Prometheus",
            "Grafana",
            "Terraform",
            "Git & GitHub",
          ].map((skill, index) => (
            <motion.li
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}>
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="projects-section">
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}>
          Projects
        </motion.h2>
        <div className="project-list">
          {[
            {
              title: "Portfolio Website",
              description:
                "A responsive portfolio site showcasing my DevOps projects and skills.",
            },
            {
              title: "CI/CD Pipeline Implementation",
              description:
                "Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions for automated deployment.",
            },
            {
              title: "Cloud Infrastructure Management",
              description:
                "Managed and automated AWS infrastructure using Terraform and Ansible for scalable deployment.",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="project-item"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}>
          Contact Me
        </motion.h2>
        <p>Feel free to reach out for collaboration or inquiries at:</p>
        <p>
          Email:{" "}
          <a href="mailto:parnapalliyogeshhanuman@gmail.com">
            parnapalliyogeshhanuman@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="http://linkedin.com/in/yogesh-hanuman-p-708505269"
            target="_blank"
            rel="noopener noreferrer">
            linkedin.com/in/yogesh-hanuman-p
          </a>
        </p>
      </section>
    </motion.div>
  );
};

export default Home;
