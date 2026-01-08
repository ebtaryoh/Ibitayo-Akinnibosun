import React from 'react';
import './About.css';
import Aos from 'aos';


function About() {
    Aos.init();
    return (
        <>
            <section id="about">
                <div className='about'>
                    <div className='about-info'>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">About me</p>
                        <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">Ibitayo Akinnibosun</h2>
                        <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">Hi, I am a <span> FullStack<span> Developer & a UI/UX Designer</span></span></h3>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">I’m a Full-Stack Developer and UI/UX Designer who builds user-centered digital products from idea to production. I design with Figma and develop using React, Next.js, TypeScript, Node.js, and modern databases, focusing on clean interfaces, scalable code, and great user experience.</p><br></br>
                    
                        <a href="/TAYO-CV.pdf" target="_blank"><button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800">Download CV</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;
