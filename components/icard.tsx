// components/iCard.tsx
import React from "react";

interface InternshipCardProps {
  title: string;
  duration: string;
  responsibilities: string[];
  projectDetails: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  duration,
  responsibilities,
  projectDetails,
}) => {
  return (
    <div className="border border-designColor p-4 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2 text-designColor">{title}</h3>
      <p className="text-sm">{duration}</p>
      <p className="text-sm mt-2">{projectDetails}</p>
      <ul className="list-disc pl-6 mt-2">
        {responsibilities.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipCard;
