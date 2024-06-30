import Form from '../../Form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { database } from '../../../config/firebase';
import { push, ref, remove, set, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../InputFields';
import { useFirebase } from '../../../contexts/FirebaseContext';
export const FeatureList = ({ features, handleEditFeature }) => {
  return (
    <div>
      <h2>All Features</h2>
      {features?.map((feature) => (
        <div
          className="bg-zinc-100 border-2 border-red-100"
          key={feature.title}
        >
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <img src={feature.image} alt={feature.title} width="100" />
          <button onClick={() => handleEditFeature(feature)}>
            Edit Button
          </button>
        </div>
      ))}
    </div>
  );
};
const imageFolderOnCloud = { folderName: 'featured-photos' };
const AddFeatureForm = () => {
  const [formData, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  console.log(formData);
  const data = useFirebase();
  const features = data?.AllFeatureData;
  const addFields = [
    { label: 'Title', name: 'title' },
    { label: 'Description', name: 'description' },
  ];
  const updateFields = [
    { label: 'Title', name: 'title', value: selectedFeature?.title },
    {
      label: 'Description',
      name: 'description',
      value: selectedFeature?.description,
    },
  ];
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
  const handleEditFeature = (project) => {
    setSelectedFeature(project);
    console.log(selectedFeature);
  };
  const handleUpdateProject = () => {
    const projectRef = ref(database, `AllProjectData/${selectedFeature.id}`);
    update(projectRef, selectedFeature);
    setSelectedFeature(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  //delete project
  const handleDeleteProject = async () => {
    try {
      const projectRef = ref(database, `AllProjectData/${selectedFeature.id}`);
      await remove(projectRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">Add Feature</h2>
      {/* Adding Single Featured Data Form */}
      <Form
        handleSubmit={addFeature}
        loading={loading}
        setFormdata={setFormdata}
        fields={addFields}
        imageOption={imageFolderOnCloud}
      />
      <Button color="green" text="Add Feature Collection" position="center" />
      {selectedFeature && (
        <>
          <h2 className="text-xl text-center">Update Feature</h2>
          <Form
            handleSubmit={addFeature}
            loading={loading}
            setFormdata={setFormdata}
            fields={updateFields}
            imageOption={imageFolderOnCloud}
            imageUrl={selectedFeature?.image}
          />
          <Button
            color="green"
            text="Add Feature Collection"
            position="center"
          />
          <div className="bg-black important">
            <h2>Edit Project</h2>
            <input
              type="text"
              name="title"
              value={selectedFeature.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              value={selectedFeature.description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="startDate"
              value={selectedFeature.startDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="endDate"
              value={selectedFeature.endDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="image"
              value={selectedFeature.image}
              onChange={handleChange}
            />
            <br />
            <button onClick={handleUpdateProject}>Update Project Button</button>
            <button onClick={handleDeleteProject}>Delete Project Button</button>
          </div>
        </>
      )}
      <FeatureList features={features} handleEditFeature={handleEditFeature} />
    </div>
  );
};

export default AddFeatureForm;
