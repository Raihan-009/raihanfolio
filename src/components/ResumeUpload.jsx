// src/ResumeUpload.js
import { useEffect, useState } from 'react';
import { database, storage } from '../config/firebase';
import { get, ref, set } from 'firebase/database';
import toast from 'react-hot-toast';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [urlFromDatabase, setUrlFromDatabase] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const addUrlToDatabase = (url) => {
    try {
      const dataRef = ref(database, 'Resume');
      set(dataRef, { resumelink: url });
      toast.success('Resume Added Successfully');
    } catch (error) {
      console.log(error);
    }
  };
  const getDownloadURLFromDatabase = async () => {
    try {
      const dataRef = ref(database, 'Resume');
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const resumeLink = snapshot.val().resumelink;
        setUrlFromDatabase(resumeLink);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error(error);
      },
      () => {
        storage
          .ref('files')
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            addUrlToDatabase(url);
          });
      }
    );
  };

  useEffect(() => {
    getDownloadURLFromDatabase();
  }, []);

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {urlFromDatabase && (
        <a href={urlFromDatabase} download>
          Download PDF
        </a>
      )}
    </div>
  );
}

export default ResumeUpload;
