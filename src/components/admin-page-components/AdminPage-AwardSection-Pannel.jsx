import { useState } from 'react';
import toast from 'react-hot-toast';
import { push, ref, remove, set, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import AwardCard from '../Cards/Award-Card';
import Form from '../Form';
import { database } from '../../config/firebase';
import { Button } from '../InputFields';
import { useFirebase } from '../../contexts/FirebaseContext';
import UpdateForm from '../UpdateForm';
export const AwardList = ({ awards, handleEditAward }) => {
  return (
    <div>
      <h2>All Awards</h2>
      <div className="">
        {awards?.map((award, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 p-4"
          >
            <AwardCard award={award} />
            <Button
              text="Edit Button"
              handleClick={() => handleEditAward(award)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
const fields = [
  { label: 'Title', name: 'title' },
  { label: 'Platform', name: 'platform' },
  { label: 'Date', name: 'date', placeholder: 'June 2021' },
];
const imageFolderOnCloud = { folderName: 'award-photos' };

const AdminPageAwardSectionPannel = () => {
  const data = useFirebase();
  const awards = data?.AllAwardData;

  const [loading, setLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({});
  const [updateFormData, setUpdateFormData] = useState({});
  const [selectedAward, setSelectedAward] = useState(null);

  const addAward = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const dataRef = ref(database, 'AllAwardData');
      const newDataRef = push(dataRef);
      await set(newDataRef, { ...addFormData, id: uuidv4() });
      toast.success('Award Data Added Successfully');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditAward = (award) => {
    setSelectedAward(award);
    setUpdateFormData(award);
  };
  const handleUpdateAwardData = () => {
    const dataRef = ref(database, `AllAwardData/${selectedAward.id}`);
    update(dataRef, selectedAward);
    setSelectedAward(null);
  };

  //delete award
  const handleDeleteAward = async () => {
    try {
      const dataRef = ref(database, `AllAwardData/${selectedAward.id}`);
      await remove(dataRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <div className="flex ">
        <div>
          <h2 className="text-xl text-center">Add Award</h2>
          {/* Adding Single Featured Data Form */}
          <Form
            handleSubmit={addAward}
            loading={loading}
            setFormdata={setAddFormData}
            fields={fields}
            imageOption={imageFolderOnCloud}
          />
          <Button color="green" text="Add Award Collection" position="center" />
        </div>
        {selectedAward && (
          <div>
            <h2 className="text-xl text-center">Edit Project Data</h2>
            <UpdateForm
              handleSubmit={handleUpdateAwardData}
              loading={loading}
              setUpdateFormdata={setUpdateFormData}
              fields={fields}
              updateFormData={updateFormData}
              data={selectedAward}
              imageOption={imageFolderOnCloud}
            />
            <Button
              color="red"
              text="Delete Project"
              position="center"
              onClick={handleDeleteAward}
            />
          </div>
        )}
      </div>
      <AwardList awards={awards} handleEditAward={handleEditAward} />
    </div>
  );
};

export default AdminPageAwardSectionPannel;
