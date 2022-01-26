import { Link } from "react-scroll";

const Navlinks = () => {
  return (
    <ul className="w-full flex justify-evenly underline-offset-8">
      <li>
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
      <li>
        <Link
          activeClass="underline"
          to="about"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
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
      <li>
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
