// Projects.jsx

import { useState, useRef } from "react";
import {
  Code2,
  ExternalLink,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = [
  "All",
  "Mobile App",
  "Mini Projects",
  "Full Stack Projects",
  "Research Projects",
];

const projects = [
  {
    title: "FitPlus System - Fitness Management Platform",
    category: "Full Stack Projects",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400",
    description: "Full-stack fitness management platform built with Spring Boot and React to help users track, manage, and improve their health and fitness journey. Features include personal profiles, fitness goal setting, daily activity tracking, workout plans, and progress monitoring.",
    tech: ["Spring Boot", "Java", "React", "REST APIs", "Tailwind CSS", "MySQL"],
    github: "https://github.com/induruwimansha/fitness-management-system",
    live: "#",
    features: [
      "Personal profile creation and management",
      "Fitness goal setting and tracking",
      "Daily activity monitoring (workouts, calories burned)",
      "Trainer/admin dashboard for user management",
      "Customized workout plan assignment",
      "Progress tracking and performance analytics"
    ]
  },
  {
    title: "Park Management System",
    category: "Full Stack Projects",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400",
    description: "A full-stack park management system developed to manage park operations efficiently, including visitor management, ticket booking, facility monitoring, and admin controls. The system provides a user-friendly interface with secure authentication and real-time data management.",
    tech: ["Spring Boot", "React", "MySQL", "Tailwind CSS", "JWT Authentication"],
    github: "https://github.com/induruwimansha/Park-management-system",
    live: "#",
    features: [
      "Visitor management and tracking",
      "Ticket booking system",
      "Facility monitoring",
      "Admin dashboard with controls",
      "Secure authentication system",
      "Real-time data management"
    ]
  },
  {
    title: "Food Plaga - Food Management System",
    category: "Mini Projects",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400",
    description: "Complete food ordering and management system with user authentication, shopping cart, order tracking, payment processing, and admin dashboard for managing food items, orders, and revenue.",
    tech: ["PHP", "MySQL", "Firebase", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/induruwimansha/foodPlaga-main",
    live: "#",
    features: [
      "User authentication (login/signup)",
      "Food listing and search",
      "Shopping cart functionality",
      "Order management and tracking",
      "Payment processing",
      "Admin dashboard for food items",
      "Revenue tracking and reporting"
    ]
  },
  {
    title: "TravelExpo - Travel Booking System",
    category: "Full Stack Projects",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400",
    description: "A full-stack travel booking system designed to simplify trip planning and reservation management. The platform allows users to explore destinations, book travel packages, manage reservations, and securely handle payments through an interactive and user-friendly interface.",
    tech: ["PHP", "MySQL", "Firebase", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/induruwimansha/TravelExpo",
    live: "#",
    features: [
      "User authentication (login/signup)",
      "Travel package browsing and search",
      "Online booking and reservation system",
      "Destination and tour management",
      "Payment processing integration",
      "Admin dashboard for package management",
      "Booking history and reporting"
    ]
  },
  {
    title: "Medical Appointment System",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=400",
    description: "A mobile-based medical appointment management system developed to streamline healthcare services by allowing patients to book appointments, manage schedules, and connect with doctors efficiently. The system provides secure authentication, appointment tracking, and an easy-to-use interface for both patients and administrators.",
    tech: ["Android Studio", "Firebase", "Kotlin"],
    github: "https://github.com/induruwimansha/Medical-Appointment-System",
    live: "#",
    features: [
      "User authentication (login/signup)",
      "Doctor and patient management",
      "Appointment booking and scheduling",
      "Appointment history tracking",
      "Admin dashboard for managing appointments",
      "Real-time notifications and updates",
      "Secure database integration"
    ]
  },
  {
    title: "Restaurant Management System",
    category: "Full Stack Projects",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=400",
    description: "A full-stack restaurant management system designed to handle table reservations, menu management, online ordering, billing, and staff operations. The system helps restaurants streamline daily operations and improve customer experience through a digital platform.",
    tech: ["React", "MongoDB", "HTML", "CSS", "Node.js", "Express"],
    github: "https://github.com/induruwimansha/Resturant-management-system",
    live: "#",
    features: [
      "User authentication (login/signup)",
      "Table reservation system",
      "Digital menu management",
      "Online ordering system",
      "Order tracking and status updates",
      "Admin dashboard for restaurant management",
      "Billing and receipt generation"
    ]
  },
  {
    title: "AI-Powered Crop Monitoring and Yield Prediction in Hydroponic Systems",
    category: "Research Projects",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=400",
    description: "A research-driven intelligent hydroponic farming system that leverages Artificial Intelligence, Machine Learning, and IoT technologies to monitor crop health, predict yields, and optimize growing conditions. The system integrates real-time environmental monitoring, disease detection, nutrient management, and predictive analytics to improve agricultural productivity and sustainability.",
    tech: [
      "Python",
      "Flutter",
      "Firebase",
      "Machine Learning",
      "IoT",
      "ESP32",
      "TensorFlow",
      "Random Forest",
      "LSTM"
    ],
    github: "https://github.com/induruwimansha/Final-year-project-hydronet-main",
    live: "#",
    features: [
      "Real-time monitoring of temperature, humidity, pH, and EC levels",
      "AI-based crop yield prediction using machine learning models",
      "Plant disease detection through image processing",
      "Nutrient imbalance identification and recommendation system",
      "Environmental control and monitoring dashboard",
      "IoT integration using ESP32 sensors",
      "Mobile application for remote farm monitoring",
      "Data analytics and seasonal trend forecasting"
    ]
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden py-24 text-white"
      style={{
        background: "#1f242d",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(0,229,245,0.12)" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(155,114,209,0.12)" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-400 text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300">
            My Work
          </button>

          <h2 className="mt-5 text-5xl font-bold">
            Featured{" "}
            <span className="text-blue-500 relative inline-block group">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            A showcase of my technical expertise across various domains and technologies
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16">
          <div className="relative flex justify-center items-center">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#1f242d] border border-blue-500/30 rounded-full p-2 text-blue-400 hover:bg-blue-600/20 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar justify-start md:justify-center px-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActive(item)}
                  className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    active === item
                      ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105"
                      : "border-blue-900/40 bg-[#1f242d] text-gray-300 hover:border-blue-500/60 hover:bg-blue-600/10 hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#1f242d] border border-blue-500/30 rounded-full p-2 text-blue-400 hover:bg-blue-600/20 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-blue-900/40 bg-[#1f242d] p-2 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f242d] via-black/40 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-blue-500/40 bg-[#1f242d]/80 px-4 py-1 text-sm text-blue-400 backdrop-blur-md z-10">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold leading-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-400">
                  {project.description.length > 120 
                    ? `${project.description.substring(0, 120)}...` 
                    : project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-blue-900/40 bg-blue-900/20 px-3 py-1 text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-900/40 bg-[#1f242d] px-4 py-2.5 text-sm text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    <Code2 size={16} />
                    Code
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-500 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition hover:bg-blue-700 hover:scale-105 cursor-pointer"
                  >
                    <Eye size={16} />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
           className="relative max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-blue-500/50 bg-[#1f242d] p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            {/* Close Button */}
          <button
  type="button"
  onClick={() => setSelectedProject(null)}
  className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-950/40 border border-blue-500/30 text-xl text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200"
>
  ×
</button>

            <div className="space-y-8">
              <div>
                <span className="rounded-full border border-blue-500/40 bg-blue-900/20 px-4 py-1 text-sm text-blue-400">
                  {selectedProject.category}
                </span>

                <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight pr-10">
                  {selectedProject.title}
                </h2>
              </div>

              <div className="h-1 w-20 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Project Overview</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.features && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-blue-900/40 bg-blue-900/20 px-4 py-2 text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-blue-900/40 bg-[#1f242d] px-6 py-3 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
                >
                  <Code2 size={18} />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}