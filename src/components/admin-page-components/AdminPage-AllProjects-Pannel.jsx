import { useState } from 'react';
import toast from 'react-hot-toast';
import { ref, remove, set, update } from 'firebase/database';
import ProjectCard from '../Cards/Project-Card';
import Form from '../Form';
import { database } from '../../config/firebase';
import { Button } from '../InputFields';
import { useFirebase } from '../../contexts/FirebaseContext';
import UpdateForm from '../UpdateForm';
const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 9);
};
export const ProjectList = ({ projects, handleEditProject }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">All Experiences</h2>
      <div className="flex justify-center items-center gap-2 p-4">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Button
              text="Click To Open Edit Form"
              handleClick={() => handleEditProject(project)}
            />
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};
const imageFolderOnCloud = { folderName: 'project-photos' };

const AdminPageAllProjectsPannel = () => {
  const data = useFirebase();
  const projects = data?.AllProjectData;

  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({});
  const [updateFormData, setUpdateFormData] = useState({});

  const AddFormFields = [
    { label: 'Title', name: 'title' },
    { label: 'Start Date', name: 'startDate', placeholder: 'June 2021' },
    { label: 'Endt Date', name: 'endDate', placeholder: 'June 2021' },
    { label: 'Description', name: 'description' },
  ];

  const addProject = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const randomId = generateRandomId();
      const dataRef = ref(database, `AllProjectData/${randomId}`);
      await set(dataRef, { ...addFormData, id: randomId });
      toast.success('Project Data Added Successfully');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setUpdateFormData(project);
  };
  const handleUpdateProjectData = async () => {
    const dataRef = ref(database, `AllProjectData/${selectedProject.id}`);
    await update(dataRef, updateFormData);
    toast.success('Update Successful');
    setSelectedProject(null);
  };

  //delete project
  const handleDeleteProject = async () => {
    try {
      const dataRef = ref(database, `AllProjectData/${selectedProject.id}`);
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
          <h2 className="text-xl text-center">Add Project</h2>
          {/* Adding Single Featured Data Form */}
          <Form
            handleSubmit={addProject}
            loading={loading}
            setFormdata={setAddFormData}
            fields={AddFormFields}
            imageOption={imageFolderOnCloud}
          />
          <Button
            color="green"
            text="Add Project Collection"
            position="center"
          />
        </div>
        {selectedProject && (
          <div>
            <h2 className="text-xl text-center">Edit Project Data</h2>
            <UpdateForm
              handleSubmit={handleUpdateProjectData}
              loading={loading}
              setUpdateFormdata={setUpdateFormData}
              fields={AddFormFields}
              updateFormData={updateFormData}
              data={selectedProject}
              imageOption={imageFolderOnCloud}
            />
            <Button
              color="red"
              text="Delete Project"
              position="center"
              onClick={handleDeleteProject}
            />
          </div>
        )}
      </div>
      <ProjectList projects={projects} handleEditProject={handleEditProject} />
    </div>
  );
};

export default AdminPageAllProjectsPannel;
