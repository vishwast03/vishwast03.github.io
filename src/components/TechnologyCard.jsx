const TechnologyCard = (props) => {
  return (
    <div className="w-32 m-5 h-28 shadow-md bg-gray-100 flex flex-col justify-center items-center">
      <i className={`${props.icon} text-4xl text-emerald-500`}></i>
      <span className="text-xl text-gray-800 py-2">{props.name}</span>
    </div>
  );
};

export default TechnologyCard;
