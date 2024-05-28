const AboutMe = () => {
  return (
    <section className="w-full flex flex-col gap-10 justify-center bg-contents px-28 py-16 min-h-screen">
      <div className="text-white">
        <div className="flex items-end gap-2">
          <img
            src="https://i.ibb.co/PYL2qj6/Waving-Hand-1.png"
            alt="wave"
            className="w-16"
          />
          <span className="text-xl font-bold leading-normal ">Hey, I am</span>
        </div>
        <h2 className="font-bold text-5xl my-1">Raihan Islam.</h2>
        <span>Software Engineer || Front-end Developer</span>
      </div>
      <p className="text-white leading-7">
        As an aspiring self-taught developer and programmer, I am currently
        pursuing my undergraduate degree in Mechatronics and Industrial
        Engineering at Chittagong University of Engineering and Technology
        (CUET). Alongside my studies, I hold the position of Software Engineer
        at PORIDHI.IO. My professional interests encompass AI, automation, and
        robotics. With a strong foundation in programming languages such as C,
        Python, and JavaScript, I have undertaken diverse projects in areas
        including Arduino and Raspberry Pi, as well as computer vision
        applications. Proficient in web development technologies like
        JavaScript, React, and Flask, I have also gained experience in PHP,
        React Native, MongoDB, and SQL databases. I am enthusiastic about
        leveraging my skills and knowledge to contribute meaningfully to the
        technology industry.
      </p>
      <div className="flex gap-8">
        <button className="bg-button text-white font-bold px-14 py-3 rounded-lg">
          My latest Project
        </button>
        <button className="px-14 py-3 font-bold text-[#3959c1] border-0.5 border-[#3959c1] rounded-lg">
          View My Resume
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
