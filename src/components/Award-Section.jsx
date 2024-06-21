import AwardCard from './Cards/Award-Card';

import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const allAwardsCollectionRef = collection(db, 'AllAwardsData');

const AwardSection = () => {
  const [awardsData, setAwardsData] = useState([]);
  const awardData = [
    {
      image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
      platform: 'Coursera',
      title: 'Capstone: Retrieving, Processing, & Visualizing Data with Python',
      date: 'June 2021',
    },
    {
      image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
      platform: 'Udemy',
      title: 'Python 3 Programming specialization',
      date: 'June 2021',
    },
    {
      image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
      platform: 'Phitron',
      title: 'Capstone: Retrieving, Processing, & Visualizing Data with Python',
      date: 'June 2021',
    },
    {
      image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
      platform: 'Coursera',
      title: 'Crash course on Python',
      date: 'June 2021',
    },
  ];
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
        {awardData.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
