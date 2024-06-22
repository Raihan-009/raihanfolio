import Layout from '../components/Layout';
import AdminPageAllProjectsPannel from '../components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageAwardSectionPannel from '../components/admin-page-components/AdminPage-AwardSection-Pannel';
import AdminPageFeaturedSectionPannel from '../components/admin-page-components/AdminPage-Featured-Section-Pannel';
import AdminPageBlogPannel from '../components/admin-page-components/AdminPage-BlogSection-Pannel';
import AdminPageExperienceSectionPannel from '../components/admin-page-components/AdminPage-ExperienceSection-Pannel';

const AdminPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap gap-2 justify-evenly">
        <AdminPageFeaturedSectionPannel />
        <AdminPageAllProjectsPannel />
        <AdminPageAwardSectionPannel />
        <AdminPageBlogPannel />
        <AdminPageExperienceSectionPannel />
      </div>
      {/* <div>EducationSection Data</div>   */}
    </Layout>
  );
};

export default AdminPage;
