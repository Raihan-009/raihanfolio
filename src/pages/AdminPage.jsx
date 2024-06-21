import Layout from '../components/Layout';
import AdminPageAllProjectsPannel from '../components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageAwardSectionPannel from '../components/admin-page-components/AdminPage-AwardSection-Pannel';
import AdminPageFeaturedSectionPannel from '../components/admin-page-components/AdminPage-Featured-Section-Pannel';

const AdminPage = () => {
  return (
    <Layout>
      <div className="flex gap-5">
        <AdminPageFeaturedSectionPannel />
        <AdminPageAllProjectsPannel />
        <AdminPageAwardSectionPannel />
      </div>
      {/* <div>BlogSection Data</div>
      <div>ExperienceSection Data</div>
      <div>EducationSection Data</div> */}
    </Layout>
  );
};

export default AdminPage;
