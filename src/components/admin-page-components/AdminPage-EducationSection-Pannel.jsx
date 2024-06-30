import { useState } from 'react';
import toast from 'react-hot-toast';
import { ref, remove, set, update } from 'firebase/database';
import Form from '../Form';
import { database } from '../../config/firebase';
import { Button } from '../InputFields';
import { useFirebase } from '../../contexts/FirebaseContext';
import { Timeline } from 'keep-react';
import UpdateForm from '../UpdateForm';
const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 9);
};
export const EducationList = ({ education, handleEditEducation }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">All Education Data</h2>
      <div className="flex">
        {education?.map((education, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Button
              text="Click To Open Edit Form"
              handleClick={() => handleEditEducation(education)}
            />
            <Timeline.Content className="flex flex-col gap-1">
              <p className="text-sm ">{education?.date}</p>
              <p className="text-sm ">{education?.location}</p>
              <p className="text-lg font-bold ">{education?.role}</p>
              <h6 className="text-2xl font-bold ">{education?.title}</h6>
              <p className=" ">{education?.description}</p>
            </Timeline.Content>
          </div>
        ))}
      </div>
    </div>
  );
};
const fields = [
  { label: 'Title', name: 'title' },
  { label: 'Description', name: 'description' },
  { label: 'Location', name: 'location' },
  { label: 'Date', name: 'date', placeholder: '2019 - 2021' },
  { label: 'Role', name: 'role', placeholder: 'User Experience Engineer' },
];
const imageFolderOnCloud = false;
const AdminPageEducationSectionPannel = () => {
  const data = useFirebase();
  const education = data?.AllEducationData;
  const [loading, setLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({});
  const [updateFormData, setUpdateFormData] = useState({});
  const [selectedEducation, setSelectedEducation] = useState(null);

  const addEducation = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setLoading(true);
      const randomId = generateRandomId();
      const dataRef = ref(database, `AllEducationData/${randomId}`);
      await set(dataRef, { ...addFormData, id: randomId });
      toast.success('Education Data Added Successfully');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditEducation = (education) => {
    setSelectedEducation(education);
    setUpdateFormData(education);
  };
  const handleUpdateEducationData = async () => {
    const dataRef = ref(database, `AllExpeienceData/${selectedEducation.id}`);
    await update(dataRef, selectedEducation);
    toast.success('Update Successful');
    setSelectedEducation(null);
  };

  //delete education
  const handleDeleteEducation = async () => {
    try {
      const dataRef = ref(database, `AllExpeienceData/${selectedEducation.id}`);
      await remove(dataRef);
      toast.success('Delete Successful');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <div className="flex  justify-center items-center">
        <div>
          <h2 className="text-xl text-center">Add Education</h2>
          {/* Adding Single Featured Data Form */}
          <Form
            handleSubmit={addEducation}
            loading={loading}
            setFormdata={setAddFormData}
            fields={fields}
            imageOption={imageFolderOnCloud}
          />
          <Button
            color="green"
            text="Add Education Collection"
            position="center"
          />
        </div>
        {selectedEducation && (
          <div>
            <h2 className="text-xl text-center">Edit Project Data</h2>
            <UpdateForm
              handleSubmit={handleUpdateEducationData}
              loading={loading}
              setUpdateFormdata={setUpdateFormData}
              fields={fields}
              updateFormData={updateFormData}
              data={selectedEducation}
              imageOption={imageFolderOnCloud}
            />
            <Button
              color="red"
              text="Delete Project"
              position="center"
              handleClick={handleDeleteEducation}
            />
          </div>
        )}
      </div>
      <EducationList
        education={education}
        handleEditEducation={handleEditEducation}
      />
    </div>
  );
};

export default AdminPageEducationSectionPannel;
