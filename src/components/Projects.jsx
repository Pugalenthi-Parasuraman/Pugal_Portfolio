import React from "react";
import kfc from "../assets/images/KFC.png";
import chat from "../assets/images/Chat.png";
import gift from "../assets/images/Gift Shop.png";
import ProjectsCard from "./ProjectsCard";
import "../styles/Projects.css";

function Projects() {
  return (
    <section
      id="projects"
      className="container flex flex-col text-center gap-10"
    >
      <h1
        className="lg:text-4xl md:text-3xl text-2xl font-black font-rubik uppercase sectionTitle"
        data-aos="zoom-in"
      >
        Projects
      </h1>
      <div className="projectContainer flex flex-col md:flex-row md:flex-wrap md:justify-center md:px-[30px] items-center md:gap-12 gap-10 xl:gap-16">
        <div className="w-full md:w-auto flex justify-center">
          <ProjectsCard
            src={chat}
            link="https://chat-you-bay.vercel.app/"
            h3="Chat-you"
            p="MERN Stack Chat App"
          />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <ProjectsCard
            src={gift}
            link="http://98.130.55.255:8000/"
            h3="Gift Shop"
            p="E-commerce Gift Shop"
          />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <ProjectsCard
            src={kfc}
            link="https://pugalenthi-parasuraman.github.io/KFClone/"
            h3="KFClone"
            p="Food Delivery Web-App"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
