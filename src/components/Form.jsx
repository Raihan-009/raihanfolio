import { useState } from 'react';
import {
  Button,
  FileInputField,
  TextAreaField,
  TextInputField,
} from './InputFields';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../config/firebase';

const Form = ({ fields, image = false }) => {
  const [document, setDocument] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [formData, setFormdata] = useState({});
  //upload file to firebase storage
  const uploadFile = () => {
    const uploadedImageName = new Date().getTime() + document.name;
    const storageFolderName = image ? image?.folder : 'other-photos';
    const featuredPhotoFolderRef = ref(
      storage,
      `${storageFolderName}/${uploadedImageName}`
    );
    const uploadTask = uploadBytesResumable(featuredPhotoFolderRef, document);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted----', formData);
  };
  console.log(formData);

  return (
    <div className="flex justify-center mt-20 px-8">
      <form className="max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-white-600">
          <h2 className="text-xl text-white-600 dark:text-white-300 pb-2">
            Account settings:
          </h2>
          <div className="flex flex-col gap-2 w-full border-white-400">
            {fields.map((field, index) =>
              field.name !== 'description' ? (
                <TextInputField
                  key={index}
                  label={field.label}
                  placeholder={field.label}
                  name={field.name}
                  setFormData={setFormdata}
                />
              ) : (
                <TextAreaField
                  key={index}
                  label={field.label}
                  placeholder={field.label}
                  name={field?.name}
                  setFormData={setFormdata}
                />
              )
            )}
            {image && (
              <div className="flex justify-evenly items-center">
                <FileInputField
                  setDocument={setDocument}
                  setFormdata={setFormdata}
                  name={'image'}
                />
                <img
                  height={'200px'}
                  width={'200px'}
                  src={
                    document
                      ? URL.createObjectURL(document)
                      : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                  }
                  alt=""
                />
              </div>
            )}
            <Button
              type="submit"
              color="violet"
              text="Submit"
              position="center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
