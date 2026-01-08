import React from 'react';
import './Header.css';
import Aos from 'aos';



function Header(){
    Aos.init();
    return(
        <>
            <section id="home">
                <div className='hero'>
                    <div className='hero-info'>
                        <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">Hi, I am <span>Ibitayo Akinnibosun</span></h1>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1100">I design with empathy and build with precision.</p>
                        <div className='social-icons'>
                             <a href="https://www.linkedin.com/in/ibitayo-akinnibosun/" target='_blank'><i className='fa-brands fa-linkedin' data-aos="fade" data-aos-duration="1500" data-aos-delay="1400"></i></a>
                            <a href="https://github.com/ebtaryoh" target='_blank'><i className='fa-brands fa-github' data-aos="fade" data-aos-duration="1500" data-aos-delay="1500"></i></a>
                            <a href="#"><i className='fa-brands fa-instagram' data-aos="fade" data-aos-duration="1500" data-aos-delay="1200"></i></a>
                            <a href="#"><i className='fa-brands fa-facebook' data-aos="fade" data-aos-duration="1500" data-aos-delay="1300"></i></a>
                        </div>
                        <div className='hero-btns'>
                            <a href="#skills"><button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1600">Hire me</button></a>
                            <a href="#contact"><button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1700">Contact me</button></a>
                        </div>
                    </div>
                    <div className='hero-img' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1800">
                        <img src="./Images/boy.png" alt="hero-img"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header;
