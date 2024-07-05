/* eslint-disable react/no-unescaped-entities */

const SpecificProjectSection = () => {
  const projectData = {
    title: "dinosaurBot",
    img: "https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9896781944744-4cf2-8d90-c4927c48d675",
    date: "Jun 2023 - August 2024",
    description:
      "Welcome to the future of personal assistance! We’re thrilled to introduce Dianabot, a state-of-the-art AI companion designed to revolutionize the way you manage your daily tasks, enhance productivity, and stay connected. Whether you're a busy professional, a student, or someone looking to optimize their daily routine, Dianabot is here to make your life easier and more efficient.Dianabot is an advanced AI-driven personal assistant that leverages the latest in machine learning and natural language processing to provide you with seamless, intuitive support. From managing your schedule and setting reminders to offering personalized recommendations and real-time information, Dianabot is equipped to handle a wide array of tasks with ease.",
    keyFeatures: [
      "Smart Scheduling",
      "Personalized Recommendations",
      "Information at Your Fingertips",
      "Enhanced Communication",
      "Productivity Tools",
    ],
    whyChoose:
      "Diansorbot is not just another digital assistant; it’s a comprehensive tool designed to make your life easier, more organized, and more productive. With its advanced AI capabilities, seamless integrations, and user-centric design, Diansorbot stands out as the ultimate assistant for anyone looking to optimize their daily routines and achieve their goals with ease.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "Ant Design",
    ],
  };
  const { title, img, date, description, keyFeatures, whyChoose, skills } =
    projectData;
  return (
    <div className="grid gap-10">
      <img
        src={img}
        alt={title}
        className="w-3/4 aspect-auto rounded-xl object-cover"
      />
      <div className="grid gap-5">
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
        <p className="text-[#D8D8D8]">{date}</p>
        <p className="leading-6">{description}</p>
      </div>
      <div className="grid gap-5">
        <h2 className="text-2xl font-bold">Key Features</h2>
        <ul className="list-disc px-10 grid gap-3">
          {keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-5">
        <h2 className="text-2xl font-bold">Why Choose Dinasourbot ?</h2>
        <p className="leading-6">{whyChoose}</p>
      </div>
      <div className="grid gap-5">
        <h3 className="text-2xl font-bold">Skills</h3>
        <div className="flex gap-2.5  flex-wrap relative">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-nowrap px-6 py-3 bg-card rounded-md font-bold hover:transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificProjectSection;
