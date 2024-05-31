import EducationTimeline from "./Timeline/Education-Timeline";

const EducationSection = () => {
  const educationData = [
    {
      title: "Oter",
      date: "2019 - 2023",
      description:
        "Oter is a Micro book app to improve your professional and personal growth through book knowledge",
      location: "Deligite Company Limited, Bangladesh",
      role: "User Experience Engineer",
    },
    {
      title: "Oter",
      date: "2023 - present",
      description:
        "Oter is a Micro book app to improve your professional and personal growth through book knowledge",
      location: "Dhaka, Bangladesh",
      role: "User Experience Engineer",
    },
    {
      title: "Oter",
      date: "2019 - 2023",
      description:
        "Oter is a Micro book app to improve your professional and personal growth through book knowledge",
      location: "Amsterdam, North-Holland",
      role: "Devops Engineer",
    },
    {
      title: "Oter",
      date: "2019 - 2023",
      description:
        "Oter is a Micro book app to improve your professional and personal growth through book knowledge",
      location: "Dhaka, Bangladesh",
      role: "Experience Engineer",
    },
  ];
  return (
    <section className="normal-page flex flex-col gap-14">
      <h2 className="text-3xl font-bold uppercase">Education</h2>
      <EducationTimeline edu={educationData}/>
    </section>
  );
};

export default EducationSection;
