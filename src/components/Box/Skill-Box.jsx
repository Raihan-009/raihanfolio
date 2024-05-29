const SkillBox = ({ title, skills }) => {
  return (
    <div className="flex gap-2.5 px-20 py-16 flex-wrap border border-borderline rounded-xl relative">
      <span className="absolute -top-6 left-14 font-bold border border-borderline px-14 py-3 rounded-md bg-contents">
        {title}
      </span>
      {skills.map((skill, index) => (
        <span
          key={index}
          className="text-nowrap px-6 py-3 bg-card rounded-md font-bold"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillBox;
