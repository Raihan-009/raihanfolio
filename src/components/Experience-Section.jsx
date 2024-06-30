import { useFirebase } from '../contexts/FirebaseContext';
import ExperienceTimeline from './Timeline/Experience-Timeline';

const ExperienceSection = () => {
  const data = useFirebase();
  const experienceData = data?.AllExperienceData;
  return (
    <section className="normal-page flex flex-col gap-14">
      <h2 className="text-3xl font-bold uppercase">Experiences</h2>
      <div className="w-full flex justify-between">
        <ExperienceTimeline experiences={experienceData} />
        <ExperienceTimeline experiences={experienceData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
