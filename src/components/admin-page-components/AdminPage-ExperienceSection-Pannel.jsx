import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import toast from 'react-hot-toast';

const AdminPageExperienceSectionPannel = () => {
  const [imgUrl, setImgUrl] = useState('');

  const [newExperienceTitle, setNewExperienceTitle] = useState('');
  const [newExperienceDescription, setNewExperienceDescription] = useState('');
  const [workingYearRange, setWorkingYearRange] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [per, setPerc] = useState(null);

  const allExperiencesDataCollectionRef = collection(db, 'AllExperiencesData');

  useEffect(() => {
    const uploadFile = () => {
      const uploadedImageName = new Date().getTime() + uploadedImage.name;
      const experiencesPhotoFolderRef = ref(
        storage,
        `experience-photos/${uploadedImageName}`
      );
      const uploadTask = uploadBytesResumable(
        experiencesPhotoFolderRef,
        uploadedImage
      );

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL);
          });
        }
      );
    };
    uploadedImage && uploadFile();
  }, [uploadedImage]);

  const handleAddExperienceData = async (e) => {
    e.preventDefault();
    const newExperienceData = {
      title: newExperienceTitle,
      description: newExperienceDescription,
      image: imgUrl,
      date: workingYearRange,
      location: location,
      role: role,
      createdAt: serverTimestamp(),
    };
    try {
      await addDoc(allExperiencesDataCollectionRef, newExperienceData);
      setNewExperienceTitle('');
      setNewExperienceDescription('');
      setWorkingYearRange('');
      setRole('');
      setLocation('');
      setUploadedImage(null);
      setPerc(null);
      toast.success('Experience Added Successfully');
      document.getElementById('myForm').reset();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl text-center">Add Experience</h2>
      {/* Adding Experieneces Data Form */}
      <form
        id="myForm"
        className="flex my-4 p-4  mx-auto flex-col gap-5 justify-center items-center bg-blue-100 text-black"
        onSubmit={handleAddExperienceData}
      >
        <input
          type="text"
          required
          value={newExperienceTitle}
          placeholder="Experience Title"
          onChange={(e) => {
            setNewExperienceTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          required
          placeholder="Experience Description"
          value={newExperienceDescription}
          onChange={(e) => {
            setNewExperienceDescription(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Working Year Range "
          value={workingYearRange}
          onChange={(e) => {
            setWorkingYearRange(e.target.value);
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
        <input
          type="file"
          required
          onChange={(e) => {
            setUploadedImage(e.target.files[0]);
          }}
        />
        {per}
        <img
          height={'200px'}
          width={'200px'}
          src={
            uploadedImage
              ? URL.createObjectURL(uploadedImage)
              : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
          }
          alt=""
        />
        <button
          disabled={per !== null && per < 100}
          className={`border-2 bg-green-100 px-4 ${per !== null && per < 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AdminPageExperienceSectionPannel;
