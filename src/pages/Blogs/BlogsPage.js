import BlogCard from "../../components/BlogCard/BlogCard";
import { Blogs } from "../../components/BlogCard/BlogMockData";

function BlogsPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen ">
      <div className="flex justify-start w-full px-5 my-5">
        <h1 className="text-lg font-bold ">Blogs</h1>
      </div>                                                                                                                                                                
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sm:gap-5 md:gap-10 lg:gap-10">
         {Blogs.map((blog) => (
          <BlogCard
            blogTitle={blog.title}
            blogImg={blog.img}
            authImg={blog.authImg}
            authName={blog.authName}
            authTitle={blog.authTitle}
            minsRead={blog.minsRead}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
