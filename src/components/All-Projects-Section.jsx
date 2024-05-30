import ProjectCard from "./Cards/Project-Card";

const AllProjectsSection = () => {
  const projectsData = [
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "Software Structure",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      startDate: "June 2021",
      endDate: "July 2021",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "Software Structure",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      startDate: "June 2021",
      endDate: "July 2021",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "Software Structure",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      startDate: "June 2021",
      endDate: "July 2021",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "Software Structure",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      startDate: "June 2021",
      endDate: "July 2021",
    },
  ];
  return (
    <section className="normal-page flex flex-col gap-14">
      <h2 className="text-3xl font-bold uppercase">Projects</h2>
      <div className="grid grid-cols-3 gap-10">
        {projectsData.map((data, index) => (
          <ProjectCard
            key={index}
            project={data}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjectsSection;
