import { useState, useEffect } from 'react';
import { ref, set, push, onValue, update, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../config/firebase';
const AllProjectData = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9ce8ed48-9b44-4cf2-8d90-c4927c48d675',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    startDate: 'June 2021',
    endDate: 'July 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=78194478-9b44-4cf2-8d90-c4927c48d675',
    title: 'Software Structure',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    startDate: 'June 2021',
    endDate: 'July 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9678194479b44-4cf2-8d90-c4927c48d675',
    title: 'Software Structure',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    startDate: 'June 2021',
    endDate: 'July 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9896781944744-4cf2-8d90-c4927c48d675',
    title: 'Software Structure',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    startDate: 'June 2021',
    endDate: 'July 2021',
  },
];
const AllBlogData = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9ce8967819447-4cf2-8d90-c4927c48d675',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Networking',
    date: 'June 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9ce8e8967819447cf2-8d90-c4927c48d675',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Python 3 Programming specialization',
    date: 'June 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9ce8ed489678194472-8d90-c4927c48d675',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Networking',
    date: 'June 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9ce8ed48-89678194478d90-c4927c48d675',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Crash course on Python',
    date: 'June 2021',
  },
];
const AllExperienceData = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/experience-photos%2F171960050136510308628-18361499.jpg?alt=media&token=11d78766-946f-4bbe-a4dc-b3fd3acf6521',
    title: 'Oter',
    date: '2019 - 2023',
    description:
      'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
    location: 'Deligite Company Limited, Bangladesh',
    role: 'User Experience Engineer',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/experience-photos%2F171960050136510308628-18361499.jpg?alt=media&token=11d78766-946f-4bbe-a4dc-b3fd3acf6521',
    title: 'Oter',
    date: '2023 - present',
    description:
      'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
    location: 'Dhaka, Bangladesh',
    role: 'User Experience Engineer',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/experience-photos%2F171960050136510308628-18361499.jpg?alt=media&token=11d78766-946f-4bbe-a4dc-b3fd3acf6521',
    title: 'Oter',
    date: '2019 - 2023',
    description:
      'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
    location: 'Amsterdam, North-Holland',
    role: 'Devops Engineer',
  },
];
const AllFeatureData = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9ce8ed48-9b896781944790-c4927c48d675',
    title: 'Software Structure',
    description:
      'The term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=9ce8ed48-9b448967819447-c4927c48d675',
    title: 'GitHub Structure',
    description:
      'The term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=e8ed48-9b44-489678194474927c48d675',
    title: 'Amazon Structure',
    description:
      'The term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718967819447flower-729512.jpg?alt=media&token=dsed48-9b44-4cf896781944727c48d675',
    title: 'Google Structure',
    description:
      'DescriThe term eBPF stands for extended Berkeley Packet Filter, is a time to technology that can run programs in a privileged context or allow developers time for ndow dieejie develop now done oe.ption',
  },
];
const AllEducationData = [
  {
    title: 'Oter',
    date: '2019 - 2023',
    description:
      'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
    location: 'Deligite Company Limited, Bangladesh',
    role: 'User Experience Engineer',
  },
  {
    title: 'Oter',
    date: '2023 - present',
    description:
      'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
    location: 'Dhaka, Bangladesh',
    role: 'User Experience Engineer',
  },
  {
    title: 'Oter',
    date: '2019 - 2023',
    description:
      'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
    location: 'Amsterdam, North-Holland',
    role: 'Devops Engineer',
  },
  {
    title: 'Oter',
    date: '2019 - 2023',
    description:
      'Oter is a Micro book app to improve your professional and personal growth through book knowledge',
    location: 'Dhaka, Bangladesh',
    role: 'Experience Engineer',
  },
];
const AllAwardData = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718969793445flower-729512.jpg?alt=media&token=3a1a4744-72ab-4182-821c-74fb6411e24e',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Python 3 Programming specialization',
    date: 'June 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718969793445flower-729512.jpg?alt=media&token=3a1a4744-72ab-4182-821c-74fb6411e24e',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Networking',
    date: 'June 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718969793445flower-729512.jpg?alt=media&token=3a1a4744-72ab-4182-821c-74fb6411e24e',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Networking',
    date: 'June 2021',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/raihanfolio-731d6.appspot.com/o/awards-photos%2F1718969793445flower-729512.jpg?alt=media&token=3a1a4744-72ab-4182-821c-74fb6411e24e',
    description:
      "Almost all of you are familiar with the dinosaur game which is used play in google chrome in both offline or online.So I have tried to develop a gamebot named 'dinosaurBot' which can play automatically.",
    title: 'Crash course on Python',
    date: 'June 2021',
  },
];
const Test = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    image: '',
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  //to select to update
  const [currentProject, setCurrentProject] = useState(null);
  //GET ALL PROJECTS********************************
  useEffect(() => {
    const projectsRef = ref(database, 'AllProjectData');
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setProjects(formattedData);
      }
    });
  }, []);

  //CREATE single project********************************
  //handle input to add single project data
  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };
  //add single project function
  const handleAddSingleProject = () => {
    const projectsRef = ref(database, 'projects');
    const newProjectRef = push(projectsRef);
    set(newProjectRef, { ...newProject, id: uuidv4() });
    setNewProject({
      image: '',
      title: '',
      description: '',
      startDate: '',
      endDate: '',
    });
  };
  //CREATE Project Collection button********************************
  const handleAddProject = () => {
    const projectsRef = ref(database, 'AllProjectData');
    AllProjectData.forEach((project) => {
      const newProjectRef = push(projectsRef);
      set(newProjectRef, { ...project, id: uuidv4() });
    });
  };

  //update project******************************
  //select for opening form
  const handleEditProject = (project) => {
    setCurrentProject(project);
  };
  //update data function
  const handleUpdateProject = () => {
    const projectRef = ref(database, `AllProjectData/${currentProject.id}`);
    update(projectRef, currentProject);
    setCurrentProject(null);
  };
  //getting data from input for update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };
  //delete project********************************
  //delete data function
  const handleDeleteProject = () => {
    const projectRef = ref(database, `AllProjectData/${currentProject.id}`);
    remove(projectRef);
  };

  return (
    <div className="bg-orange-600 text-black text-2xl text-center">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProject.title}
          onChange={handleNewProjectChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProject.description}
          onChange={handleNewProjectChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={newProject.startDate}
          onChange={handleNewProjectChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={newProject.endDate}
          onChange={handleNewProjectChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProject.image}
          onChange={handleNewProjectChange}
        />
      </div>
      <button onClick={handleAddSingleProject}>
        Add Single Project Button
      </button>
      <div className="bg-slate-400">
        <button onClick={handleAddProject}>
          Add Project Collection Button
        </button>
      </div>
      {currentProject && (
        <div className="bg-indigo-800">
          <h2>Edit Project</h2>
          <input
            type="text"
            name="title"
            value={currentProject.title || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={currentProject.description || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="startDate"
            value={currentProject.startDate || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="endDate"
            value={currentProject.endDate || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            value={currentProject.image || ''}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleUpdateProject}>Update Project Button</button>
          <button onClick={handleDeleteProject}>Delete Project Button</button>
        </div>
      )}
      <div className="bg-lime-500">
        <h2>All Projects</h2>
        {projects.map((project) => (
          <div className="bg-zinc-100 border-2 border-red-100" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              {project.startDate} - {project.endDate}
            </p>
            <img src={project.image} alt={project.title} width="100" />
            <button onClick={() => handleEditProject(project)}>
              Edit Button
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Test;
