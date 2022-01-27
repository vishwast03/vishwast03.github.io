const ProjectCard = (props) => {
  const project = props.project;
  const tags = project.tags;

  return (
    <div className="w-72 my-6 mx-auto rounded-md bg-gray-50 shadow-lg sm:w-80 sm:my-8 lg:my-10">
      <img
        className="rounded-t-md border-b"
        src={project.image}
        alt="project screenshot"
      />
      <div className="px-3 py-3 md:px-5">
        <div className="flex">
          {tags &&
            tags.map((tag) => {
              return (
                <img
                  key={tag.name}
                  className="mx-1"
                  src={`https://img.shields.io/badge/${tag.name}-informational?style=flat&logo=${tag.logo}&logoColor=white&color=10b981`}
                  alt={tag.name}
                />
              );
            })}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold py-2 md:text-2xl">
          {project.title}
        </h3>
        <p className="text-lg text-gray-600 lg:text-xl">{project.subtitle}</p>
        <div className="w-1/2 text-2xl text-gray-600 mx-auto my-2 flex justify-evenly md:text-3xl md:my-4">
          {project.preview && (
            <a href={project.preview} target="_blank">
              <i className="fas fa-external-link-alt hover:text-emerald-500 transition-colors"></i>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank">
              <i className="devicon-github-original hover:text-emerald-500 transition-colors"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
