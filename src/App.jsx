import { useEffect, useState, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const profileLinks = {
    email: "vishwast8126@gmail.com",
    twitter: "https://twitter.com/vishwast03",
    linkedin: "https://www.linkedin.com/in/vishwas-tyagi/",
    github: "https://github.com/vishwast03",
    codepen: "https://codepen.io/vishwast03",
    repo: "https://github.com/vishwast03/vishwast03.github.io",
  };

  const techStack = [
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

  const projects = [
    {
      image: "https://i.imgur.com/JmXE90V.png",
      title: "Chat Soft",
      subtitle: "Real-time multi-client chat application",
      tags: [
        { name: "Socket.io", logo: "socket.io" },
        { name: "Express", logo: "express" },
        { name: "Node.js", logo: "node.js" },
      ],
      preview: "",
      github: "https://github.com/vishwast03/Chat-Soft",
    },
    {
      image: "https://i.imgur.com/xCwnQd1.png",
      title: "Movieium",
      subtitle: "Online movie ticket booking system",
      tags: [
        { name: "React", logo: "react" },
        { name: "Express", logo: "express" },
        { name: "MongoDB", logo: "mongodb" },
      ],
      preview: "https://movieium.vercel.app/",
      github:
        "https://github.com/vishwast03/Movieium-Online_Movie_Ticket_Booking_System",
    },
    {
      image: "https://i.imgur.com/6knYfcD.png",
      title: "CodeSet",
      subtitle: "Online Code Editor for HTML, CSS and JavaScript",
      tags: [
        { name: "React", logo: "react" },
        { name: "Tailwind CSS", logo: "tailwindcss" },
      ],
      preview: "https://vishwast03.github.io/CodeSet-v2/",
      github: "https://github.com/vishwast03/CodeSet-v2",
    },
    {
      image: "https://i.imgur.com/Bidx0aN.png",
      title: "Markdown Previewer",
      subtitle: "Simple Github flavored markdown previewer",
      tags: [
        { name: "React", logo: "react" },
        { name: "Tailwind CSS", logo: "tailwindcss" },
      ],
      preview: "https://vishwast03.github.io/Markdown-Previewer/",
      github: "https://github.com/vishwast03/Markdown-Previewer",
    },
    {
      image: "https://i.imgur.com/52YYC3f.png",
      title: "Notes Keeper",
      subtitle: "Chrome extension for keeping notes",
      tags: [
        { name: "HTML", logo: "html5" },
        { name: "CSS", logo: "css3" },
        { name: "JavaScript", logo: "javascript" },
      ],
      preview: "",
      github: "https://github.com/vishwast03/Notes-Keeper",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home viewWidth={viewWidth} email={profileLinks.email} />
      <About techStack={techStack} />
      <Portfolio
        projects={projects}
        sliderSettings={sliderSettings}
        github={profileLinks.github}
      />
      <Contact profileLinks={profileLinks} />
      <Footer profileLinks={profileLinks} />
    </>
  );
}

export default App;
