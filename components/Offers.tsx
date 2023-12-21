// components/Offers.tsx
import React from "react";
import InternshipCard from "./icard";

const internshipData = [
  {
    title: "PMS Ahmedabad Airport",
    responsibilities: [
      "Significantly enhanced and added functionality to the existing Parking Management System (PMS) at Ahmedabad Adani Airport.",
      "Assisted in testing and debugging to ensure stability and reliability.",
      "Identified and resolved connection issues between the PMS system and MySQL database.",
      "Integrated server crash automatic Email system.",
      "Implemented dynamic chart on a daily collection basis.",
      "Automated SMS by every schedule for collection details.",
      "Developed operators' short voucher module for PMS.",
    ],
  },
  {
    title: "PMS Ambaji Temple",
    responsibilities: [
      "Successfully implemented functionality to manage VIP visitors.",
      "Created a VIP module where VIPs enrolled by RFID through the PMS Ambaji web.",
      "Assigned RFID and handled all verification and VIP registrations.",
      "Developed Live VIP count Dashboard in PMS Ambaji web.",
    ],
  },
  {
    title: "Signal Light",
    responsibilities: [
      "Contributed to the development of the Signal Light system from scratch.",
      "Collaborated with a team of skilled developers to design and implement an intelligent traffic control system.",
      "Designed MySQL database for the project with security based on JWT token.",
      "Developed microservices for the Signal Light system.",
      "Implemented an intelligent traffic control system.",
    ],
  },
];

const Offers: React.FC = () => {
  return (
    <div className="bg-[#0F1113] text-white py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white mb-12">
          Experience
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {internshipData.map((internship, index) => (
            <InternshipCard key={index} title={internship.title} responsibilities={internship.responsibilities} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
