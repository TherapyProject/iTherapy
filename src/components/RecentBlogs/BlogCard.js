const BlogCard = ({ title, img }) => {
  return (
    <div className="blog-card">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
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
