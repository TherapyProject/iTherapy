import BlogCard from '../BlogCard/BlogCard';

// Blogcards goes inside here
const RecentBlogs = () => {
  return (
    <div className="recent-blogs bg-cyan-50 pb-14 pt-14 md:pl-10 lg:pl-20 pl-7 pr-7 md:pr-16">
      <h2 className="font-['Poppins'] text-4xl font-bold pb-10">
        Recent Blogs
      </h2>
      <div className="flex gap-5 justify-between md:flex-row flex-col">
        <BlogCard
          blogTitle="mental health and food"
          blogImg="https://images.pexels.com/photos/6608542/pexels-photo-6608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          authImg="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
          authName="Nanor"
          authTitle="doctor"
          minsRead="10"
        />
      </div>
    </div>
  );
};

export default RecentBlogs;
