import Layout from "../components/Layout";
import AboutMeSection from "../components/About-Me-Section";
import FeaturedSection from "../components/Featured-Section";
import AllProjectsSection from "../components/All-Projects-Section";
import SkillsSection from "../components/Skills-Section";
import AwardSection from "../components/Award-Section";
import BlogSection from "../components/Blog-Section";
import ContactMeSection from "../components/Contact-Me-Section";
import EducationSection from "../components/Education-Section";

const LandingPageSection = () => {
  return (
    <Layout>
      <AboutMeSection />
      <FeaturedSection />
      <AllProjectsSection />
      <SkillsSection />
      <AwardSection />
      <BlogSection />
      <EducationSection />
      <ContactMeSection />
    </Layout>
  );
};

export default LandingPageSection;
