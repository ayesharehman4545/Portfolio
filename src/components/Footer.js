import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-text">
              Thank you for visiting my portfolio. Feel free to connect with me
              through social media or email.
            </p>
          </div>

          <div className="col-lg-6 text-lg-end">
            <div className="social-links">
              <a href="https://github.com" target="_blank"  rel="noreferrer" >
                <FaGithub />
              </a>

              <a  href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>

              <a  href="https://facebook.com" target="_blank" rel="noreferrer" >
                <FaFacebookF />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>

            <button className="top-btn mt-4" onClick={scrollTop} >
              <FaArrowUp />
            </button>

          </div>
        </div>

        <hr className="footer-line" />
        <div className="text-center">
          <p className="copyright">
            © 2026 Ayesha Rehman. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;