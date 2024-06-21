import { RedirectIcon } from '../../assets/SVG-Icons';

const ProjectCard = ({ project }) => {
  const { title, description, startDate, endDate, img } = project;
  return (
    <div className="flex flex-col gap-6">
      <img
        src={img}
        alt=""
        className="w-full aspect-auto rounded-xl object-cover"
      />
      <div className="px-1">
        <span className="text-[#D8D8D8]">{`${startDate} - ${endDate}`}</span>
        <h2 className="text-xl font-bold leading-10">{title}</h2>
        <p className="leading-6">{description}</p>
      </div>
      <button className="w-fit flex gap-2 bg-button px-9 py-4 rounded-lg font-bold">
        <span>Show Project</span>
        <RedirectIcon />
      </button>
    </div>
  );
};

export default ProjectCard;
