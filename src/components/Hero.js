import React, { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "SLIIT Graduate",
  "QA Engineer",
  "Project Manager",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = deleting ? 55 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = currentRole.slice(0, typed.length + 1);
        setTyped(nextText);

        if (nextText === currentRole) {
          setTimeout(() => {
            setDeleting(true);
          }, 1400);
        }
      } else {
        const nextText = currentRole.slice(0, typed.length - 1);
        setTyped(nextText);

        if (nextText === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar animate-fadeInDown">
        <div className="logo">Portfolio</div>

        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <h3 className="greet animate-slideInLeft" style={{ animationDelay: "0.1s" }}>
            Hello, It's Me
          </h3>

          <h1 className="name animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
            Induru Ranasinghe
          </h1>

          <h2 className="role animate-slideInLeft" style={{ animationDelay: "0.3s" }}>
            And I'm a{" "}
            <span className="cyan">
              {typed}
            </span>
            <span className="cursor"></span>
          </h2>

          <p className="desc animate-slideInLeft" style={{ animationDelay: "0.4s" }}>
            SLIIT graduate with expertise in webpage and
            website creation, with experience in both Frontend and
            Backend development.
          </p>

          {/* SOCIAL ICONS */}
          <div className="socials animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
            <a
              className="li"
              href="https://www.linkedin.com/in/induru-ranasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C22 7.73 23 10.3 23 14.2V24h-5v-8.7c0-2.07-.04-4.73-2.88-4.73-2.88 0-3.32 2.25-3.32 4.58V24h-5V8z" />
              </svg>
            </a>

            <a
              className="gh"
              href="https://github.com/induruwimansha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.27 5.66.42.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
              </svg>
            </a>
          </div>

          {/* CV BUTTON */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <a 
              href="/Resume - Induru_Ranasinghe.pdf" 
              download="Resume - Induru_Ranasinghe.pdf" 
              className="cv-btn"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-img animate-scaleIn" style={{ animationDelay: "0.3s" }}>
          <div className="ring animate-spinSlow">
            <div className="ring-inner">
              <img
                src="/images/profile.jpg"
                alt="Induru Ranasinghe"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}