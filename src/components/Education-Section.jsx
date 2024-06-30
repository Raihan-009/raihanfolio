import { useFirebase } from '../contexts/FirebaseContext';
import EducationTimeline from './Timeline/Education-Timeline';

const EducationSection = () => {
  const data = useFirebase();
  const educationData = data?.AllEducationData;
  return (
    <section className="normal-page flex flex-col gap-14">
      <h2 className="text-3xl font-bold uppercase">Education</h2>
      <EducationTimeline edu={educationData} />
    </section>
  );
};

export default EducationSection;
