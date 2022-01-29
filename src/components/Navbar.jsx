import { useEffect, useState, useRef } from "react";
import icon from "../images/icon.png";
import { Link } from "react-scroll";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const navRef = useRef(null);

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

    document.addEventListener("click", (e) => {
      if (e.target.id === "show-nav") {
        navRef.current.classList.toggle("hidden");
      } else {
        navRef.current.classList.add("hidden");
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
      <div className="mx-6 sm:mx-10 xl:mx-14" id="logo">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img
            className="h-10 hover:opacity-90 sm:h-14"
            src={icon}
            alt="icon"
          />
        </Link>
      </div>
      <div
        className="w-fit text-lg font-semibold font-sans relative"
        id="nav-links"
      >
        <button
          className={`text-2xl text-emerald-500 mx-6 sm:text-3xl lg:hidden ${
            navFixed ? "sm:text-emerald-500" : " sm:text-gray-50"
          }`}
        >
          <i id="show-nav" className="fas fa-bars"></i>
        </button>
        <div
          ref={navRef}
          className="w-[50vw] bg-gray-100 absolute right-5 rounded-md shadow-lg hidden sm:w-[35vw] lg:hidden"
        >
          <Navlinks />
        </div>
        <div className="hidden lg:block">
          <Navlinks navFixed={navFixed} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
