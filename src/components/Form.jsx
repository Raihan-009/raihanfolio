import { useState } from 'react';
import {
  Button,
  FileInputField,
  TextAreaField,
  TextInputField,
} from './InputFields';

import Loader from './Loader';

const Form = ({
  handleSubmit,
  setFormdata,
  loading,
  fields,
  imageOption = false,
  imageUrl = 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg',
}) => {
  const [document, setDocument] = useState(null);
  const [per, setPerc] = useState(null);

  //update data to firestore
  // const handleUpdateFeatureData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const docRef = db.collection('featuredData').doc(feature?.id);
  //     await docRef.update(formData);
  //     toast.success('Feature Data Updated Successfully');
  //     document.getElementById('myForm').reset();
  //   } catch (error) {
  //     console.error('Error updating document: ', error);
  //   }
  // };
  return (
    <div className="flex justify-center my-4 px-8">
      <form className="max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-white-600">
          <h2 className="text-xl text-white-600 dark:text-white-300 pb-2">
            Card Update and Delete:
          </h2>
          <div className="flex flex-col gap-2 w-full border-white-400">
            {loading && <Loader />}
            {fields?.map((field, index) =>
              field.name !== 'description' ? (
                <TextInputField
                  key={index}
                  label={field.label}
                  placeholder={field.label}
                  value={field.value}
                  name={field.name}
                  setFormData={setFormdata}
                />
              ) : (
                <TextAreaField
                  key={index}
                  label={field.label}
                  value={field.value}
                  placeholder={field.label}
                  name={field.name}
                  setFormData={setFormdata}
                />
              )
            )}
            {imageOption && (
              <div className="flex justify-evenly items-center">
                <FileInputField
                  document={document}
                  setDocument={setDocument}
                  setPerc={setPerc}
                  setFormdata={setFormdata}
                  imageOption={imageOption}
                  name={'image'}
                />
                <img
                  height={'200px'}
                  width={'200px'}
                  src={document ? URL.createObjectURL(document) : imageUrl}
                  alt=""
                />
              </div>
            )}
            <Button
              per={per}
              type="submit"
              color="green"
              text="Add Feature"
              position="center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
