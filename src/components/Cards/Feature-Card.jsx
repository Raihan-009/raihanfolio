const FeatureCard = ({ feature }) => {
  const { title, description, image } = feature;
  return (
    <div className="flex flex-col rounded-xl bg-card">
      <img
        src={image}
        alt="image"
        className="w-full aspect-auto rounded-t-xl object-cover"
      />
      <span className="p-4">
        <h6 className="font-bold text-lg leading-10">{title}</h6>
        <p className="leading-5">{description}</p>
      </span>
    </div>
  );
};

export default FeatureCard;
