"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const link = "https://notetaker123.vercel.app";
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[10]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full grid gap-10 px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <a href={link} target="_blank" rel="noopener noreferrer" >
          <ProjectCard
            src="/notetaker.jpg"
            title="AI Note Taking App"
            description="Built with Next.js, SHADCN, and Liveblocks for responsive, collaborative editing, this platform ensures seamless processing via Cloudflare Workers and efficient data handling with Firebase. Integrated OpenAI APIs provide AI-driven translation and chat-to-document features for smooth, multilingual documentation."
          />
        </a>

        <a href={link} target="_blank" rel="noopener noreferrer" >
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </a>

        <a href={link} target="_blank" rel="noopener noreferrer" >
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </a>

        <a href={link} target="_blank" rel="noopener noreferrer" >
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
