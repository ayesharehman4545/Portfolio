import React from "react";
import { FaUserGraduate, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">

        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 text-center" data-aos="fade-right">
            <img
              src={process.env.PUBLIC_URL + "/images/pic1.jfif"}
              alt="about"
              className="img-fluid about-img"/>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <h3>Hello! I'm Ayesha Rehman</h3>
            <p>
              I am a passionate Frontend Developer who enjoys creating
              modern, responsive and user-friendly websites using
              HTML, CSS, Bootstrap, JavaScript and React.
            </p>

            <p>
              I love learning new technologies and transforming ideas
              into beautiful digital experiences.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <div className="info-card">
                  <FaLaptopCode />
                  <h4>1+</h4>
                  <span>Years Experience</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card">
                  <FaProjectDiagram />
                  <h4>25+</h4>
                  <span>Projects</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card">
                  <FaUserGraduate />
                  <h4>15+</h4>
                  <span>Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;