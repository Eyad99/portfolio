"use client";

import StreetLeague from "@/components/companies/go-dev/street-league";
import StreetLeagueDashboard from "@/components/companies/go-dev/street-league-dashboard";
import VoiceAnalysis from "@/components/companies/go-dev/voice-analysis";
import Footer from "@/components/widgets/footer";
import { useParams } from "next/navigation";
import React from "react";

const ProjectName = () => {
  const { projectName } = useParams();

  const renderProjectComponent = (copanyName: string | string[]) => {
    switch (copanyName) {
      case "street-league":
        return <StreetLeague />;
      case "street-league-dashboard":
        return <StreetLeagueDashboard />;
      case "audio-analysis":
        return <VoiceAnalysis />;

      default:
        break;
    }
  };

  return (
    <div className="mt-28">
      {renderProjectComponent(projectName)}
      <Footer />
    </div>
  );
};

export default ProjectName;
