import React from "react";
import "./Skills.css";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiFirebase,
    SiJira,
      SiDotnet,
  SiSpringboot,
} from "react-icons/si";

const frontendSkills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    description: "Experienced in ES6+, React, and modern JavaScript.",
    className: "javascript",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "Strongly typed JavaScript for scalable applications.",
    className: "typescript",
  },
  {
    name: "React",
    icon: <SiReact />,
    description: "Building interactive UIs with hooks and components.",
    className: "react",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    description: "Creating semantic and accessible web structures.",
    className: "html",
  },
  {
    name: "CSS3",
    icon: <SiCss />,
    description: "Designing modern and responsive interfaces.",
    className: "css",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "Utility-first CSS framework for rapid development.",
    className: "tailwind",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    description: "Backend development with Express and REST APIs.",
    className: "node",
  },
  {
    name: "Python",
    icon: <SiPython />,
    description: "Automation, scripting and data processing.",
    className: "python",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    description: "NoSQL database design and aggregation.",
    className: "mongodb",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    description: "Relational database management and SQL queries.",
    className: "mysql",
  },
   {
    name: ".NET",
    icon: <SiDotnet />,
    description: "Building scalable web applications and APIs using ASP.NET Core.",
    className: "dotnet",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    description: "Developing enterprise-grade Java applications and RESTful services.",
    className: "springboot",
  },
];

const toolsSkills = [
  {
    name: "Git",
    icon: <SiGit />,
    description: "Version control and collaboration.",
    className: "git",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    description: "Code hosting and project management.",
    className: "github",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    description: "API testing and development.",
    className: "postman",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    description: "Backend services and authentication.",
    className: "firebase",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    description: "UI/UX design and prototyping.",
    className: "figma",
  },
   {
  name: "Jira",
  icon: <SiJira />,
  description: "Project management, issue tracking, and agile workflows.",
  className: "jira",
},
];

const SkillSection = ({ title, skills }) => (
  <>
    <div className="skills-category-heading">
      <h2>{title}</h2>
      <div className="skills-heading-line"></div>
    </div>

    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-icon-wrapper">
            <div className={`skill-icon ${skill.className}`}>
              {skill.icon}
            </div>
          </div>

          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  </>
);

function Skills() {
  return (
    <section className="skills-section" id="skill">
      <div className="skills-container">

        <h1 className="skills-main-title">
          Skills
        </h1>

        <SkillSection
          title="Frontend Development"
          skills={frontendSkills}
        />

        <SkillSection
          title="Backend & Databases"
          skills={backendSkills}
        />

        <SkillSection
          title="Tools & Technologies"
          skills={toolsSkills}
        />

      </div>
    </section>
  );
}

export default Skills;