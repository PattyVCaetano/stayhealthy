import React from "react";
import "./LandingPage.css";
import Navbar from "../Navbar/Navbar"; // Import the Navbar component

const Landing_Page = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component at the top */}
      <section className="hero-section">
        <div>
          <div data-aos="fade-up" className="flex-hero">
              <h1>
                Your Health<br/>
                <span className="text-gradient">
                  Our Responsibility
                </span>
              </h1>
                <div class="blob-cont">
                    <div class="blue blob"></div>
                </div>
                <div class="blob-cont">
                    <div class="blue1 blob"></div>
                </div>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
              </h4>
              <a href="#services">
                <button class="button">Get Started</button>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing_Page;
