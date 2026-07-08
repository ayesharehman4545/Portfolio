import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info">

              <div className="contact-box d-flex mb-4">
                <div className="icon">
                  <FaEnvelope />
                </div>

                <div className="ms-3">
                  <h5>Email</h5>
                  <p>ayesharehman@gmail.com</p>
                </div>
              </div>

              <div className="contact-box d-flex mb-4">
                <div className="icon">
                  <FaPhoneAlt />
                </div>

                <div className="ms-3">
                  <h5>Phone</h5>
                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className="contact-box d-flex">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="ms-3">
                  <h5>Location</h5>
                  <p>Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control"  placeholder="Full Name" required   />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input  type="email" className="form-control" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="mb-3">
                  <input type="text" className="form-control"  placeholder="Subject" />
                </div>

                <div className="mb-3">
                  <textarea rows="6" className="form-control"  placeholder="Your Message" ></textarea>
                </div>

                <button className="btn contact-btn">
                  <FaPaperPlane className="me-2" />
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;