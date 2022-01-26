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
      className={`w-32 m-5 h-28 shadow-md ${
        mouseOver ? "bg-emerald-500" : "bg-gray-100"
      } rounded-md flex flex-col justify-center items-center transition-colors duration-300`}
    >
      <i className={`${props.icon} text-4xl ${mouseOver ? "text-gray-50" : "text-emerald-500"}`}></i>
      <span className={`text-xl ${mouseOver ? "text-gray-50" : "text-gray-800"} py-2`}>{props.name}</span>
    </div>
  );
};

export default TechCard;
