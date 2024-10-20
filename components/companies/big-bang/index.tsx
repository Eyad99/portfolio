import React from "react";
import ProjectCard from "../../reusable-components/project-card";
import { Project } from "@/core";
import dticLogo from "@/assets/img/dtic.png";
import Paginate from "@/components/reusable-components/paginate";

const BigBang = () => {
  const projects: Project[] = [
    {
      logo: dticLogo.src,
      title: "Dtic",
      url: "https://dtic.co/",
    },
  ];
  return (
    <section
      className={`flex flex-col justify-center m-auto sm:w-[75%] w-full p-6 gap-10`}
      aria-hidden={true}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold">
          <span className="text-4xl">/</span>
          <span className="text-[#474747] text-3xl">Work.</span>
        </h1>
        <p className="text-xl font-bold text-center ">
          A collection of projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Paginate text="Next Company" link="/company/go-dev" />
    </section>
  );
};

export default BigBang;
