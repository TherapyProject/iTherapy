import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import {Blogs} from '../../components/BlogCard/BlogMockData';



function BlogsPage() {
   return(
<div>
 <h2 className="font-['Poppins'] text-lg sm:text-xl lg:text-2xl text-gray-700 font-bold mx-10 mt-5 ">Blogs:</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-5 ">
      {Blogs.map((blog) => <BlogCard blogTitle={blog.title} blogImg={blog.img} authImg={blog.authImg} authName={blog.authName} authTitle={blog.authTitle} minsRead={blog.minsRead} />
     
 )}
    </div>
  
</div>
  );
}

export default BlogsPage;
