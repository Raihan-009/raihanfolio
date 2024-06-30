import { useFirebase } from '../contexts/FirebaseContext';
import BlogCard from './Cards/Blog-Card';

const BlogSection = () => {
  const data = useFirebase();
  const blogData = data?.AllBlogData;
  return (
    <section className="normal-page flex flex-col gap-28">
      <h2 className="text-3xl font-bold uppercase">Blog</h2>
      <div className="flex flex-col gap-20">
        {blogData?.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
