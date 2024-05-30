import FeatureCard from "./Cards/Feature-Card";

const Featured = () => {
  const featuredData = [
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "Software Structure",
      description:
        "The term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "GitHub Structure",
      description:
        "The term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "Amazon Structure",
      description:
        "The term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.",
    },
    {
      image: "https://i.ibb.co/98ccsWB/flower-729512.jpg",
      title: "Google Structure",
      description:
        "DescriThe term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.ption",
    },
  ];
  return (
    <section className="normal-page">
      <div className="flex flex-col gap-14">
        <h2 className="text-3xl font-bold uppercase">Featured</h2>
        <div className="w-full flex gap-10">
          {featuredData.map((data, index) => (
            <FeatureCard
              key={index}
              feature={data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
