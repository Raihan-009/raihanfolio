import { useState } from 'react';
import toast from 'react-hot-toast';
import { ref, remove, set, update } from 'firebase/database';
import FeatureCard from '../Cards/Feature-Card';
import { Button } from '../InputFields';
import { database } from '../../config/firebase';
import Form from '../Form';
import UpdateForm from '../UpdateForm';
import { useFirebase } from '../../contexts/FirebaseContext';
const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 9);
};
export const FeatureList = ({ features, handleEditFeature }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">All Features</h2>
      <div className="flex">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Button
              text="Click To Open Edit Form"
              handleClick={() => handleEditFeature(feature)}
            />
            <FeatureCard feature={feature} />
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
      const randomId = generateRandomId();
      const dataRef = ref(database, `AllFeatureData/${randomId}`);
      await set(dataRef, { ...addFormData, id: randomId });
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
  const handleUpdateFeatureData = async (e) => {
    e.preventDefault();
    const featureRef = ref(database, `AllFeatureData/${selectedFeature.id}`);
    await update(featureRef, updateFormData);
    toast.success('Update Successful');
    setSelectedFeature(null);
  };

  //delete feature
  const handleDeleteFeature = async () => {
    try {
      const featureRef = ref(database, `AllFeatureData/${selectedFeature.id}`);
      await remove(featureRef);
      toast.success('Delete Successful');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <div className="flex justify-center items-center">
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
              handleClick={handleDeleteFeature}
            />
          </div>
        )}
      </div>
      <FeatureList features={features} handleEditFeature={handleEditFeature} />
    </div>
  );
};

export default AdminPageFeaturedSectionPannel;
