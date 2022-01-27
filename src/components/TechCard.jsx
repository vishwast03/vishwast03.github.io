import { useRef, useEffect, useState } from "react";

const TechCard = (props) => {
  const cardRef = useRef(null);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    cardRef.current.addEventListener("mouseenter", () => {
      setMouseOver(true);
    });
    cardRef.current.addEventListener("mouseleave", () => {
      setMouseOver(false);
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-32 h-28 m-2 shadow-md ${
        mouseOver ? "bg-emerald-500" : "bg-gray-100"
      } rounded-md flex flex-col justify-center items-center transition-colors duration-300 md:m-3 lg:m-4 xl:m-5`}
    >
      <i className={`${props.icon} text-3xl ${mouseOver ? "text-gray-50" : "text-emerald-500"} md:text-4xl`}></i>
      <span className={`text-lg ${mouseOver ? "text-gray-50" : "text-gray-800"} py-2 lg:text-xl`}>{props.name}</span>
    </div>
  );
};

export default TechCard;
