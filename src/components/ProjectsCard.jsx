import React from "react";

function ProjectsCard({ src, link, h3, p }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col  align items-center gap-1 KFC w-fit transition transform ease-in-out hover:scale-105 hover:transform"
    >
      <img
        src={src}
        alt={`${h3} logo`}
        className="w-52 KFC rounded-[20px]"
        data-aos="flip-left"
      />
      <span data-aos="zoom-out">
        <h3>{h3}</h3>
        <p className="font-medium text-lg max-w-[24ch]">{p}</p>
      </span>
    </a>
  );
}

export default ProjectsCard;
