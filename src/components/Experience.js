// Experience.jsx
import React, { useEffect, useRef } from "react";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    title: "SOFTWARE ENGINEER – INTERN",
    company: "American & Efird Lanka Ltd — Sri Lanka",
    period: "August 2024 — Present",
    type: "Internship",
    tech: [
      "ERP Systems",
      "JavaScript",
      "SQL",
      "Git",
      "Software Testing",
      "Debugging",
      "System Analysis",
      "Documentation"
    ],
    achievements: [
      "Developed and enhanced ERP system functionalities to address business process requirements",
      "Performed debugging, testing, and troubleshooting to ensure application reliability and performance",
      "Investigated and resolved technical issues reported by users and stakeholders",
      "Assisted in the design, development, and implementation of software solutions",
      "Collaborated with cross-functional teams to improve system efficiency and user experience",
      "Maintained technical documentation and followed software development best practices"
    ],
    stats: [
      { label: "ERP Enhancements", value: "10+" },
      { label: "Issues Resolved", value: "100+" },
      { label: "Projects Supported", value: "10+" }
    ],
    color: "cyan",
  },
  {
    title: "SOFTWARE ENGINEER – INTERN",
    company: "Ceylon Petroleum Corporation (CPC) — Sri Lanka",
    period: "April 2024 — August 2024",
    type: "Internship",
    tech: [
      "React",
      "React Native",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Git",
      "Postman",
      "Documentation"
    ],
    achievements: [
      "Collaborated with the IT development team on enterprise software and digital transformation projects",
      "Contributed to application development, testing, and maintenance activities",
      "Prepared and maintained technical documentation, including system specifications and development processes",
      "Assisted in requirement analysis and software development lifecycle activities",
      "Participated in project planning, team discussions, and knowledge-sharing sessions",
      "Supported the delivery of software solutions aligned with business requirements"
    ],
    stats: [
      { label: "Projects Contributed", value: "5+" },
      { label: "Technical Documents", value: "20+" },
      { label: "Projects Supported", value: "10+" }
    ],
    color: "blue",
  },
];

export default function Experience() {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = "0";
      headerRef.current.style.transform = "translateY(-30px)";
      setTimeout(() => {
        if (headerRef.current) {
          headerRef.current.style.transition = "all 0.6s ease-out";
          headerRef.current.style.opacity = "1";
          headerRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }

    if (timelineRef.current) {
      timelineRef.current.style.opacity = "0";
      setTimeout(() => {
        if (timelineRef.current) {
          timelineRef.current.style.transition = "all 0.8s ease-out";
          timelineRef.current.style.opacity = "1";
        }
      }, 200);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateX(-30px)";
        setTimeout(() => {
          if (card) {
            card.style.transition = "all 0.6s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
          }
        }, 300 + index * 200);
      }
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden py-24 text-white"
      style={{
        background: "#1f242d",
        borderBottom: "2px solid #8bd32c",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Hero Style Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(0,229,245,0.12)" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(155,114,209,0.12)" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "rgba(67,196,199,0.08)",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-20 text-center">
          <span className="rounded-full border border-[#00e5f5]/30 bg-[#00e5f5]/10 px-4 py-1 text-sm text-[#00e5f5] inline-block hover:scale-105 transition-transform duration-300 font-semibold">
            Professional Journey
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight">
            Professional{" "}
            <span className="text-[#00e5f5] relative inline-block group">
              Experience
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00e5f5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h2>

          <p className="mt-4 text-[#f4f4f4] text-lg font-normal opacity-90 animate-fadeIn">
            Building enterprise solutions and contributing to high-impact projects
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative border-l border-[#00e5f5]/20 pl-10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="relative mb-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[50px] top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#00e5f5]/40 bg-[#1f242d] shadow-lg shadow-[#00e5f5]/20 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[#00e5f5]/40">
                <div className="h-3 w-3 rounded-full bg-[#00e5f5] group-hover:animate-pulse" />
              </div>

              {/* Card */}
              <div className="rounded-3xl border border-[#00e5f5]/25 bg-[#252b36]/90 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#00e5f5]/60 hover:shadow-[0_0_40px_rgba(0,229,245,0.1)] hover:-translate-y-1">
                {/* Top */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-[#00e5f5]">
                      {exp.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#f4f4f4]">
                      <span className="flex items-center gap-2 font-medium transition-all duration-300 hover:text-[#00e5f5]">
                        <Briefcase size={15} className="text-[#00e5f5]" />
                        {exp.company}
                      </span>

                      <span className="flex items-center gap-2 font-medium transition-all duration-300 hover:text-[#00e5f5]">
                        <Calendar size={15} className="text-[#00e5f5]" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full border border-[#00e5f5]/30 bg-[#00e5f5]/10 px-4 py-1 text-sm font-semibold text-[#00e5f5] transition-all duration-300 hover:scale-105 hover:bg-[#00e5f5]/20">
                    {exp.type || "Full-time"}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 leading-relaxed text-[#f4f4f4] font-normal text-base transition-all duration-300">
                  Contributed to enterprise-level development workflows, building scalable systems, dashboards, APIs, and automation tools.
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#00e5f5]/20 bg-[#00e5f5]/5 px-3 py-1 text-sm font-medium text-[#00e5f5] transition-all duration-200 hover:border-[#00e5f5]/50 hover:bg-[#00e5f5]/20 hover:scale-105 cursor-default"
                      style={{
                        animation: `fadeInScale 0.3s ease-out ${i * 0.03}s both`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {exp.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#f4f4f4] font-normal transition-all duration-300 hover:translate-x-1"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 text-[#00e5f5] shrink-0 transition-all duration-300 group-hover:scale-110"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Dropdown */}
                <button className="mt-8 flex w-full items-center justify-between rounded-xl border border-[#00e5f5]/20 bg-[#2b313d] px-5 py-3 text-sm font-semibold text-[#00e5f5] transition-all duration-300 hover:border-[#00e5f5]/40 hover:bg-[#00e5f5]/10 hover:scale-[1.02]">
                  <span>Company Projects</span>
                  <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Stats */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {exp.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-[#00e5f5]/20 bg-[#0d1728] p-5 text-center transition-all duration-300 hover:border-[#00e5f5]/40 hover:scale-105 hover:shadow-lg hover:shadow-[#00e5f5]/10"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`
                      }}
                    >
                      <h4 className="text-2xl font-bold text-[#00e5f5] transition-all duration-300 group-hover:scale-110">
                        {stat.value}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-[#f4f4f4]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        .group-hover\\:animate-pulse:hover {
          animation: pulse 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}