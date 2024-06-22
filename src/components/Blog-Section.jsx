import BlogCard from './Cards/Blog-Card';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const allBlogsCollectionRef = collection(db, 'AllBlogsData');

const BlogSection = () => {
  // const blogData = [
  //   {
  //     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
  //     description:
  //       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
  //     title: 'Networking',
  //     date: 'June 2021',
  //   },
  //   {
  //     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
  //     description:
  //       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
  //     title: 'Python 3 Programming specialization',
  //     date: 'June 2021',
  //   },
  //   {
  //     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
  //     description:
  //       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
  //     title: 'Networking',
  //     date: 'June 2021',
  //   },
  //   {
  //     image: 'https://i.ibb.co/98ccsWB/flower-729512.jpg',
  //     description:
  //       "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
  //     title: 'Crash course on Python',
  //     date: 'June 2021',
  //   },
  // ];
  const [blogData, setBlogData] = useState([]);
  const getAllblogData = async () => {
    try {
      const data = await getDocs(allBlogsCollectionRef);
      const filterdData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogData(filterdData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllblogData();
  }, [blogData]);
  return (
    <section className="normal-page flex flex-col gap-28">
      <h2 className="text-3xl font-bold uppercase">Blog</h2>
      <div className="flex flex-col gap-20">
        {blogData.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
