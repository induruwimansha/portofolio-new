import React from "react";
import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";

const Certifications = () => {
 const certificates = [
  {
    icon: <FaBrain />,
    title: "Certificate in Python for Beginners",
    company: "University of Moratuwa (CODL)",
    description:
      "Successfully completed the Python for Beginners certification course, gaining foundational knowledge in Python programming, variables, data types, loops, functions, and problem-solving concepts.",
  },
  // {
  //   icon: <FaDatabase />,
  //   title: "Certificate in Python Programming",
  //   company: "University of Moratuwa (CODL)",
  //   description:
  //     "Developed skills in Python fundamentals, object-oriented programming, problem-solving, and application development concepts.",
  // },
  // {
  //   icon: <FaCode />,
  //   title: "Certificate in Web Development",
  //   company: "University of Moratuwa (CODL)",
  //   description:
  //     "Gained practical knowledge in frontend and backend web development including HTML, CSS, JavaScript, and modern web technologies.",
  // },
  // {
  //   icon: <FaDatabase />,
  //   title: "Certificate in SQL (Advanced)",
  //   company: "HackerRank",
  //   description:
  //     "Demonstrated advanced SQL skills including joins, subqueries, database management, data manipulation, and analytical problem-solving.",
  // },
  {
icon: <FaServer />,
title: "AWS Academy Cloud Foundations",
company: "AWS Academy",
description:
"Completed Cloud Foundations training covering AWS services, cloud concepts, security, pricing models, and architecture principles.",
},

  // New Certificates
  {
    icon: <FaBrain />,
    title: "Understanding Prompt Engineering",
    company: "DataCamp",
    description:
      "Learned the fundamentals of prompt engineering, AI communication techniques, prompt design strategies, and best practices for working with generative AI models.",
  },
  {
    icon: <FaServer />,
    title: "Power Automate and Dataverse for Teams",
    company: "Microsoft",
    description:
      "Gained hands-on experience in workflow automation, process optimization, and building business solutions using Microsoft Power Automate and Dataverse for Teams.",
  },
  {
    icon: <FaDatabase />,
    title: "Microsoft Dataverse for Teams",
    company: "Microsoft",
    description:
      "Learned to create, manage, and integrate data-driven applications using Microsoft Dataverse for Teams within the Microsoft ecosystem.",
  },
  {
    icon: <FaCode />,
    title: "Build Applications with Microsoft Power Apps",
    company: "Microsoft",
    description:
      "Developed skills in building low-code business applications, creating custom solutions, and integrating data sources using Microsoft Power Apps.",
  },
];
  return (
    <section
      id="certifications"
      className="w-full min-h-screen py-20 px-7 text-white"
      style={{ background: "#1f242d" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Title */}
        <h1 className="text-center text-6xl font-bold text-cyan-400 mb-16">
          Certifications
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {certificates.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#1f242d]
                border-[3px]
                border-cyan-400
                rounded-[25px]
                p-8
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-[0_0_15px_rgba(0,229,245,.4),0_0_40px_rgba(0,229,245,.15)]
              "
            >
              {/* Icon */}
              <div
                className="
                  w-28 h-28
                  rounded-full
                  bg-cyan-400/10
                  flex
                  items-center
                  justify-center
                  mb-6
                  mx-auto
                "
              >
                <div className="text-cyan-400 text-5xl">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-cyan-400 text-center mb-3">
                {item.title}
              </h3>

              {/* Company */}
              <p className="text-center text-lg text-white mb-5">
                {item.company}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-center leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-16">
          <button
            className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-cyan-400
              text-[#1f242d]
              font-bold
              text-lg
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_15px_rgba(0,229,245,.7)]
            "
          >
            Explore My Technical Skills
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certifications;