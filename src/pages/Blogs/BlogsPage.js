import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useAuth } from '../../contexts/AuthContext';

function BlogsPage({ blogsData }) {

  const { currentUser } = useAuth();

  return (
    <div className="w-full h-full p-5 ">
      <div className="flex justify-start w-full px-5 my-5">
        <h1 className="text-lg font-bold ">Blogs</h1>
      
      </div>
       {
          currentUser && (

            <div className="flex justify-center items-center">
            <Link
              to="/newblog"
              className=" text-center my-10 mx-auto text-sm font-medium btn btn-primary"
            >
              Add Your Blog Now
            </Link>
          </div>
          )
       }
      <div className=" w-full h-full grid grid-cols-2 md:grid-cols-3 gap-5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sm:gap-5 md:gap-10 lg:gap-10">
        {blogsData.map((blog) => (
          <Link
            key={blog.id}
            state={{ blogData: blog }}
            to={`/blogs/${blog.id}`}
          >
            <BlogCard
              key={blog.id}
              title={blog.title}
              img={blog.image}
              authImg={blog.authImage}
              authName={blog.authName}
              authTitle="doctor"
              minsRead={blog.minsRead}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
