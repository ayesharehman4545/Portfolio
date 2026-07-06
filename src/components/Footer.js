import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  const top = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };

  return (

    <>

      <footer className="footer">
        <div className="container text-center">
          <h3>Ayesha Rehman</h3>
          <p> Frontend Developer | React Developer | UI Designer </p>
          <hr />
          <p> © 2026 All Rights Reserved. </p>
        </div>
      </footer>
      {show && (
        <button className="top-btn" onClick={top} >
          <FaArrowUp />
        </button>
      )}
    </>

  );
}

export default Footer;