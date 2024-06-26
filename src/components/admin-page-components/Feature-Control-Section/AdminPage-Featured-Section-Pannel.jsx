import UpdateFeatureForm from './UpdateFeatureForm';
import { useData } from '../../../contexts/FirebaseContext';
import AddFeatureForm from './AddFeatureForm';

const AdminPageFeaturedSectionPannel = () => {
  const data = useData();
  const featuredData = data.data.featuredData;

  return (
    <div>
      <div>
        <AddFeatureForm />
      </div>
      {featuredData?.map((data, index) => (
        <UpdateFeatureForm key={index} feature={data} />
      ))}
    </div>
  );
};

export default AdminPageFeaturedSectionPannel;
