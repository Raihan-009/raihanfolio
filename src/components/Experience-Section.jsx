import ExperienceTimeline from './Timeline/Experience-Timeline';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const allExperiencesCollectionRef = collection(db, 'AllExperiencesData');

const ExperienceSection = () => {
  // const experienceData = [
  //   {
  //     image: 'https://i.ibb.co/yN5DMdY/10308628-18361499.jpg',
  //     title: 'Oter',
  //     date: '2019 - 2023',
  //     description:
  //       'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
  //     location: 'Deligite Company Limited, Bangladesh',
  //     role: 'User Experience Engineer',
  //   },
  //   {
  //     image: 'https://i.ibb.co/yN5DMdY/10308628-18361499.jpg',
  //     title: 'Oter',
  //     date: '2023 - present',
  //     description:
  //       'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
  //     location: 'Dhaka, Bangladesh',
  //     role: 'User Experience Engineer',
  //   },
  //   {
  //     image: 'https://i.ibb.co/yN5DMdY/10308628-18361499.jpg',
  //     title: 'Oter',
  //     date: '2019 - 2023',
  //     description:
  //       'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
  //     location: 'Amsterdam, North-Holland',
  //     role: 'Devops Engineer',
  //   },
  // ];
  const [experienceData, setExperienceData] = useState([]);
  const getAllexperienceData = async () => {
    try {
      const data = await getDocs(allExperiencesCollectionRef);
      const filterdData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExperienceData(filterdData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllexperienceData();
  }, [experienceData]);
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
