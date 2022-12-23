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
    <div className="recent-blogs">
      <h2 className="text-4xl font-bold text-center">Recent Blogs</h2>
      <div className="grid grid-cols-3 gap-4">
        {Blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} img={blog.img} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
