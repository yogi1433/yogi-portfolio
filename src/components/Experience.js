import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="experience" className="experience">
      {/* Experience Section */}
      <h1 data-aos="fade-up">Experience</h1>
      <p data-aos="fade-right">
        <strong>DevOps Engineer</strong> at Santric Technologies Pvt. Ltd.
      </p>
      <div className="experience-list" data-aos="fade-left">
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            ➡️ Supported development and deployment pipelines to maintain CI/CD
            processes.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>➡️ Managed cloud services including AWS EC2, S3, and VPC.</p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>➡️ Handled containerization using Docker and Kubernetes.</p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>➡️ Automated tasks with Ansible and Shell Scripting.</p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>➡️ Monitored performance using Prometheus and Grafana.</p>
        </div>
      </div>

      {/* Skills Section */}
      <h2 data-aos="zoom-in">Skills</h2>
      <div className="skills-list" data-aos="fade-up">
        <div className="skill-item">
          <div className="skill-icon">
            <img
              src={require("../assets/kubernetes-logo.png")}
              alt="Kubernetes"
              className="logo-icon"
            />
          </div>
          <p>Kubernetes</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fab fa-aws"></i>
          </div>
          <p>AWS (EC2, S3, VPC)</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fab fa-docker"></i>
          </div>
          <p>Docker & Docker Compose</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fab fa-jenkins"></i>
          </div>
          <p>Jenkins CI/CD</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <img
              src={require("../assets/ansible-logo.png")}
              alt="Ansible"
              className="logo-icon"
            />
          </div>
          <p>Ansible & Shell Scripting</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <p>Grafana & Prometheus</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fab fa-linux"></i>
          </div>
          <p>Linux Administration</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <img
              src={require("../assets/terraform-logo.png")}
              alt="Terraform"
              className="logo-icon"
            />
          </div>
          <p>Terraform & CloudFormation</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
