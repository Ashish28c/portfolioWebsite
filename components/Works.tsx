// components/Works.tsx
import React from "react";
import ProjectCard from "./projectCard";

const projectData = [
  {
    title: "Adapto DB",
    summary: "Adapto DB simplifies database management, offering users an easy interface to interact with and manage databases without the complexities of handling underlying infrastructure.",
    skillsUsed: "Java, SpringBoot, Hibernate, SpringSecurity, Docker, MySQL, MySQL Server, Rest APIs",
    keyOutcomes: "https://github.com/Ashish28c/Cloud_DBAS.git",
  },
  {
    title: "Student Management System",
    summary: "Developed Student Management System using Java Spring Boot backend and MySQL Database.",
    skillsUsed: "Java, SpringBoot, MySQL, Thymeleaf, HTML, CSS, JavaScript",
    keyOutcomes: "Implemented high-chart attendance dashboard, auto-emails, and optimized database procedures. Utilized Thymeleaf for dynamic data retrieval, enhancing user experience.",
  },
];

const Works: React.FC = () => {
  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Academic Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 px-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
