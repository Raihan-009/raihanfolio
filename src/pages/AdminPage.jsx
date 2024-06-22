import Layout from '../components/Layout';
import AdminPageAllProjectsPannel from '../components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageAwardSectionPannel from '../components/admin-page-components/AdminPage-AwardSection-Pannel';
import AdminPageFeaturedSectionPannel from '../components/admin-page-components/AdminPage-Featured-Section-Pannel';
import AdminPageBlogPannel from '../components/admin-page-components/AdminPageBlogPannel';

const AdminPage = () => {
  return (
    <Layout>
      <div className="flex gap-2 justify-evenly">
        <AdminPageFeaturedSectionPannel />
        <AdminPageAllProjectsPannel />
        <AdminPageAwardSectionPannel />
        <AdminPageBlogPannel />
      </div>
      {/* <div>ExperienceSection Data</div>
      <div>EducationSection Data</div>  */}
    </Layout>
  );
};

export default AdminPage;
