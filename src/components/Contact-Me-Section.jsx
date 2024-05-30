/* eslint-disable react/no-unescaped-entities */
const ContactMeSection = () => {
  return (
    <section className="normal-page flex flex-col gap-10 justify-center items-center text-center">
      <h3 className="text-3xl font-bold">Contact Me</h3>
      <p className="tracking-wide leading-7">
        Thank you for taking the time to look at what I've been upto. Let's talk
        about how <br/> I can help you and your team in your next project.
      </p>
      <button className="bg-button px-6 py-3 rounded-lg font-bold">
        Download Resume
      </button>
      <p className="text-xl ">
        <span className="font-bold">Email: </span> raihanislam@gmail.com
      </p>
    </section>
  );
};

export default ContactMeSection;
