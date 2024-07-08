import { Link } from 'react-router-dom';
import {
  GithubIcon,
  LinkedinIcon,
  RedirectIcon,
  TwitterIcon,
  WhatsappIcon,
} from '../assets/SVG-Icons';

const Sidebar = () => {
  const features = [
    'About Me',
    'Featured',
    'Experience',
    'Education',
    'Projects',
    'Skills',
    'Award & Certification',
    'Testimonial',
    'Blog',
  ];
  return (
    <section className="w-fit min-w-60 bg-[#232323] ">
      <div className="sticky top-0 flex flex-col h-screen py-7 px-9 justify-between font-inter text-white">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-2.5">
            <img
              src="https://i.ibb.co/GT6T5TJ/3300560-484569-PH1-WQ0-9-CORREGIDO.jpg"
              alt=""
              className="w-[90px] rounded-full"
            />
            <h1 className="text-2xl font-bold">Raihan Islam</h1>
          </div>
          <div className="flex flex-col gap-2 ">
            {features?.map((feature) => {
              return (
                <span
                  key={feature}
                  className="font-bold leading-7 my-1 cursor-pointer hover:text-[#FFD700]"
                >
                  <a href={`#${feature}`}>{feature}</a>
                </span>
              );
            })}
            <div className="group flex items-center gap-2.5 font-bold leading-7 my-1 cursor-pointer hover:text-[#FFD700] peer-hover:fill-[#FFD700]">
              <span className=" ">Resume</span>
              <RedirectIcon className="fill-white group-hover:fill-[#FFD700]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex gap-4">
            <GithubIcon />
            <LinkedinIcon />
            <TwitterIcon />
            <WhatsappIcon />
          </div>
          <p className="text-sm">Copyright @ Raihan Islam</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
