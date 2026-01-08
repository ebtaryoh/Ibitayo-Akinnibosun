import React from "react";
import "./Project.css";
import Aos from "aos";
import NationalQuest from '../assets/National-Quest.jpg';

function Project() {
  Aos.init();
  return (
    <>
      <section id="project">
        <div className="project">
          <h2
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            Projects
          </h2>
          <div className="project-cards">
            <div
              className="project-card"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <img src={NationalQuest} alt="National Quest" />
              <div>
                <h4>Personal Portfolio</h4>
                <a href="https://national-quest.vercel.app/">
                  Live Demo<i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div
              className="project-card"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <img
                src="https://repository-images.githubusercontent.com/200318206/978d6f00-88dd-11ea-8727-1449bd91edc6"
                alt="project-img"
              />
              <div>
                <h4>Weather Application</h4>
                <a
                  href="https://react-weather-app-github-io.vercel.app/"
                  target="_blank"
                >
                  Live Demo <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
           
            <div
              className="project-card"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="700"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPtL6zMy8b-Ee7tGhjCdKX7U04vdpRllESobZ3j0MYQ&s"
                alt="project-img"
              />
              <div>
                <h4>Calculator Application</h4>
                <a
                  href="https://react-calculator-nine-flame.vercel.app/"
                  target="_blank"
                >
                  Live Demo <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Project;
