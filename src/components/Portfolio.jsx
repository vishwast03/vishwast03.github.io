import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = (props) => {
  const sliderRef = useRef(null);

  const projects = props.projects;

  const settings = props.sliderSettings;

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="w-full bg-gray-100 pb-10 md:pb-14" id="portfolio">
      <div className="w-[90%] mx-auto pt-16 flex justify-between items-center sm:pt-20 lg:pt-24 2xl:w-[80rem]">
        <div>
          <p className="text-emerald-500 text-xl md:text-2xl lg:text-3xl">
            Portfolio
          </p>
          <h2 className="text-gray-800 text-3xl font-semibold my-2 md:text-4xl lg:text-5xl lg:my-4">
            Latest Projects
          </h2>
        </div>
        <a
          href={props.github}
          target="_blank"
          className="bg-gray-100 text-emerald-500 text-lg font-medium rounded-md px-2 py-1 border border-emerald-500 hover:bg-emerald-500 hover:text-gray-50 transition-colors sm:font-semibold sm:px-5 sm:py-2 sm:border-2 md:px-10 md:py-3"
        >
          All Work
        </a>
      </div>
      <div className="w-[90%] mx-auto 2xl:w-[70rem]" id="projects">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </Slider>
      </div>
      <div className="w-24 mx-auto text-2xl text-gray-600 flex justify-between md:text-3xl lg:text-4xl">
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
