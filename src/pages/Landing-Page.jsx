import Layout from "../components/Layout";
import AboutMe from "../components/About-Me";
import Featured from "../components/Featured";
import AllProjects from "../components/All-Projects";

const LandingPageSection = () => {
  return (
    <Layout>
      <AboutMe />
      <Featured />
      <AllProjects />
      {/* <hr className="w-full border-0.2 border-borderline" /> */}
    </Layout>
  );
};

export default LandingPageSection;
