import React from "react";
import heroImg from "../assets/images/hero-img.png";
import sun from "../assets/svg/sun.svg";
import moon from "../assets/svg/moon.svg"
import linkedinLight from "../assets/svg/linkedin-light.svg";
import linkedinDark from "../assets/svg/linkedin-dark.svg";
import githubLight from "../assets/svg/github-light.svg";
import githubDark from "../assets/svg/github-dark.svg";
import twitterLight from "../assets/svg/twitter-light.svg";
import twitterDark from "../assets/svg/twitter-dark.svg";
import resume from "../assets/images/resume.pdf";
import { useTheme } from "./ThemeContext";
import "../styles/Hero.css";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun: moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark ;
  

  return (
    <section
      id="hero"
      className="container lg:flex-row-reverse lg:items-center flex flex-col align items-center justify-center gap-20 text-center xl:h-dvh min-h-[500px] mx-auto"
    >
      <div className="colorModeContainer relative">
        <img
          className="hero lg:max-w-[340px] lg:w-[320px] w-60 "
          src={heroImg}
          alt="Profile picture of Pugal"
        />
        <img
          className="colorMode absolute  right-0 w-[25px] cursor-pointer "
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="info flex flex-col gap-4 ">
        <h1 className="lg:text-4xl flex flex-col gap-20 md:text-3xl text-2xl font-black font-rubik uppercase sectionTitle info">
          Pugalenthi
        </h1>
        <h2 className="sm:text-[20px] md:text-[25px] text-xl font-bold uppercase">
          Web Developer
        </h2>
        <span className="flex justify-center gap-5 social">
          <a href="">
            <img src={linkedinIcon} alt="Linkedin icon" className="w-12" />
          </a>
          <a href="">
            <img src={githubIcon} alt="Github icon" className="w-12" />
          </a>
          <a href="">
            <img src={twitterIcon} alt="Twitter icon" className="w-12" />
          </a>
        </span>
        <p className="font-medium text-center max-w-[24ch] description">
          with a passion for developing modern React web app for commercial
          purpose
        </p>
        <a href={resume} download>
          <button className="cv border-none rounded-2xl dark:bg-blue-500 w-[126px] h-[45px] text-xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-shadow ease-in-out transform hover:scale-105 active:translate-y-[2px] active:drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
