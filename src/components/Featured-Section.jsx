import FeatureCard from './Cards/Feature-Card';
import { useEffect, useState } from 'react';

import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
const featuredDataCollectionRef = collection(db, 'featuredData');

const FeaturedSection = () => {
  const [featuredData, setFeaturedData] = useState([]);

  // Fetching all featured data from firebase
  const getAllFeaturedData = async () => {
    try {
      const data = await getDocs(featuredDataCollectionRef);
      const filterdData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeaturedData(filterdData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllFeaturedData();
  }, [featuredData]);

  return (
    <section className="normal-page flex flex-col gap-14">
      <h2 className="text-3xl font-bold uppercase">Featured</h2>
      <div className="w-full flex gap-10">
        {featuredData.map((data, index) => (
          <FeatureCard key={index} feature={data} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
