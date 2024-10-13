import React from "react";
import ProjectCard from "../../reusable-components/project-card";
import { Project } from "@/core";
import rushLogo from "@/assets/img/rush.png";

const Cubeta = () => {
  const projects: Project[] = [
    {
      logo: rushLogo.src,
      title: "Rush",
      url: "https://lb-merchant.redrush.co/",
    },
    {
      logo: rushLogo.src,
      title: "Batna",
      url: "https://dtic.co/",
    },
  ];
  return (
    <section
      className={`flex flex-col justify-center m-auto items-center sm:w-[75%] w-full p-6 mb-10`}
      aria-hidden={true}
    >
      <h1 className="text-2xl font-bold text-center mb-10">
        Our Project Sentence
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Cubeta;
