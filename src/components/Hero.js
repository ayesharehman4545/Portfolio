import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  const words = [
    "Frontend Developer",
    "React Developer",
    "UI Designer",
    "Web Designer",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIndex];

    const timer = setTimeout(() => {
      if (typing) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTyping(false);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setTyping(true);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typing ? 120 : 70);

    return () => clearTimeout(timer);
  }, [text, typing, wordIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="hero-small">
              👋 Hello, I'm
            </span>
            <h1 className="hero-title">
              Ayesha <span>Rehman</span>
            </h1>
            <h2 className="typing">
              {text}
              <span className="cursor">|</span>
            </h2>
            <p className="hero-text">
              I build modern, responsive and interactive
              websites using React, Bootstrap,
              JavaScript, HTML and CSS.
            </p>

            <div className="hero-btns">
              <button className="btn btn-info hero-btn">
                <FaDownload />
                Download CV
              </button>

              <button className="btn btn-outline-light hero-btn2">
                Hire Me
                <FaArrowRight />
              </button>

            </div>

            <div className="social-icons">
              <a href="#"> <FaGithub /> </a>
              <a href="#"> <FaLinkedin /> </a>
              <a href="#"> <FaInstagram /></a>
            </div>
          </div>

          <div
            className="col-lg-6 text-center"
            data-aos="fade-left">

            <div className="hero-image">
              <img
                src={process.env.PUBLIC_URL + "/images/pic1.jfif"}
                alt="profile"
                className="img-fluid" />

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;