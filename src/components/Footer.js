import React from "react";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/induruwimansha",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/induru-ranasinghe/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:induruwimansha@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="text-white border-t border-blue-900/20 relative"
      style={{
        backgroundColor: "#323a4a",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left Side */}
          <div>
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/images/profile.jpg"
                alt="profile"
                className="w-14 h-14 rounded-full border border-blue-500 object-cover"
              />

              <div>
                <h2 className="text-3xl font-bold">Induru Ranasinghe</h2>

                <p className="text-gray-300 mt-1">
                  BSc (Hons) Information Technology | Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-gray-300 hover:text-blue-400 transition duration-300 text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-900/40 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Copyright */}
          <div>
            <p className="text-gray-300 text-sm">
              © {currentYear} Induru Ranasinghe. All rights reserved.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center shadow-lg"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;