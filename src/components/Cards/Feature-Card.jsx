const FeatureCard = ({ feature }) => {
  return (
    <div className="flex flex-col rounded-xl bg-card">
      <img
        src={feature?.image}
        alt="image"
        className="w-full aspect-auto rounded-t-xl cover"
      />
      <span className="p-4">
        <h6 className="font-bold text-lg leading-10">{feature?.title}</h6>
        <p className="leading-5">{feature?.description}</p>
      </span>
    </div>
  );
};

export default FeatureCard;
