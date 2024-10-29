"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
 const  link="https://notetaker123.vercel.app"
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
  
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href={link} target="_blank" rel="noopener noreferrer" style={{zIndex : 100}}>
        <ProjectCard
          src="/notetaker.png"
          title="AI Note Taking App"
          description="Built with Next.js for a responsive and smooth user experience, this platform features SHADCN and Liveblocks to support real-time, collaborative text editing. The backend, powered by Cloudflare Workers, ensures scalability and seamless processing, while Firebase manages efficient data storage and retrieval. Additionally, OpenAI APIs are integrated to offer AI-driven translation and a chat-to-document feature, making multilingual documentation more efficient and accessible."

        />
        </a>
    
        <a href={link} target="_blank" rel="noopener noreferrer" style={{zIndex : 100}}>
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        />
        </a>


        <a href={link} target="_blank" rel="noopener noreferrer" style={{zIndex : 100}}>
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </a>

        <a href={link} target="_blank" rel="noopener noreferrer" style={{zIndex : 100}}>
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        />
        </a>

        {/* <a href={link} target="_blank" rel="noopener noreferrer" style={{zIndex : 100}}>
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        />
        </a> */}
        
      </div>
    </div>
  );
};

export default Projects;
