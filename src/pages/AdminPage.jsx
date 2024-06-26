import Layout from '../components/Layout';
import AdminPageAllProjectsPannel from '../components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageAwardSectionPannel from '../components/admin-page-components/AdminPage-AwardSection-Pannel';
import AdminPageFeaturedSectionPannel from '../components/admin-page-components/Feature-Control-Section/AdminPage-Featured-Section-Pannel';
import AdminPageBlogPannel from '../components/admin-page-components/AdminPage-BlogSection-Pannel';
import AdminPageExperienceSectionPannel from '../components/admin-page-components/AdminPage-ExperienceSection-Pannel';
import AdminPageEducationSectionPannel from '../components/admin-page-components/AdminPage-EducationSection-Pannel';
import { useData } from '../contexts/FirebaseContext';
import FeaturedSection from '../components/Featured-Section';

const AdminPage = () => {
  const data = useData();
  console.log(data);
  return (
    <Layout>
      <AdminPageFeaturedSectionPannel />
      <FeaturedSection />
      <AdminPageAllProjectsPannel />
      <AdminPageAwardSectionPannel />
      <AdminPageBlogPannel />
      <AdminPageExperienceSectionPannel />
      <AdminPageEducationSectionPannel />
    </Layout>
  );
};

export default AdminPage;
