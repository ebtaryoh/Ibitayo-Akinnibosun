import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <section>
                <div className='footer'>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
                        <h1>Ibitayo Akinnibosun</h1>
                        <div>
                            <p>I design with empathy and build with precision.</p>
                            <div className='social'>
                                <i className='fa-brands fa-linkedin-in'></i>
                                <i className='fa-brands fa-facebook-f'></i>
                                <i className='fa-brands fa-instagram'></i>
                                <i className='fa-brands fa-github'></i>
                            </div>
                        </div>
                    </div>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                          
                            <li>
                                <a href="#project">Projects</a>
                            </li>
                        </ul>
                    </div>
               
                </div>
            </section>
        </>
    )
}
export default Footer;
