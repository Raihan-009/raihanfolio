import ProjectCard from './Cards/Project-Card';
import { useFirebase } from '../contexts/FirebaseContext';

const AllProjectsSection = () => {
  const data = useFirebase();
  const projectData = data?.AllProjectData;
  return (
    <section id="Projects" className="normal-page flex flex-col gap-14">
      <h2 className="text-3xl font-bold uppercase">Projects</h2>
      <div className="grid grid-cols-3 gap-10">
        {projectData?.map((data, index) => (
          <ProjectCard key={index} project={data} />
        ))}
      </div>
    </section>
  );
};

export default AllProjectsSection;
