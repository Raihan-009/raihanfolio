import UpdateFeatureForm from './UpdateFeatureForm';
import AddFeatureForm from './AddFeatureForm';
import FeaturedSection from '../../Featured-Section';
import { useFirebase } from '../../../contexts/FirebaseContext';

const AdminPageFeaturedSectionPannel = () => {
  const data = useFirebase();
  const featuredData = data?.AllFeatureData;
  return (
    <div className="">
      <AddFeatureForm />
      <h2 className="text-xl text-center">Update Feature</h2>
      <div className="flex gap-1 flex-wrap justify-center">
        {featuredData?.map((data, index) => (
          <UpdateFeatureForm key={index} feature={data} />
        ))}
      </div>
      <FeaturedSection />
    </div>
  );
};

export default AdminPageFeaturedSectionPannel;
