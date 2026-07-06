import React from "react";
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaReact,
  FaSearch,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Modern, scalable and responsive websites built with the latest technologies.",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Design",
      desc: "Clean, creative and user-friendly interfaces focused on great user experience.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Perfectly optimized websites for desktop, tablet and mobile devices.",
    },
    {
      icon: <FaReact />,
      title: "React Development",
      desc: "Fast, reusable and dynamic React applications with modern architecture.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Better performance, accessibility and search engine optimization.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance",
      desc: "Bug fixing, performance improvements and continuous website support.",
    },
  ];

  return (
    <section id="services" className="services section-padding">

      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle"> MY SERVICES </span>
          <h2> What I Can Do For You  </h2>
          <p>
            Creating modern digital experiences with creativity,
            performance and clean code.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}>

              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <button className="service-btn">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;