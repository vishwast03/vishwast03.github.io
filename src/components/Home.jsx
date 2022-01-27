import image from "../images/image.png";

const Home = (props) => {
  const viewWidth = props.viewWidth;

  return (
    <main
      className="w-full bg-gray-100 lg:h-screen lg:relative lg:z-0"
      style={{
        background: `${
          viewWidth > 639
            ? "linear-gradient(70deg, #f3f4f6 46%, #10b981 46%)"
            : ""
        }`,
      }}
      id="home"
    >
      <div className="pt-52 px-7 lg:absolute lg:z-20 lg:bottom-20 lg:left-16 xl:left-24">
        <p className="text-emerald-500 text-2xl font-semibold sm:mt-5 md:text-3xl">
          Hello, I'm
        </p>
        <h1 className="text-gray-800 text-3xl font-semibold my-2 sm:text-4xl sm:my-3 md:text-5xl md:my-6">
          Vishwas Tyagi
        </h1>
        <p className="text-gray-600 text-lg mb-10 sm:mb-14">
          MERN Stack Web Developer
        </p>
        <a
          href={`mailto:${props.email}`}
          className="bg-emerald-500 text-gray-50 text-lg font-semibold rounded-md shadow-md px-6 py-2 hover:bg-emerald-600 transition-colors sm:px-10 sm:py-3"
        >
          Hire Me!
        </a>
      </div>
      <div className="h-72 my-8 flex justify-center sm:h-96 sm:my-0 sm:-mt-40 sm:justify-end md:-mt-56 xl:h-3/4 lg:absolute lg:z-20 lg:bottom-0 lg:right-16 xl:right-32">
        <img className="h-full sm:mr-5" src={image} alt="image" />
      </div>
    </main>
  );
};

export default Home;
