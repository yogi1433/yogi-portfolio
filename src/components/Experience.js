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
        <strong>DevOps and Cloud Engineer</strong> at Santric Technologies Pvt.
        Ltd.
      </p>
      <p data-aos="fade-right">
        <em>Project: Telstra (Australian Networking Company)</em>
      </p>
      <div className="experience-list" data-aos="fade-left">
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            ➡️ Designed and managed scalable cloud infrastructure on AWS,
            leveraging EC2, S3, VPC, and CloudWatch to ensure high availability
            and performance.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            ➡️ Implemented and optimized CI/CD pipelines using Jenkins, reducing
            release times and streamlining deployment processes.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            ➡️ Managed containerized applications using Docker and orchestrated
            them with Kubernetes to enhance scalability and manage resources
            efficiently.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            ➡️ Utilized Terraform for Infrastructure as Code (IaC) to
            standardize and automate cloud infrastructure provisioning.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            ➡️ Set up and managed robust monitoring and observability solutions
            using Prometheus, Grafana, and AWS CloudWatch for proactive issue
            resolution.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            ➡️ Automated build processes with Maven for Java projects, ensuring
            efficient and reproducible builds.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <h2 data-aos="fade-up">Projects</h2>
      <div className="experience-list" data-aos="fade-left">
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            <strong>Scalable Cloud Infrastructure for Telstra</strong>: Designed
            and deployed cloud infrastructure on AWS, incorporating EC2, S3, and
            VPC configurations to meet the requirements of Telstra’s large-scale
            networking operations.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            <strong>End-to-End CI/CD Pipeline Implementation</strong>:
            Integrated Jenkins pipelines to automate build, test, and deployment
            processes, reducing the manual effort and accelerating release
            cycles.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            <strong>Containerized Web Applications</strong>: Developed
            Dockerized applications and managed their deployment using
            Kubernetes, ensuring high availability and load balancing.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            <strong>Infrastructure Automation with Terraform</strong>: Created
            reusable Terraform modules for deploying cloud resources,
            maintaining consistency and reducing configuration drift.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            <strong>Monitoring and Alerting Solution</strong>: Set up monitoring
            infrastructure with Prometheus and Grafana integrated with AWS
            CloudWatch, facilitating real-time observability and incident
            management.
          </p>
        </div>
        <div className="experience-item">
          <div className="experience-divider"></div>
          <p>
            <strong>Build Automation for Java Projects</strong>: Streamlined
            Java build processes using Maven, ensuring seamless integration with
            Jenkins for continuous deployment.
          </p>
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
