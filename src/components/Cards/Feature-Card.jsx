import { useState } from "react";

const FeatureCard = ({ feature }) => {
  const { title, description, image } = feature;
  const [fullText, setFullText] = useState(false);
  return (
    <div className="w-64 flex flex-col rounded-xl bg-card">
      <img
        src={image}
        alt="image"
        className="w-full aspect-auto rounded-t-xl object-cover"
      />
      <span className="p-4">
        <h6 className="font-bold text-lg leading-10">{title}</h6>
        <p className={`leading-5 ${fullText ? "" : "line-clamp-3"} `}>
          {description}
        </p>
        <p
          className="hover:underline"
          onClick={() => setFullText(!fullText)}
        >
          {fullText ? "See less..." : "See more..."}
        </p>
      </span>
    </div>
  );
};

export default FeatureCard;
