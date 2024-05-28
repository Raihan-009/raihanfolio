import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../assets/SVG-Icons";

const Sidebar = () => {
  const features = [
    "About Me",
    "Featured",
    "Experience",
    "Education",
    "Projects",
    "Skills",
    "Award & Certification",
    "Testimonial",
    "Blog",
  ];
  return (
    <section className="w-fit h-[100vh] min-w-60 bg-[#232323] fixed">
      <div className="flex flex-col h-full py-7 px-9 justify-between font-inter text-white">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-2.5">
            <img
              src="https://i.ibb.co/GT6T5TJ/3300560-484569-PH1-WQ0-9-CORREGIDO.jpg"
              alt=""
              className="w-[90px] rounded-full"
            />
            <h1 className="text-2xl font-bold">Raihan Islam</h1>
          </div>
          <div className="flex flex-col gap-2 overflow-scroll">
            {features?.map((feature) => {
              return (
                <span
                  key={feature}
                  className="font-bold leading-7 my-1 cursor-pointer hover:text-[#FFD700]"
                >
                  {feature}
                </span>
              );
            })}
            <span>Resume</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <GithubIcon />
            <LinkedinIcon />
            <TwitterIcon />
            <WhatsappIcon />
          </div>
          <p>Copyright @ Raihan Islam</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
