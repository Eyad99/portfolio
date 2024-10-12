"use client";

import { useParams } from "next/navigation";
import React from "react";

const ProjectName = () => {
  const { projectName } = useParams();

  return <div> {projectName}</div>;
};

export default ProjectName;
