import ProjectCard from './Cards/Project-Card';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const allProjectsCollectionRef = collection(db, 'AllProjectsData');
// const projectsData = [
//   {
//     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
//     title: 'Software Structure',
//     description:
//       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
//     startDate: 'June 2021',
//     endDate: 'July 2021',
//   },
//   {
//     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
//     title: 'Software Structure',
//     description:
//       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
//     startDate: 'June 2021',
//     endDate: 'July 2021',
//   },
//   {
//     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
//     title: 'Software Structure',
//     description:
//       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
//     startDate: 'June 2021',
//     endDate: 'July 2021',
//   },
//   {
//     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
//     title: 'Software Structure',
//     description:
//       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
//     startDate: 'June 2021',
//     endDate: 'July 2021',
//   },
// ];
const AllProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);

  // Fetching all projects data from firebase
  const getAllProjectsData = async () => {
    try {
      const data = await getDocs(allProjectsCollectionRef);
      const filterdData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjectsData(filterdData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllProjectsData();
  }, [projectsData]);
  return (
    <section className="normal-page flex flex-col gap-14">
      <h2 className="text-3xl font-bold uppercase">Projects</h2>
      <div className="grid grid-cols-3 gap-10">
        {projectsData.map((data, index) => (
          <ProjectCard key={index} project={data} />
        ))}
      </div>
    </section>
  );
};

export default AllProjectsSection;
