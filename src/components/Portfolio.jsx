import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const sliderRef = useRef(null);

  const projects = [
    {
      image: "https://i.imgur.com/JmXE90V.png",
      title: "Chat Soft",
      subtitle: "Real-time multi-client chat application",
      tags: [
        { name: "Socket.io", logo: "socket.io" },
        { name: "Express", logo: "express" },
        { name: "Node.js", logo: "node.js" },
      ],
      preview: "",
      github: "https://github.com/vishwast03/Chat-Soft",
    },
    {
      image: "https://i.imgur.com/6knYfcD.png",
      title: "CodeSet",
      subtitle: "Online Code Editor for HTML, CSS and JavaScript",
      tags: [
        { name: "React", logo: "react" },
        { name: "Tailwind CSS", logo: "tailwindcss" },
      ],
      preview: "https://vishwast03.github.io/CodeSet-v2/",
      github: "https://github.com/vishwast03/CodeSet-v2",
    },
    {
      image: "https://i.imgur.com/Bidx0aN.png",
      title: "Markdown Previewer",
      subtitle: "Simple Github flavored markdown previewer",
      tags: [
        { name: "React", logo: "react" },
        { name: "Tailwind CSS", logo: "tailwindcss" },
      ],
      preview: "https://vishwast03.github.io/Markdown-Previewer/",
      github: "https://github.com/vishwast03/Markdown-Previewer",
    },
    {
      image: "https://i.imgur.com/52YYC3f.png",
      title: "Notes Keeper",
      subtitle: "Chrome extension for keeping notes",
      tags: [
        { name: "HTML", logo: "html5" },
        { name: "CSS", logo: "css3" },
        { name: "JavaScript", logo: "javascript" },
      ],
      preview: "",
      github: "https://github.com/vishwast03/Notes-Keeper",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="w-full min-h-screen bg-gray-100 pb-14" id="portfolio">
      <div className="w-[90%] mx-auto pt-24 flex justify-between items-center">
        <div>
          <p className="text-emerald-500 text-3xl">Portfolio</p>
          <h2 className="text-gray-800 text-5xl font-semibold my-4">
            Latest Projects
          </h2>
        </div>
        <a
          href="https://github.com/vishwast03"
          target="_blank"
          className="bg-gray-100 text-emerald-500 text-lg font-semibold rounded-md px-10 py-3 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-gray-50 transition-colors"
        >
          All Work
        </a>
      </div>
      <div className="w-[90%] mx-auto" id="projects">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </Slider>
      </div>
      <div className="w-24 mx-auto text-4xl text-gray-600 flex justify-between">
        <button onClick={handlePrev}>
          <i className="fas fa-chevron-left hover:text-emerald-500 transition-colors"></i>
        </button>
        <button onClick={handleNext}>
          <i className="fas fa-chevron-right hover:text-emerald-500 transition-colors"></i>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
