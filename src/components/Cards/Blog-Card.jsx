import { RedirectIcon } from '../../assets/SVG-Icons';

const BlogCard = ({ blog }) => {
  const { image, description, title, date } = blog;
  return (
    <section className="w-full flex gap-10">
      <img
        src={image}
        alt="award"
        className="w-64 aspect-auto object-cover rounded-2xl"
      />
      <div className="flex flex-col justify-between items-start gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2.5 items-center">
            <h5 className="text-xl font-bold">{title}</h5>
            <RedirectIcon className="fill-white" />
          </div>
          <p className="text-[#d8d8d8] italic">{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
