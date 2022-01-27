import image from "../images/image2.png";

const Footer = (props) => {
  const links = props.profileLinks;

  return (
    <footer className="bg-gray-800 py-10">
      <div className="flex flex-col justify-center items-center">
        <img src={image} className="h-10 rounded-full md:h-12" />
        <h3 className="text-gray-50 text-lg font-semibold my-2 md:text-2xl md:my-3">
          Vishwas Tyagi
        </h3>
      </div>
      <div className="mt-3 mb-12 text-lg text-gray-400 flex justify-center md:text-2xl md:mt-5 md:mb-16">
        <a
          className="mx-3 hover:text-gray-50 transition-colors sm:mx-5"
          href={links.github}
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="mx-3 hover:text-gray-50 transition-colors sm:mx-5"
          href={links.codepen}
          target="_blank"
        >
          <i className="fab fa-codepen"></i>
        </a>
        <a
          className="mx-3 hover:text-gray-50 transition-colors sm:mx-5"
          href={links.twitter}
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="mx-3 hover:text-gray-50 transition-colors sm:mx-5"
          href={links.linkedin}
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <a href={links.repo} target="_blank" className="text-gray-50 text-center">
        <h3 className="my-1 md:my-2">Built by Vishwas Tyagi</h3>
        <h3>
          Made with <i className="fas fa-heart text-[#fe251b] mx-1"></i>
          <i className="devicon-react-original text-[#61DAFB] mx-1"></i>
          <i className="devicon-tailwindcss-plain text-[#06B6D4] mx-1"></i>
        </h3>
      </a>
    </footer>
  );
};

export default Footer;
