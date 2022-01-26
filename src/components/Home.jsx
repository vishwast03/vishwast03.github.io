import image from "../images/image.png";

const Home = () => {
  return (
    <main
      className="w-full h-screen relative z-0"
      style={{ background: "linear-gradient(70deg, #f3f4f6 46%, #10b981 46%)" }}
      id="#home"
    >
      <div className="absolute z-20 bottom-20 left-24">
        <p className="text-emerald-500 text-3xl font-semibold my-5">
          Hello, I'm
        </p>
        <h1 className="text-gray-800 text-5xl font-semibold my-6">
          Vishwas Tyagi
        </h1>
        <p className="text-gray-600 text-xl mb-7">MERN Stack Web Developer</p>
        <a href="mailto:vishwast8126@gmail.com" className="bg-emerald-500 text-gray-50 text-lg font-semibold rounded-md px-10 py-3 hover:bg-emerald-600 transition-colors">
          Hire Me!
        </a>
      </div>
      <div className="h-4/5 absolute z-20 bottom-0 right-32">
        <img className="h-full -scsale-x-100" src={image} alt="image" />
      </div>
    </main>
  );
};

export default Home;
