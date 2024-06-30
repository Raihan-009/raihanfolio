import { useEffect } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../config/firebase';

export const TextInputField = ({
  label,
  placeholder,
  setFormData,
  name,
  value,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <label className="text-white-600 dark:text-white-400">{label}</label>
      <input
        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-white-600 dark:text-black"
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        required
        onChange={handleChange}
      />
    </div>
  );
};
export const TextAreaField = ({
  label,
  placeholder,
  setFormData,
  name,
  value,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <label className="text-white-600 dark:text-white-400">{label}</label>
      <textarea
        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-white-600 dark:text-black"
        required
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
export const FileInputField = ({
  document,
  requirement,
  setDocument,
  setPerc,
  setFormdata,
  imageOption,
}) => {
  //upload file to firebase storage
  useEffect(() => {
    const uploadFile = async () => {
      const uploadedImageName = new Date().getTime() + document.name;
      const storageFolderName = imageOption
        ? imageOption.folderName
        : 'other-photos';
      const photoFolderRef = ref(
        storage,
        `${storageFolderName}/${uploadedImageName}`
      );
      const uploadTask = uploadBytesResumable(photoFolderRef, document);

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
          // After upload completes, wait then get the download URL
          setPerc(99);
          getDownloadURLAfterUpload(uploadTask.snapshot.ref);
          setPerc(null);
        }
      );
    };

    // Define the async function to get the download URL
    const getDownloadURLAfterUpload = async (ref) => {
      try {
        const downloadURL = await getDownloadURL(ref);
        console.log('File available at', downloadURL);
        setFormdata((prevData) => ({
          ...prevData,
          image: downloadURL,
        }));
      } catch (error) {
        console.log('error', error);
      }
    };

    document ? uploadFile() : null;
  }, [setFormdata, setPerc, imageOption, document]);

  const handleChange = (e) => {
    setDocument ? setDocument(e.target.files[0]) : null;
  };
  return (
    <div className="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
      <label
        htmlFor="upload"
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 fill-white stroke-indigo-500"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="text-gray-600 font-medium">Upload file</span>
      </label>
      <input
        required={requirement ? true : false}
        id="upload"
        type="file"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export const Button = ({ type, color, text, position, per, handleClick }) => {
  return (
    <div className={`flex justify-${position}`}>
      <button
        disabled={per !== null && per < 100}
        className={`py-1.5 px-3 m-1 text-center bg-green-700 border rounded-md text-white  hover:bg-${color}-500 hover:text-white-100 dark:text-white-200 dark:bg-green-700 ${per !== null && per < 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
        type={type ? type : 'button'}
        style={{ backgroundColor: color }}
        onClick={handleClick ? handleClick : null}
      >
        {per !== 100 && per != null ? `${per} % uploaded` : text}
      </button>
    </div>
  );
};
