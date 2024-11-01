import React from "react";
import checkMarkIcon from "../assets/svg/checkmark-dark.svg";
import SkillList from "./SkillList";
import "../styles/Skill.css";

function Skills() {

  return (
    <section
      id="skills"
      className="container  flex flex-col text-center gap-10 "
    >
      <h1
        className="lg:text-4xl md:text-3xl text-2xl font-black font-rubik uppercase sectionTitle"
        data-aos="zoom-in"
      >
        Skills
      </h1>
      <div className="skillList " data-aos="fade-up">
        <span className="xl:flex xl:flex-row xl:gap-16 md:flex-row md:gap-10 gap-12 skillList">
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JS" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
          <SkillList src={checkMarkIcon} skill="Tailwindcss" />
        </span>
        <hr />
        <span className="xl:flex  xl:flex-row xl:gap-16 md:flex md:flex-row md:gap-10 gap-8 skillList">
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="Node" />
          <SkillList src={checkMarkIcon} skill="Express" />
          <SkillList src={checkMarkIcon} skill="MongoDB" />
        </span>
        <hr />
        <span className="xl:flex  xl:flex-row xl:gap-16 gap-12 md:flex-row md:gap-10 skillList">
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Github" />
        </span>
      </div>
    </section>
  );
}

export default Skills;
