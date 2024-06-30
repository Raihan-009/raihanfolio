import Form from '../../Form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { database } from '../../../config/firebase';
import { push, ref, remove, set, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../InputFields';
import { useFirebase } from '../../../contexts/FirebaseContext';
import FeatureCard from '../../Cards/Feature-Card';
import UpdateForm from '../../UpdateForm';

export const FeatureList = ({ features, handleEditFeature }) => {
  return (
    <div>
      <h2>All Features</h2>
      <div className="flex">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <FeatureCard feature={feature} />
            <Button
              text="Edit Button"
              handleClick={() => handleEditFeature(feature)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
const AddFormFields = [
  { label: 'Title', name: 'title' },
  { label: 'Description', name: 'description' },
];
const imageFolderOnCloud = { folderName: 'featured-photos' };

const AdminPageFeaturedSectionPannel = () => {
  const data = useFirebase();
  const features = data?.AllFeatureData;

  const [addFormData, setAddFormData] = useState({});
  const [updateFormData, setUpdateFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const addFeature = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const dataRef = ref(database, 'AllFeatureData');
      const newDataRef = push(dataRef);
      await set(newDataRef, { ...addFormData, id: uuidv4() });
      toast.success('Feature Data Added Successfully');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFeature = (feature) => {
    setSelectedFeature(feature);
    setUpdateFormData(feature);
  };
  const handleUpdateFeatureData = () => {
    const featureRef = ref(database, `AllFeatureData/${selectedFeature.id}`);
    update(featureRef, selectedFeature);
    setSelectedFeature(null);
  };

  //delete feature
  const handleDeleteFeature = async () => {
    try {
      const featureRef = ref(database, `AllFeatureData/${selectedFeature.id}`);
      await remove(featureRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <div className="flex ">
        <div>
          <h2 className="text-xl text-center">Add Feature</h2>
          {/* Adding Single Featured Data Form */}
          <Form
            handleSubmit={addFeature}
            loading={loading}
            setFormdata={setAddFormData}
            fields={AddFormFields}
            imageOption={imageFolderOnCloud}
          />
          <Button
            color="green"
            text="Add Feature Collection"
            position="center"
          />
        </div>
        {selectedFeature && (
          <div>
            <h2 className="text-xl text-center">Edit Feature Data</h2>
            <UpdateForm
              handleSubmit={handleUpdateFeatureData}
              loading={loading}
              setUpdateFormdata={setUpdateFormData}
              fields={AddFormFields}
              updateFormData={updateFormData}
              data={selectedFeature}
              imageOption={imageFolderOnCloud}
            />
            <Button
              color="red"
              text="Delete Feature"
              position="center"
              onClick={handleDeleteFeature}
            />
          </div>
        )}
      </div>
      <FeatureList features={features} handleEditFeature={handleEditFeature} />
    </div>
  );
};

export default AdminPageFeaturedSectionPannel;
