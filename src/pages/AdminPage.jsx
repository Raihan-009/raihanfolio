import Layout from '../components/Layout';
import { Outlet } from 'react-router-dom';
import { useFirebase } from '../contexts/FirebaseContext';

const AdminPage = () => {
  const data = useFirebase();
  console.log(data);
  return (
    <Layout admin={true}>
      <Outlet />
    </Layout>
  );
};

export default AdminPage;
