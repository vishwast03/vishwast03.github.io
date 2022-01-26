import { useEffect, useState } from "react";
import icon from "../images/icon.png";
import { Link } from "react-scroll";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollHeight = window.scrollY;
      const navHeight = document
        .getElementById("navbar")
        .getBoundingClientRect().height;
      if (scrollHeight > navHeight) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    });
  }, []);

  return (
    <nav
      className={`w-full h-fit flex justify-between items-center fixed z-10 transition-all ${
        navFixed ? "bg-gray-50 py-2 shadow" : "pt-8"
      }`}
      id="navbar"
    >
      <div className="mx-14" id="logo">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img className="h-14 hover:opacity-90" src={icon} alt="icon" />
        </Link>
      </div>
      <div
        className={`w-2/5 text-lg font-semibold font-sans ${
          navFixed ? "text-emerald-500" : "text-gray-50"
        }`}
        id="nav-links"
      >
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
