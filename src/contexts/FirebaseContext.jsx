import { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
const collections = [
  { name: 'AllProjectsData' },
  { name: 'AllAwardsData' },
  { name: 'AllBlogsData' },
  { name: 'AllEducationCardData' },
  { name: 'AllExperiencesData' },
  { name: 'featuredData' },
];
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const getSingleCollectionData = async (collectionName) => {
    try {
      const projectCollection = await getDocs(collection(db, collectionName));
      const filterdData = projectCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData((prevData) => ({
        ...prevData,
        [collectionName]: filterdData,
      }));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const allData = async () => {
      collections.map((collection) => getSingleCollectionData(collection.name));
    };
    allData();
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
