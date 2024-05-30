import Layout from "../components/Layout";
import AboutMeSection from "../components/About-Me-Section";
import FeaturedSection from "../components/Featured-Section";
import AllProjectsSection from "../components/All-Projects-Section";
import SkillsSection from "../components/Skills-Section";
import AwardSection from "../components/Award-Section";

const LandingPageSection = () => {
  return (
    <Layout>
      <AboutMeSection />
      <FeaturedSection />
      <AllProjectsSection />
      <SkillsSection/>
      <AwardSection />
      {/* <hr className="w-full border-0.2 border-borderline" /> */}
    </Layout>
  );
};

export default LandingPageSection;
