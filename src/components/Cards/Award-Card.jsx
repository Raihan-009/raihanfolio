import { RedirectIcon } from '../../assets/SVG-Icons';

const AwardCard = ({ award }) => {
  const { image, platform, title, date } = award;
  return (
    <section className="w-full flex gap-10">
      <img
        src={image}
        alt="award"
        className="w-64 aspect-auto object-cover rounded-2xl"
      />
      <div className="flex flex-col justify-between items-start gap-5">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-bold">{title}</h5>
          <p className="font-semibold">{platform}</p>
          <p className="text-[#d8d8d8]">Issued on {date}</p>
        </div>
        <button className="flex gap-2 px-6 py-3 border-0.5 rounded-lg border-borderline text-sm font-bold">
          <span>Show Certificate</span>
          <RedirectIcon className="fill-white" />
        </button>
      </div>
    </section>
  );
};

export default AwardCard;
