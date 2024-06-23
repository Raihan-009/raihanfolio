import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import toast from 'react-hot-toast';

const AdminPageEducationSectionPannel = () => {
  const [newEducationCardTitle, setNewEducationCardTitle] = useState('');
  const [newEducationCardDescription, setNewEducationCardDescription] =
    useState('');
  const [graduationYearRange, setGraduationYearRange] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');

  const allEducationDataCollectionRef = collection(db, 'AllEducationCardData');

  const handleAddEducationCardData = async (e) => {
    e.preventDefault();
    const newEducationCardData = {
      title: newEducationCardTitle,
      description: newEducationCardDescription,
      date: graduationYearRange,
      location: location,
      role: role,
      createdAt: serverTimestamp(),
    };
    try {
      await addDoc(allEducationDataCollectionRef, newEducationCardData);
      setNewEducationCardTitle('');
      setNewEducationCardDescription('');
      setGraduationYearRange('');
      setRole('');
      setLocation('');
      toast.success('Education Card Added Successfully');
      document.getElementById('myForm').reset();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl text-center">Add Education Card Info</h2>
      {/* Adding Education Card Data Form */}
      <form
        id="myForm"
        className="flex my-4 p-4  mx-auto flex-col gap-5 justify-center items-center bg-blue-100 text-black"
        onSubmit={handleAddEducationCardData}
      >
        <input
          type="text"
          required
          value={newEducationCardTitle}
          placeholder="Education Card Title"
          onChange={(e) => {
            setNewEducationCardTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          required
          placeholder="Education Card Description"
          value={newEducationCardDescription}
          onChange={(e) => {
            setNewEducationCardDescription(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Graduation Year Range "
          value={graduationYearRange}
          onChange={(e) => {
            setGraduationYearRange(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <button className={'border-2 bg-green-100 px-4'} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AdminPageEducationSectionPannel;
