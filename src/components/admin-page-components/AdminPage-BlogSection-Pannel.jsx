import { useState } from 'react';
import toast from 'react-hot-toast';
import { push, ref, remove, set, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import BlogCard from '../Cards/Blog-Card';
import Form from '../Form';
import { database } from '../../config/firebase';
import { Button } from '../InputFields';
import { useFirebase } from '../../contexts/FirebaseContext';
import UpdateForm from '../UpdateForm';
export const BlogList = ({ blogs, handleEditBlog }) => {
  return (
    <div>
      <h2>All Blogs</h2>
      <div className="flex flex-col gap-1">
        {blogs?.map((blog, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 p-4"
          >
            <BlogCard blog={blog} />
            <Button
              text="Edit Button"
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
      const dataRef = ref(database, 'AllBlogData');
      const newDataRef = push(dataRef);
      await set(newDataRef, { ...addFormData, id: uuidv4() });
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
  const handleUpdateBlogData = () => {
    const dataRef = ref(database, `AllBlogData/${selectedBlog.id}`);
    update(dataRef, selectedBlog);
    setSelectedBlog(null);
  };

  //delete blog
  const handleDeleteBlog = async () => {
    try {
      const dataRef = ref(database, `AllBlogData/${selectedBlog.id}`);
      await remove(dataRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4">
      <div className="flex ">
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
              onClick={handleDeleteBlog}
            />
          </div>
        )}
      </div>
      <BlogList blogs={blogs} handleEditBlog={handleEditBlog} />
    </div>
  );
};

export default AdminPageBlogSectionPannel;
