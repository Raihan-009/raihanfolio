import { useState } from 'react';
import toast from 'react-hot-toast';
import { ref, remove, set, update } from 'firebase/database';
import BlogCard from '../Cards/Blog-Card';
import Form from '../Form';
import { database } from '../../config/firebase';
import { Button } from '../InputFields';
import { useFirebase } from '../../contexts/FirebaseContext';
import UpdateForm from '../UpdateForm';
const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 9);
};
export const BlogList = ({ blogs, handleEditBlog }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl text-center">All Blogs</h2>
      <div className="flex flex-col gap-1">
        {blogs?.map((blog, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 p-4"
          >
            <BlogCard blog={blog} />
            <Button
              text="Click To Open Edit Form"
              handleClick={() => handleEditBlog(blog)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
const fields = [
  { label: 'Title', name: 'title' },
  { label: 'Date', name: 'date', placeholder: 'June 2021' },
  { label: 'Description', name: 'description' },
];
const imageFolderOnCloud = { folderName: 'blog-photos' };

const AdminPageBlogSectionPannel = () => {
  const data = useFirebase();
  const blogs = data?.AllBlogData;

  const [loading, setLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({});
  const [updateFormData, setUpdateFormData] = useState({});
  const [selectedBlog, setSelectedBlog] = useState(null);

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const randomId = generateRandomId();
      const dataRef = ref(database, `AllBlogData/${randomId}`);
      await set(dataRef, { ...addFormData, id: randomId });
      toast.success('Blog Data Added Successfully');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
    setUpdateFormData(blog);
  };
  const handleUpdateBlogData = async () => {
    const dataRef = ref(database, `AllBlogData/${selectedBlog.id}`);
    await update(dataRef, selectedBlog);
    toast.success('Update Successful');
    setSelectedBlog(null);
  };

  //delete blog
  const handleDeleteBlog = async () => {
    try {
      console.log('clicked');
      const dataRef = ref(database, `AllBlogData/${selectedBlog.id}`);
      await remove(dataRef);
      toast.success('Delete Successful');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-xl text-center">Add Blog</h2>
          {/* Adding Single Featured Data Form */}
          <Form
            handleSubmit={addBlog}
            loading={loading}
            setFormdata={setAddFormData}
            fields={fields}
            imageOption={imageFolderOnCloud}
          />
          <Button color="green" text="Add Blog Collection" position="center" />
        </div>
        {selectedBlog && (
          <div>
            <h2 className="text-xl text-center">Edit Project Data</h2>
            <UpdateForm
              handleSubmit={handleUpdateBlogData}
              loading={loading}
              setUpdateFormdata={setUpdateFormData}
              fields={fields}
              updateFormData={updateFormData}
              data={selectedBlog}
              imageOption={imageFolderOnCloud}
            />
            <Button
              color="red"
              text="Delete Project"
              position="center"
              handleClick={handleDeleteBlog}
            />
          </div>
        )}
      </div>
      <BlogList blogs={blogs} handleEditBlog={handleEditBlog} />
    </div>
  );
};

export default AdminPageBlogSectionPannel;
