import AwardCard from './Cards/Award-Card';
import { useFirebase } from '../contexts/FirebaseContext';

const AwardSection = () => {
  const data = useFirebase();
  const awardsData = data?.AllAwardData;
  return (
    <section className="normal-page flex flex-col justify-center gap-28">
      <h2 className="text-3xl font-bold uppercase">Award & Certification</h2>
      <div className="flex flex-col gap-20">
        {awardsData?.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
