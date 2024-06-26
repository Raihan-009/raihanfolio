import { useEffect, useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import toast from 'react-hot-toast';

const UpdateFeatureForm = ({ feature }) => {
  console.log(feature);
  const [imgUrl, setImgUrl] = useState(`${feature?.img}`);
  const [newFeatureDataTitle, setNewFeatureDataTitle] = useState(
    `${feature?.title}`
  );
  const [newFeatureDataDescription, setNewFeatureDataDescription] = useState(
    `${feature?.description}`
  );
  const [uploadedImage, setUploadedImage] = useState(null);
  const [per, setPerc] = useState(null);

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

  const handleUpdateFeatureData = async (e) => {
    e.preventDefault();
    try {
      const docRef = db.collection('featuredData').doc(feature?.id);
      await docRef.update({
        title: newFeatureDataTitle,
        description: newFeatureDataDescription,
        img: imgUrl,
      });
      toast.success('Feature Data Updated Successfully');
      document.getElementById('myForm').reset();
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const deleteFeatureData = async () => {
    try {
      await deleteDoc(doc(db, 'featuredData', feature?.id));
      toast.success('Feature Data Deleted Successfully');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">update Feature</h2>
      {/* Adding Featured Data Form */}
      <form
        id="myForm"
        className="flex my-4 p-4  mx-auto flex-col gap-5 justify-center items-center bg-pink-100 text-black"
        onSubmit={handleUpdateFeatureData}
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
          src={uploadedImage ? URL.createObjectURL(uploadedImage) : imgUrl}
          alt=""
        />
        <button
          disabled={per !== null && per < 100}
          className={`border-2 bg-green-100 px-4 ${per !== null && per < 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
        >
          Add
        </button>
        <button onClick={deleteFeatureData}>delete</button>
      </form>
    </div>
  );
};

export default UpdateFeatureForm;
