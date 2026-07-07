import React from "react";
import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";
function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            image: process.env.PUBLIC_URL + "/images/portfolio3.jfif" ,
            description:
                "A responsive personal portfolio built with React and Bootstrap featuring modern UI and animations.",
            tech: ["React", "Bootstrap", "CSS"],
        },
        {
            title: "CRM Dashboard",
           image: process.env.PUBLIC_URL + "/images/dashboard2.jfif" ,
            description:
                "Modern CRM dashboard with charts, employee management and responsive sidebar.",
            tech: ["React", "Bootstrap", "JavaScript"],
        },
        {
            title: "Weather App",
            image: process.env.PUBLIC_URL + "/images/weather.jfif" ,
            description:
                "Weather application using API integration with beautiful UI and search functionality.",
            tech: ["React", "API", "CSS"],
        },
        {
            title: "Task Manager",
            image: process.env.PUBLIC_URL + "/images/task.jfif" ,
            description:
                "Task management application with progress tracking and responsive interface.",
            tech: ["React", "Bootstrap", "Firebase"],
        },
        {
            title: "E-Commerce UI",
            image: process.env.PUBLIC_URL + "/images/portfolio1.jfif" ,
            description:
                "Responsive shopping website UI featuring product cards and modern layouts.",
            tech: ["React", "Bootstrap", "Redux"],
        },
        {
            title: "Movie Search",
            image: process.env.PUBLIC_URL + "/images/movie.jfif" ,
            description:
                "Movie search application using API with filtering and responsive card design.",
            tech: ["React", "API", "Bootstrap"],
        },
    ];

    return (
        <section id="projects" className="py-5 projects-section">
            <div className="container">

                <div
                    className="text-center mb-5"
                    data-aos="fade-up" >
                    <h2 className="fw-bold section-title"> My Projects </h2>
                </div>

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100} >
                            <div className="card border-0 shadow project-card h-100">
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        className="card-img-top"
                                        alt={project.title}/>
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h4 className="fw-bold">  {project.title}  </h4>
                                    <p className="text-muted">  {project.description}   </p>

                                    <div className="mb-3">
                                        {project.tech.map((item, i) => (
                                            <span
                                                key={i}
                                                className="badge bg-primary me-2 mb-2" >
                                                {item}
                                            </span>
                                        ))}

                                    </div>

                                    <div className="mt-auto">
                                        <a href="/" className="btn btn-primary me-2"  >
                                            <FaExternalLinkAlt className="me-2" />
                                            Live Demo  </a>
                                        <a href="/"  className="btn btn-outline-dark"  >
                                            <FaGithub className="me-2" />
                                            GitHub
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;