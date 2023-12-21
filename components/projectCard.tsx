// components/projectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  summary: string;
  skillsUsed: string;
  keyOutcomes: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  skillsUsed,
  keyOutcomes,
}) => {
  return (
    <div className="border border-designColor p-6 m-4 max-w-md mx-auto text-center transition-transform transform hover:scale-105 shadow-designColor">
      <h3 className="text-xl font-semibold mb-4 text-designColor">{title}</h3>
      <p className="text-sm">{summary}</p>
      <p className="text-sm mt-4">
        <span className="text-designColor font-semibold">Skills Used:</span> {skillsUsed}
      </p>
      <p className="text-sm mt-2">
        <span className="text-designColor font-semibold">Key Outcomes:</span> {keyOutcomes}
      </p>
    </div>
  );
};

export default ProjectCard;
