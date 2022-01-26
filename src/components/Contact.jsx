const Contact = () => {
  return (
    <section className="w-full py-24" id="contact">
      <p className="text-gray-800 text-5xl font-semibold text-center">
        Contact Me
      </p>
      <div className="w-4/5 mx-auto my-12 bg-emerald-500 rounded rounded-xl">
        <h2 className="text-4xl text-gray-50 text-center font-semibold my-4 pt-10">
          Have something in mind?
        </h2>
        <p className="text-gray-100 text-xl text-center">
          If you have any questions or some opportunity, feel free to contact
          me.
        </p>
        <div className="w-fit mx-auto py-7 text-3xl text-gray-50">
          <a
            className="m-5 hover:text-gray-300 hover:text-[#EA4335]- transition-colors"
            href="mailto:vishwast8126@gmail.com"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            className="m-5 hover:text-gray-300 hover:text-[#1DA1F2]- transition-colors"
            href="https://twitter.com/VishwasT03"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="m-5 hover:text-gray-300 hover:text-[#0A66C2]- transition-colors"
            href="https://www.linkedin.com/in/vishwas-tyagi/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
