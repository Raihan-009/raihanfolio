import { createContext, useContext, useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../config/firebase';

// Create Firebase context
const FirebaseContext = createContext();

// Custom hook to use the Firebase context
export const useFirebase = () => useContext(FirebaseContext);

// Firebase provider component
export const FirebaseProvider = ({ children }) => {
  const [data, setData] = useState({});

  // Function to fetch all data from collections
  const getAllData = async () => {
    const collections = [
      'AllProjectData',
      'AllAwardData',
      'AllBlogData',
      'AllFeatureData',
      'AllEducationData',
      'AllExperienceData',
    ]; // Example collections

    const promises = collections.map(async (collectionName) => {
      const snapshot = await get(ref(database, collectionName));
      if (snapshot.exists()) {
        return { [collectionName]: Object.values(snapshot.val()) };
      } else {
        console.log('No data available for:', collectionName);
        return { [collectionName]: [] };
      }
    });

    Promise.all(promises).then((results) => {
      const allData = results.reduce(
        (acc, current) => ({ ...acc, ...current }),
        {}
      );
      setData(allData);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <FirebaseContext.Provider value={data}>{children}</FirebaseContext.Provider>
  );
};
