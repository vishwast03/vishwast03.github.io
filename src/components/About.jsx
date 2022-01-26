import TechCard from "./TechCard";

const About = () => {
  const technologyStack = [
    { name: "React", icon: "devicon-react-original" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Python", icon: "devicon-python-plain" },
  ];

  return (
    <section className="w-full min-h-screen" id="about">
      <div className="w-3/4 pt-24 mx-auto">
        <h2 className="text-gray-800 text-5xl font-semibold text-center">
          About Me
        </h2>
        <p className="text-gray-600 text-xl text-center my-10">
          I am a full-stack web developer with experience building websites and
          web applications. I specialize in MERN Stack (MongoDB, Express.js,
          React.js, and Node.js) and have experience working with Tailwind CSS
          and Bootstrap.
        </p>
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold text-center my-8">
          Technology Stack
        </h2>
        <div className="w-4/5 mx-auto mb-16 flex flex-wrap justify-center">
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
