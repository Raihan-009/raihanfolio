import Layout from '../components/Layout';
import AdminPageAllProjectsPannel from '../components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageFeaturedSectionPannel from '../components/admin-page-components/AdminPage-Featured-Section-Pannel';

const AdminPage = () => {
  return (
    <Layout>
      <div className="flex gap-5">
        <AdminPageFeaturedSectionPannel />
        <AdminPageAllProjectsPannel />
      </div>
      {/*<div>AwardSection Data</div>
      <div>BlogSection Data</div>
      <div>ExperienceSection Data</div>
      <div>EducationSection Data</div> */}
    </Layout>
  );
};

export default AdminPage;
