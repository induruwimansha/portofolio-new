import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left - Profile Image */}
        <div className="about-image">
          <img
            src="/images/induru.png"
            alt="Profile"
          />
        </div>

        {/* Right - About Content */}
        <div className="about-content">

          <h1>
            About <span>Me</span>
          </h1>

          <h2>Designer &amp; Developer!</h2>

          <p>
           Hello, I'm Induru Ranasinghe, a graduate of the SLIIT. I am a dedicated individual committed to
continuous self-improvement while seeking
new challenges across diverse domains. By
effectively combining both technical and
non-technical skills, I strive to drive success
and contribute to the growth of both
professional and social contexts.
My approach is rooted in a performanceoriented mindset, consistently pushing the
boundaries of excellence while achieving
the objectives.
          </p>

          <button className="read-more-btn">
            Read More
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;
