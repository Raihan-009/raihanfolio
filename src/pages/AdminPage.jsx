import Layout from '../components/Layout';
import { Outlet } from 'react-router-dom';
import ResumeUpload from '../components/ResumeUpload';

const AdminPage = () => {
  return (
    <Layout admin={true}>
      <ResumeUpload />
      <Outlet />
    </Layout>
  );
};

export default AdminPage;
