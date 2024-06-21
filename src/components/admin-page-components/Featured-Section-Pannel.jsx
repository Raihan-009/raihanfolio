import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const FeaturedSectionPannel = () => {
  const [data, setData] = useState({});

  const [newFeatureDataTitle, setNewFeatureDataTitle] = useState('');
  const [newFeatureDataDescription, setNewFeatureDataDescription] =
    useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [per, setPerc] = useState(null);

  const featuredDataCollectionRef = collection(db, 'featuredData');

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + uploadedImage.name;
      console.log(name);
      const featuredPhotoFolderRef = ref(
        storage,
        `featured-photos/${uploadedImage?.name}`
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
            setData((prev) => ({ ...prev, img: downloadURL }));
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
      img: data.img,
      createdAt: serverTimestamp(),
    };
    try {
      await addDoc(featuredDataCollectionRef, newFeatureData);
      setNewFeatureDataTitle('');
      setNewFeatureDataDescription('');
      setUploadedImage(null);
      setPerc(null);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return (
    <div className="my-4">
      <h2>FeaturedSection Data</h2>
      {/* Adding Featured Data Form */}

      <form
        className="flex my-4 p-4  mx-auto flex-col gap-5 justify-center items-center bg-yellow-50 text-black"
        onSubmit={handleAddFeatureData}
      >
        <input
          type="text"
          required
          value={newFeatureDataTitle}
          placeholder="Title"
          onChange={(e) => {
            setNewFeatureDataTitle(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Description"
          value={newFeatureDataDescription}
          onChange={(e) => {
            setNewFeatureDataDescription(e.target.value);
          }}
        />
        <div className="">
          <input
            type="file"
            required
            onChange={(e) => {
              setUploadedImage(e.target.files[0]);
            }}
          />
        </div>
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
          className="border-2 bg-green-100 px-4"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default FeaturedSectionPannel;
