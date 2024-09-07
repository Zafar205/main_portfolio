"use client";

import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    window.open(link, "_blank");
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 hover:scale-105">
      <img
        src={src}
        alt={title}
        className="w-full object-contain"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <button
          onClick={handleButtonClick}
          className="cursor-pointer mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors z-30 relative"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
