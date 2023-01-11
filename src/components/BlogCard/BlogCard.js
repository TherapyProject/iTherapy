/* eslint-disable no-unused-vars */
const BlogCard = ({
  blogImg,
  blogTitle,
  authImg,
  authName,
  authTitle,
  minsRead,
}) => {
  return (
    <div className=" flex flex-col max-w-sm h-32 sm:h-40 md:h-52 lg:h-60 xl:h-72 2xl:h-96 bg-red-400 ">
      <div className=" w-full h-60 bg-blue-400" >
      <img src={blogImg} className="object-cover object-center" alt="blog" />
      </div>
      <h1>{blogTitle}</h1>
    </div>
  );
};

export default BlogCard;
