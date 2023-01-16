
const BlogCard = ({
  blogImg,
  blogTitle,
  authImg,
  authName,
  // authTitle,
  minsRead,
}) => {
  return (
    <div className="w-full ">
      <div className="relative">
 <img src={blogImg} alt="blog" className="w-full h-28 object-cover object-center"/>
        <div className="absolute top-0 left-0 w-full h-full bg-stone-800 bg-opacity-10" />
        <div className="absolute top-2 right-2 text-[0.65rem]">{minsRead} mins read</div>
      </div>
     
      <div className="flex flex-col justify-between pt-2">
        <div className="text-xs font-bold truncate">{blogTitle}</div>
        <div className="flex justify-between py-2" >
          <div className="flex gap-2 items-center justify-center">
            <img className="w-6 h-6 rounded-full object-cover object-center" src={authImg} alt={authName} / >
            <div>
              <div className="text-[0.70rem] font-bold truncate">{authName}</div>
              <div className="text-[0.60rem] text-gray-500 truncate">Author</div>
            </div>
          </div>
          </div>
          </div>
    </div>
  );
};

export default BlogCard;
