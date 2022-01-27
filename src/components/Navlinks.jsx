import { Link } from "react-scroll";

const Navlinks = (props) => {
  return (
    <ul
      className={`w-fit text-emerald-500 text-center my-5 mx-auto flex flex-col underline-offset-8 lg:flex-row lg:my-0 lg:mx-10 ${
        props.navFixed ? "lg:text-emerald-500" : "lg:text-gray-50"
      }`}
    >
      <li className="my-3 lg:my-0 lg:mx-7 xl:mx-12">
        <Link
          activeClass="underline"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li className="my-3 lg:my-0 lg:mx-7 xl:mx-12">
        <Link
          activeClass="underline"
          to="about"
          spy={true}
          smooth={true}
          offset={-0}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          About
        </Link>
      </li>
      <li className="my-3 lg:my-0 lg:mx-7 xl:mx-12">
        <Link
          activeClass="underline"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          Portfolio
        </Link>
      </li>
      <li className="my-3 lg:my-0 lg:mx-7 xl:mx-12">
        <Link
          activeClass="underline"
          to="contact"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
