import { Button, TextAreaField, TextInputField } from './InputFields';

import Loader from './Loader';

const UpdateForm = ({
  handleSubmit,
  fields,
  updateFormData,
  setUpdateFormdata,
  data,
  loading,
  imageOption = false,
  imageUrl = 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg',
}) => {
  console.log('fields', fields);
  console.log('updateFormData', updateFormData);
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
                  placeholder={
                    field.placeholder ? field.placeholder : field.label
                  }
                  value={updateFormData[field.name]}
                  name={field.name}
                  setFormData={setUpdateFormdata}
                />
              ) : (
                <TextAreaField
                  key={index}
                  label={field.label}
                  value={updateFormData[field.name]}
                  placeholder={
                    field.placeholder ? field.placeholder : field.label
                  }
                  name={field.name}
                  setFormData={setUpdateFormdata}
                />
              )
            )}
            {imageOption && (
              <div className="flex justify-evenly items-center">
                <img
                  height={'200px'}
                  width={'200px'}
                  src={data ? data?.image : imageUrl}
                  alt=""
                />
              </div>
            )}
            <Button
              type="submit"
              color="green"
              text="Update Feature"
              position="center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
