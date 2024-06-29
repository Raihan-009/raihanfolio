import Form from '../../Form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { database } from '../../../config/firebase';
import { push, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const fields = [
  { label: 'Title', name: 'title' },
  { label: 'Description', name: 'description' },
];
const imageFolderOnCloud = { folderName: 'featured-photos' };
const AddFeatureForm = () => {
  const [formData, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(formData);

  const addFeature = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const dataRef = ref(database, 'AllFeatureData');
      const newDataRef = push(dataRef);
      await set(newDataRef, { ...formData, id: uuidv4() });
      toast.success('Feature Data Added Successfully');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">Add Feature</h2>
      {/* Adding Featured Data Form */}
      <Form
        handleSubmit={addFeature}
        loading={loading}
        setFormdata={setFormdata}
        fields={fields}
        imageOption={imageFolderOnCloud}
      />
    </div>
  );
};

export default AddFeatureForm;
