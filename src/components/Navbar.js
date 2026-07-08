import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <div className="container">
                <a href="/" className="navbar-brand logo">
                    Portfolio
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenu(!menu)} >
                    {menu ? <FaTimes /> : <FaBars />}
                </button>

                <div
                    className={`collapse navbar-collapse justify-content-end ${menu ? "show" : "" }`} >
                    <ul className="navbar-nav align-items-lg-center">
                        <li className="nav-item">
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="nav-link"
                                onClick={closeMenu} >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="nav-link"
                                onClick={closeMenu}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="skills"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="nav-link"
                                onClick={closeMenu} >
                                Skills
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="nav-link"
                                onClick={closeMenu} >
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="nav-link"
                                onClick={closeMenu} >
                                Projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="testimonials"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="nav-link"
                                onClick={closeMenu} >
                                Testimonials
                            </Link>
                        </li>

                    </ul>

                    <div className="ms-lg-3 mt-3 mt-lg-0">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="contact-nav-btn"
                            onClick={closeMenu} >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;