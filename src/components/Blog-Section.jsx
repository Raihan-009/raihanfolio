import BlogCard from "./Cards/Blog-Card";

const BlogSection = () => {
  const blogData = [
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      title: "Networking",
      date: "June 2021",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      title: "Python 3 Programming specialization",
      date: "June 2021",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      title: "Networking",
      date: "June 2021",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      description:
        "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
      title: "Crash course on Python",
      date: "June 2021",
    },
  ];
  return (
    <section className="normal-page flex flex-col gap-28">
      <h2 className="text-3xl font-bold uppercase">Blog</h2>
      <div className="flex flex-col gap-20">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
