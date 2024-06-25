import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import toast from 'react-hot-toast';

const AddFeatureForm = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [newFeatureDataTitle, setNewFeatureDataTitle] = useState('');
  const [newFeatureDataDescription, setNewFeatureDataDescription] =
    useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [per, setPerc] = useState(null);

  const featuredDataCollectionRef = collection(db, 'featuredData');

  useEffect(() => {
    const uploadFile = () => {
      const uploadedImageName = new Date().getTime() + uploadedImage.name;
      const featuredPhotoFolderRef = ref(
        storage,
        `featured-photos/${uploadedImageName}`
      );
      const uploadTask = uploadBytesResumable(
        featuredPhotoFolderRef,
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

  const handleAddFeatureData = async (e) => {
    e.preventDefault();
    const newFeatureData = {
      title: newFeatureDataTitle,
      description: newFeatureDataDescription,
      img: imgUrl,
      createdAt: serverTimestamp(),
    };
    try {
      await addDoc(featuredDataCollectionRef, newFeatureData);
      setNewFeatureDataTitle('');
      setNewFeatureDataDescription('');
      setUploadedImage(null);
      setPerc(null);
      toast.success('Feature Data Added Successfully');
      document.getElementById('myForm').reset();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">Add Feature</h2>
      {/* Adding Featured Data Form */}
      <form
        id="myForm"
        className="flex my-4 p-4  mx-auto flex-col gap-5 justify-center items-center bg-pink-100 text-black"
        onSubmit={handleAddFeatureData}
      >
        <input
          type="text"
          required
          value={newFeatureDataTitle}
          placeholder="Feature Title"
          onChange={(e) => {
            setNewFeatureDataTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          required
          placeholder="Feature Description"
          value={newFeatureDataDescription}
          onChange={(e) => {
            setNewFeatureDataDescription(e.target.value);
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

export default AddFeatureForm;
