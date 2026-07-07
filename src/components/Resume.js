import React from "react";
import { FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

function Resume() {
    return (
        <section id="resume" className="resume-section py-5">
            <div className="container">

                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="section-title fw-bold">Resume</h2>
                </div>

                <div className="row g-5">
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="resume-card">
                            <h3 className="mb-4 text-primary">
                                <FaGraduationCap className="me-2" />
                                Education
                            </h3>
                            <div className="timeline-item">
                                <span className="year">2020 - 2024</span>
                                <h5>Bachelor of Computer Science</h5>
                                <p className="text-primary">
                                   LCWU University
                                </p>
                                <p>
                                    Focused on Software Engineering, Web Development,
                                    Database Systems and UI/UX Design.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <span className="year">2020 - 2022</span>
                                <h5>Intermediate (FSC)</h5>
                                <p className="text-primary">  Samnabad College </p>
                                <p>
                                    Studied Computer Science, Mathematics and Physics.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <span className="year">2018 - 2020</span>
                                <h5>Matriculation</h5>
                                <p className="text-primary">  Comprehensive School </p>
                                <p>  Completed secondary education with Computer Science. </p>
                            </div>
                        </div>
                    </div>

                   
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="resume-card">
                            <h3 className="mb-4 text-primary">
                                <FaBriefcase className="me-2" />
                                Experience
                            </h3>
                            <div className="timeline-item">
                                <span className="year">2025 - Present</span>
                                <h5>Frontend Developer</h5>
                                <p className="text-primary"> Freelance </p>
                                <p>
                                    Building responsive React websites, Bootstrap dashboards
                                    and interactive user interfaces.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <span className="year">2024 - 2025</span>
                                <h5>React Developer Intern</h5>
                                <p className="text-primary"> Tech Company  </p>
                                <p>
                                    Developed reusable React components and optimized
                                    responsive layouts.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <span className="year">2023 - 2024</span>
                                <h5>Web Designer</h5>
                                <p className="text-primary">  Personal Projects </p>
                                <p>
                                    Designed modern websites using HTML, CSS,
                                    Bootstrap and JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;