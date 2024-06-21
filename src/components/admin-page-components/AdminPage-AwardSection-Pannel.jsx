import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import toast from 'react-hot-toast';

const AdminPageAwardSectionPannel = () => {
  const [imgUrl, setImgUrl] = useState('');

  const [newAwardTitle, setNewAwardTitle] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [platform, setPlatform] = useState('');
  const [per, setPerc] = useState(null);
  const [awardGettingDate, setAwardGettingDate] = useState('');

  const allAwardsDataCollectionRef = collection(db, 'AllAwardsData');

  useEffect(() => {
    const uploadFile = () => {
      const uploadedImageName = new Date().getTime() + uploadedImage.name;
      const awardsPhotoFolderRef = ref(
        storage,
        `awards-photos/${uploadedImageName}`
      );
      const uploadTask = uploadBytesResumable(
        awardsPhotoFolderRef,
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

  const handleAddAwardData = async (e) => {
    e.preventDefault();
    try {
      const newFeatureData = {
        title: newAwardTitle,
        img: imgUrl,
        platform: platform,
        date: awardGettingDate,
        createdAt: serverTimestamp(),
      };
      await addDoc(allAwardsDataCollectionRef, newFeatureData);
      setNewAwardTitle('');
      setPlatform('');
      setAwardGettingDate('');
      setUploadedImage(null);
      setPerc(null);
      toast.success('Award Added Successfully');
      document.getElementById('myForm').reset();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl text-center">Add Award</h2>
      {/* Adding Awards Data Form */}
      <form
        id="myForm"
        className="flex my-4 p-4  mx-auto flex-col gap-5 justify-center items-center bg-blue-100 text-black"
        onSubmit={handleAddAwardData}
      >
        <input
          type="text"
          required
          value={newAwardTitle}
          placeholder="Award Title"
          onChange={(e) => {
            setNewAwardTitle(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Platform Name"
          value={platform}
          onChange={(e) => {
            setPlatform(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Date of Getting Award"
          value={awardGettingDate}
          onChange={(e) => {
            setAwardGettingDate(e.target.value);
          }}
        />
        <input
          type="file"
          required
          onChange={(e) => {
            setUploadedImage(e.target.files[0]);
          }}
        />
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

export default AdminPageAwardSectionPannel;
