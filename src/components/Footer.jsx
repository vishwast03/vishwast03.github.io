import image from "../images/image2.png";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] bg-gray-800 py-10">
      <div className="flex flex-col justify-center items-center">
        <img src={image} className="h-12 rounded-full" />
        <h3 className="text-gray-50 text-2xl font-semibold my-3">
          Vishwas Tyagi
        </h3>
      </div>
      <div className="mt-5  mb-16 text-2xl text-gray-400 flex justify-center">
        <a
          className="mx-5 hover:text-gray-50 transition-colors"
          href="https://github.com/vishwast03"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="mx-5 hover:text-gray-50 transition-colors"
          href="https://codepen.io/vishwast03"
          target="_blank"
        >
          <i className="fab fa-codepen"></i>
        </a>
        <a
          className="mx-5 hover:text-gray-50 transition-colors"
          href="https://twitter.com/VishwasT03"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="mx-5 hover:text-gray-50 transition-colors"
          href="https://www.linkedin.com/in/vishwas-tyagi/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <a href="https://github.com/vishwast03/vishwast03.github.io" target="_blank" className="text-gray-50 text-center">
        <h3 className="my-2">Built by Vishwas Tyagi</h3>
        <h3>
          Made with <i className="fas fa-heart text-[#fe251b] mx-1"></i>
          <i class="devicon-react-original text-[#61DAFB] mx-1"></i>
          <i class="devicon-tailwindcss-plain text-[#06B6D4] mx-1"></i>
        </h3>
      </a>
    </footer>
  );
};

export default Footer;
