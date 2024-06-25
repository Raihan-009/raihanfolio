import AddFeatureForm from './AddFeatureForm';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase';
const featuredDataCollectionRef = collection(db, 'featuredData');

const AdminPageFeaturedSectionPannel = () => {
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
    <div>
      {featuredData.map((data, index) => (
        <AddFeatureForm key={index} feature={data} />
      ))}
    </div>
  );
};

export default AdminPageFeaturedSectionPannel;
