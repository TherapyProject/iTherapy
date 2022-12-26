import BlogCard from './BlogCard';

const Blogs = [
  {
    id: 1,
    title: 'Blog 1',
    img: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: 2,
    title: 'Blog 2',
    img: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: 3,
    title: 'Blog 3',
    img: 'https://picsum.photos/seed/picsum/200/300',
  },
];

const RecentBlogs = () => {
  return (
    <div className="recent-blogs bg-cyan-50 pb-14 pt-14 md:pl-10 lg:pl-20 pl-7 pr-7 md:pr-16">
      <h2 className="font-['Poppins'] text-4xl font-bold pb-10">Recent Blogs</h2>
      <div className="flex gap-5 justify-between md:flex-row flex-col">
        {Blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} img={blog.img} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
