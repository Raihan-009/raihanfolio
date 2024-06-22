import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import toast from 'react-hot-toast';

const AdminPageBlogPannel = () => {
  const [imgUrl, setImgUrl] = useState('');

  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogDescription, setNewBlogDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [per, setPerc] = useState(null);

  const allBlogsDataCollectionRef = collection(db, 'AllBlogsData');

  useEffect(() => {
    const uploadFile = () => {
      const uploadedImageName = new Date().getTime() + uploadedImage.name;
      const blogsPhotoFolderRef = ref(
        storage,
        `blog-photos/${uploadedImageName}`
      );
      const uploadTask = uploadBytesResumable(
        blogsPhotoFolderRef,
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

  const handleAddBlogData = async (e) => {
    e.preventDefault();
    const newBlogData = {
      title: newBlogTitle,
      description: newBlogDescription,
      image: imgUrl,
      date: publishedDate,
      createdAt: serverTimestamp(),
    };
    try {
      await addDoc(allBlogsDataCollectionRef, newBlogData);
      setNewBlogTitle('');
      setNewBlogDescription('');
      setPublishedDate('');
      setUploadedImage(null);
      setPerc(null);
      toast.success('Blog Added Successfully');
      document.getElementById('myForm').reset();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl text-center">Add Blog</h2>
      {/* Adding Projects Data Form */}
      <form
        id="myForm"
        className="flex my-4 p-4  mx-auto flex-col gap-5 justify-center items-center bg-blue-100 text-black"
        onSubmit={handleAddBlogData}
      >
        <input
          type="text"
          required
          value={newBlogTitle}
          placeholder="Blog Title"
          onChange={(e) => {
            setNewBlogTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          required
          placeholder="Blog Description"
          value={newBlogDescription}
          onChange={(e) => {
            setNewBlogDescription(e.target.value);
          }}
        />
        <input
          type="text"
          required
          placeholder="Blog Published Date"
          value={publishedDate}
          onChange={(e) => {
            setPublishedDate(e.target.value);
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

export default AdminPageBlogPannel;
