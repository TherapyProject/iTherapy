const BlogCard = ({ title, img }) => {
  return (
    <div className="blog-card md:w-1/3">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img} alt="Random" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
