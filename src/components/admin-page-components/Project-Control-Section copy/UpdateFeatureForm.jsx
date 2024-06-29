import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../../InputFields';
import Form from '../../Form';
import { ref, remove, update } from 'firebase/database';
import { database } from '../../../config/firebase';

const UpdateFeatureForm = ({ feature }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(formData);
  const fields = [
    { label: 'Title', name: 'title', value: feature?.title },
    { label: 'Description', name: 'description', value: feature?.description },
  ];
  const imageFolderOnCloud = { folderName: 'featured-photos' };
  //update data to firestore
  const handleUpdateFeatureData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const dataRef = ref(database, `AllFeatureData/${feature.id}`);
      await update(dataRef, { formData });
      setLoading(false);
      toast.success('Feature Data Updated Successfully');
      document.getElementById('myForm').reset();
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };
  //delete data from firestore
  const deleteFeatureData = async () => {
    try {
      const projectRef = ref(database, `AllProjectData/${feature.id}`);
      await remove(projectRef);
      toast.success('Feature Data Deleted Successfully');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div className="my-4">
      {/* Update Featured Data Form */}
      <Form
        handleSubmit={handleUpdateFeatureData}
        setFormData={setFormData}
        fields={fields}
        imageUrl={feature?.image}
        imageOption={imageFolderOnCloud}
        loading={loading}
        data={feature}
      />
      <Button
        color="red"
        text="Delete This Feature"
        position="center"
        per={null}
        onClick={deleteFeatureData}
      />
    </div>
  );
};

export default UpdateFeatureForm;
