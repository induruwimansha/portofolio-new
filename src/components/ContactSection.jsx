import React, { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const headingRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const contactItemsRef = useRef([]);
  const socialRef = useRef(null);

  // Form input states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      headingRef.current.style.opacity = "0";
      headingRef.current.style.transform = "translateY(-30px)";
      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.style.transition = "all 0.6s ease-out";
          headingRef.current.style.opacity = "1";
          headingRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }

    // Animate left card
    if (leftCardRef.current) {
      leftCardRef.current.style.opacity = "0";
      leftCardRef.current.style.transform = "translateX(-50px)";
      setTimeout(() => {
        if (leftCardRef.current) {
          leftCardRef.current.style.transition = "all 0.7s ease-out";
          leftCardRef.current.style.opacity = "1";
          leftCardRef.current.style.transform = "translateX(0)";
        }
      }, 300);
    }

    // Animate right card
    if (rightCardRef.current) {
      rightCardRef.current.style.opacity = "0";
      rightCardRef.current.style.transform = "translateX(50px)";
      setTimeout(() => {
        if (rightCardRef.current) {
          rightCardRef.current.style.transition = "all 0.7s ease-out";
          rightCardRef.current.style.opacity = "1";
          rightCardRef.current.style.transform = "translateX(0)";
        }
      }, 400);
    }

    // Animate social section
    if (socialRef.current) {
      socialRef.current.style.opacity = "0";
      socialRef.current.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (socialRef.current) {
          socialRef.current.style.transition = "all 0.6s ease-out";
          socialRef.current.style.opacity = "1";
          socialRef.current.style.transform = "translateY(0)";
        }
      }, 600);
    }

    // Animate contact items with stagger effect
    contactItemsRef.current.forEach((item, index) => {
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
        setTimeout(() => {
          if (item) {
            item.style.transition = "all 0.5s ease-out";
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }
        }, 500 + index * 100);
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_muznw3m";
    const TEMPLATE_ID = "template_mcystah";
    const PUBLIC_KEY = "nmsyGi9QBi6voU-TO";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully! 🚀");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send message:", error);
          alert("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <section
      className="text-white py-20 px-6 relative overflow-hidden"
      style={{
        background: "#1f242d",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-400 text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
            Let&apos;s Connect
          </button>

          <h2 className="text-5xl font-bold mt-6">
            Get In{" "}
            <span className="text-blue-500 relative inline-block group">
              Touch
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg animate-fadeIn">
            Have a project in mind or want to discuss opportunities? Send me a
            message!
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT CARD */}
          <div
            ref={leftCardRef}
            className="border border-blue-900/40 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:-translate-y-1"
            style={{ background: "#1f242d" }}
          >
            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>

            <p className="text-gray-400 mb-10 leading-relaxed">
              Feel free to reach out through the form or directly via my contact
              details below.
            </p>

            {/* EMAIL */}
            <div
              ref={(el) => (contactItemsRef.current[0] = el)}
              className="flex items-center gap-4 mb-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                <Mail
                  className="text-blue-400 group-hover:text-white transition-colors duration-300"
                  size={24}
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-medium group-hover:text-blue-400 transition-colors duration-300">
                  induruwimansha@gmail.com
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div
              ref={(el) => (contactItemsRef.current[1] = el)}
              className="flex items-center gap-4 mb-10 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                <MapPin
                  className="text-blue-400 group-hover:text-white transition-colors duration-300"
                  size={24}
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="font-medium group-hover:text-blue-400 transition-colors duration-300">
                  Sri Lanka
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <div ref={socialRef} className="border-t border-blue-900/30 pt-8">
              <h4 className="text-2xl font-semibold mb-6">Find me on</h4>

              <div className="flex gap-5">
                <a
                  href="https://github.com/induruwimansha"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full border border-blue-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/induru-ranasinghe/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full border border-blue-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:-rotate-12"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={rightCardRef}
            className="border border-blue-900/40 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            style={{ background: "#1f242d" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block mb-2 font-medium group-hover:text-blue-400 transition-colors duration-300">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border border-blue-900/40 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/60"
                  />
                </div>

                <div className="group">
                  <label className="block mb-2 font-medium group-hover:text-blue-400 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full bg-transparent border border-blue-900/40 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/60"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="group">
                <label className="block mb-2 font-medium group-hover:text-blue-400 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  required
                  className="w-full bg-transparent border border-blue-900/40 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/60"
                />
              </div>

              {/* MESSAGE */}
              <div className="group">
                <label className="block mb-2 font-medium group-hover:text-blue-400 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-transparent border border-blue-900/40 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/60 resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group relative overflow-hidden flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-105 disabled:opacity-50 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Send
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  {loading ? "Sending..." : "Send Message"}
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-300 group-hover:translate-x-0"></span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out both; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out both; }
        .animate-slideInLeft { animation: slideInLeft 0.7s ease-out both; }
        .animate-slideInRight { animation: slideInRight 0.7s ease-out both; }
      `}</style>
    </section>
  );
}