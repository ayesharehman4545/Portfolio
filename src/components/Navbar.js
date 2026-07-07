import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <div className="container">
                <a href="/" className="navbar-brand logo"> Portfolio </a>
                <button className="navbar-toggler" onClick={() => setMenu(!menu)}>
                    {menu ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${menu ? "show" : ""  }`} >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="nav-link" >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="skills"
                                smooth={true}
                                duration={500}
                                className="nav-link" >
                                Skills
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="services"
                                smooth={true}
                                duration={500}
                                className="nav-link" >
                                Services
                            </Link>
                        </li>

                         <li className="nav-item">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="nav-link" >
                                Projects
                            </Link>
                        </li>

                         <li className="nav-item">
                            <Link
                                to="testimonials"
                                smooth={true}
                                duration={500}
                                className="nav-link" >
                                Testimonials
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;