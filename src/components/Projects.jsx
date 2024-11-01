import React from "react";
import kfc from "../assets/images/KFC.png";
import mehndi from "../assets/images/Mehndi.png";
import fruit from "../assets/images/Fruit Shop.png";
import ProjectsCard from "./ProjectsCard";
import "../styles/Projects.css";


function Projects() {

  return (
    <section
      id="projects"
      className="container  flex flex-col text-center gap-10 "
    >
      <h1
        className="lg:text-4xl md:text-3xl text-2xl font-black font-rubik uppercase sectionTitle "
        data-aos="zoom-in"
      >
        Projects
      </h1>
      <div className="projectContainer md:flex-row md:flex-wrap md:justify-evenly md:px-[30px] flex flex-col align items-center md:gap-20 gap-10 xl:gap-30 justify-center">
        <ProjectsCard
          src={kfc}
          link=""
          h3="KFClone"
          p="Food Delivery Web-App"
        />
        <ProjectsCard
          src={mehndi}
          link=""
          h3="Henna Haven"
          p="Mehndi Web-App"
        />
        <ProjectsCard
          src={fruit}
          link=""
          h3="Fruit Shop"
          p="Online Fruit Web-App"
        />
      </div>
    </section>
  );
}

export default Projects;
