import { RedirectIcon } from "../../assets/SVG-Icons";


const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-6">
      <img
        src={project?.image}
        alt=""
        className="w-full aspect-auto rounded-xl cover"
      />
      <div className="px-1">
        <span className="text-[#D8D8D8]">{`${project?.startDate} - ${project?.endDate}`}</span>
        <h2 className="text-xl font-bold leading-10">{project?.title}</h2>
        <p className="leading-6">{project?.description}</p>
      </div>
      <button className="w-fit flex gap-2 bg-button px-9 py-4 rounded-lg font-bold">
        <span>Show Project</span>
        <RedirectIcon />
      </button>
    </div>
  );
};

export default ProjectCard;
