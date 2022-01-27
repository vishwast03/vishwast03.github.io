const Contact = (props) => {
  const links = props.profileLinks;

  return (
    <section className="w-full pt-16 sm:pt-20 md:py-16 lg:py-24" id="contact">
      <p className="text-gray-800 text-3xl font-semibold text-center md:text-4xl lg:text-5xl">
        Contact Me
      </p>
      <div className="w-[90%] mx-auto my-12 bg-emerald-500 rounded rounded-xl sm:w-4/5">
        <h2 className="text-xl text-gray-50 text-center font-semibold my-2 pt-7 sm:text-2xl md:pt-10 md:my-4 lg:text-4xl">
          Have something in mind?
        </h2>
        <p className="text-gray-100 text-center sm:mx-3 lg:text-xl">
          If you have any questions or some opportunity, feel free to contact
          me.
        </p>
        <div className="w-fit mx-auto py-4 text-2xl text-gray-50 sm:py-5 md:text-3xl md:py-7">
          <a
            className="m-3 hover:text-gray-300 hover:text-[#EA4335]- transition-colors sm:m-5"
            href={`mailto:${links.email}`}
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            className="m-3 hover:text-gray-300 hover:text-[#1DA1F2]- transition-colors sm:m-5"
            href={links.twitter}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="m-3 hover:text-gray-300 hover:text-[#0A66C2]- transition-colors sm:m-5"
            href={links.linkedin}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
