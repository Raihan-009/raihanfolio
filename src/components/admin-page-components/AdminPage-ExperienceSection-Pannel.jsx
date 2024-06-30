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
export const ExperienceList = ({ experiences, handleEditExperience }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">All Experiences</h2>
      <div className="flex justify-center items-center gap-2 p-4">
        {experiences?.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Button
              text="Click To Open Edit Form"
              handleClick={() => handleEditExperience(experience)}
            />
            <Timeline.Content className="flex flex-col gap-1">
              <img
                src={experience?.image}
                alt=""
                className="aspect-auto object-cover"
              />
              <p className="text-sm ">{experience?.date}</p>
              <p className="text-sm ">{experience?.location}</p>
              <p className="text-lg font-bold ">{experience?.role}</p>
              <h6 className="text-2xl font-bold ">{experience?.title}</h6>
              <p className=" ">{experience?.description}</p>
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
  { label: 'Role', name: 'role', placeholder: 'Frontend Developer' },
];
const imageFolderOnCloud = { folderName: 'experience-photos' };

const AdminPageExperienceSectionPannel = () => {
  const data = useFirebase();
  const experiences = data?.AllExperienceData;
  const [loading, setLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({});
  const [updateFormData, setUpdateFormData] = useState({});
  const [selectedExperience, setSelectedExperience] = useState(null);
  const addExperience = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const randomId = generateRandomId();
      const dataRef = ref(database, `AllExperienceData/${randomId}`);
      await set(dataRef, { ...addFormData, id: randomId });
      toast.success('Experience Data Added Successfully');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditExperience = (experience) => {
    setSelectedExperience(experience);
    setUpdateFormData(experience);
  };
  const handleUpdateExperienceData = async () => {
    const dataRef = ref(database, `AllExpeienceData/${selectedExperience.id}`);
    await update(dataRef, selectedExperience);
    toast.success('Update Successful');
    setSelectedExperience(null);
  };

  //delete experience
  const handleDeleteExperience = async () => {
    try {
      const dataRef = ref(
        database,
        `AllExpeienceData/${selectedExperience.id}`
      );
      await remove(dataRef);
      toast.success('Delete Successful');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-xl text-center">Add Experience</h2>
          {/* Adding Single Featured Data Form */}
          <Form
            handleSubmit={addExperience}
            loading={loading}
            setFormdata={setAddFormData}
            fields={fields}
            imageOption={imageFolderOnCloud}
          />
          <Button
            color="green"
            text="Add Experience Collection"
            position="center"
          />
        </div>
        {selectedExperience && (
          <div>
            <h2 className="text-xl text-center">Edit Project Data</h2>
            <UpdateForm
              handleSubmit={handleUpdateExperienceData}
              loading={loading}
              setUpdateFormdata={setUpdateFormData}
              fields={fields}
              updateFormData={updateFormData}
              data={selectedExperience}
              imageOption={imageFolderOnCloud}
            />
            <Button
              color="red"
              text="Delete Project"
              position="center"
              handleClick={handleDeleteExperience}
            />
          </div>
        )}
      </div>
      <ExperienceList
        experiences={experiences}
        handleEditExperience={handleEditExperience}
      />
    </div>
  );
};

export default AdminPageExperienceSectionPannel;
