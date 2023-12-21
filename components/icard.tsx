// components/iCard.tsx
import React from "react";

interface InternshipCardProps {
  title: string;
  responsibilities: string[];
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  responsibilities,
    }) => {
  return (
    <div className="border border-designColor p-4 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2 text-designColor">{title}</h3>
      <ul className="list-disc pl-6 mt-2">
        {responsibilities.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipCard;
