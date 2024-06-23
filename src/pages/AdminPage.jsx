import Layout from '../components/Layout';
import AdminPageAllProjectsPannel from '../components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageAwardSectionPannel from '../components/admin-page-components/AdminPage-AwardSection-Pannel';
import AdminPageFeaturedSectionPannel from '../components/admin-page-components/AdminPage-Featured-Section-Pannel';
import AdminPageBlogPannel from '../components/admin-page-components/AdminPage-BlogSection-Pannel';
import AdminPageExperienceSectionPannel from '../components/admin-page-components/AdminPage-ExperienceSection-Pannel';
import AdminPageEducationSectionPannel from '../components/admin-page-components/AdminPage-EducationSection-Pannel';

const AdminPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap gap-2 justify-evenly">
        <AdminPageFeaturedSectionPannel />
        <AdminPageAllProjectsPannel />
        <AdminPageAwardSectionPannel />
        <AdminPageBlogPannel />
        <AdminPageExperienceSectionPannel />
        <AdminPageEducationSectionPannel />
      </div>
    </Layout>
  );
};

export default AdminPage;
