import SkillBox from "./Box/Skill-Box";

const SkillsSection = () => {
  const skillsData = {
    frontend: [
      "JavaScript",
      "HTML & SCSS",
      "WordPress",
      "React Native",
      "React",
      "React",
      "WordPress",
      "JavaScript",
      "HTML & SCSS",
      "React Native",
    ],
    backend: [
      "JavaScript",
      "HTML & SCSS",
      "WordPress",
      "React Native",
      "React",
      "JavaScript",
      "HTML & SCSS",
      "WordPress",
      "React Native",
      "React",
    ],
    android: [
      "JavaScript",
      "HTML & SCSS",
      "WordPress",
      "React Native",
      "React",
      "JavaScript",
      "HTML & SCSS",
      "WordPress",
      "React Native",
      "React",
    ],
  };
  return (
    <section className="normal-page">
      <div className="flex flex-col gap-24">
        <h2 className="text-3xl font-bold uppercase">Skills</h2>
        <SkillBox
          title="Front-end"
          skills={skillsData?.frontend}
        />
        <SkillBox
          title="Back-end"
          skills={skillsData?.backend}
        />
        <SkillBox
          title="Android & IOS"
          skills={skillsData?.android}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
