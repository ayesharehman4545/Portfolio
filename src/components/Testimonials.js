import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
function Testimonials() {
  const testimonials = [
    {
      name: "Ali",
      role: "Frontend Developer",
      image: process.env.PUBLIC_URL + "/images/pic6.jfif" ,
      feedback:
        "Working with Ayesha was a fantastic experience. The project was delivered on time with excellent UI and responsive design.",
    },
    {
      name: "Sara",
      role: "UI/UX Designer",
      image: process.env.PUBLIC_URL + "/images/pic7.jfif" ,
      feedback:
        "Beautiful designs, clean React code and smooth animations. Highly recommended for modern web development.",
    },
    {
      name: "Ahmad",
      role: "Software Engineer",
      image: process.env.PUBLIC_URL + "/images/pic8.jfif",
      feedback:
        "Professional attitude, responsive layouts and outstanding Bootstrap implementation. Great communication throughout.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container">
        <div
          className="text-center mb-5"
          data-aos="fade-up" >
          <h2 className="section-title fw-bold"> Testimonials</h2>
        </div>

        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 150}>
              <div className="testimonial-card h-100">
                <FaQuoteLeft className="quote-icon" />
                <div className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img" />

                  <h4>{item.name}</h4>
                  <span className="role"> {item.role} </span>
                </div>

                <div className="stars text-center my-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="text-center"> "{item.feedback}" </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;