import AwardCard from './Cards/Award-Card';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const allAwardsCollectionRef = collection(db, 'AllAwardsData');

const AwardSection = () => {
  const [awardsData, setAwardsData] = useState([]);
  const getAllawardsData = async () => {
    try {
      const data = await getDocs(allAwardsCollectionRef);
      const filterdData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAwardsData(filterdData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllawardsData();
  }, [awardsData]);
  return (
    <section className="normal-page flex flex-col gap-28">
      <h2 className="text-3xl font-bold uppercase">Award & Certification</h2>
      <div className="flex flex-col gap-20">
        {awardsData.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
