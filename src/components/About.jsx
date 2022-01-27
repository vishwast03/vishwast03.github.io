import TechCard from "./TechCard";

const About = (props) => {
  const technologyStack = props.techStack;

  return (
    <section className="w-full" id="about">
      <div className="w-[90%] pt-20 mx-auto lg:w-3/4 md:pt-24">
        <h2 className="text-gray-800 text-3xl font-semibold text-center md:text-4xl lg:text-5xl">
          About Me
        </h2>
        <p className="text-gray-600 text-lg text-center my-6 md:text-xl lg:my-10">
          I am a full-stack web developer with experience building websites and
          web applications. I specialize in MERN Stack (MongoDB, Express.js,
          React.js, and Node.js) and have experience working with Tailwind CSS
          and Bootstrap.
        </p>
      </div>
      <div>
        <h2 className="text-gray-800 text-2xl font-semibold text-center my-6 md:text-3xl lg:my-8">
          Technology Stack
        </h2>
        <div className="w-[90%] mx-auto mb-16 flex flex-wrap justify-center lg:w-4/5">
          {technologyStack.map((technology) => {
            return (
              <TechCard
                key={technology.name}
                name={technology.name}
                icon={technology.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
