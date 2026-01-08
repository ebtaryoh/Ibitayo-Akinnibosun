import React, { useState } from 'react';
import './Nav.css';
import Aos from 'aos';



function Nav() {
    Aos.init();
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container">
                    <a data-aos="fade" data-aos-duration="1500" className="navbar-brand" href="#">Ibitayo <span>.A</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">Skills</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="#project" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Nav;
