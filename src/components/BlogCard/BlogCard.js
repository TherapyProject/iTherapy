const BlogCard = ({
  img,
  title,
  authImg,
  authName,
  // authTitle,
  minsRead,
}) => {
  return (
    <div className="w-full group hover:scale-105 hover:cursor-pointer transition duration-200">
      <div className="relative">
        <img
          src={img}
          alt="blog"
          className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-stone-800 bg-opacity-10" />
        <div className="absolute top-2 right-2 text-[0.55rem] bg-stone-800/70 p-1 rounded-sm text-white">
          {minsRead} mins read
        </div>
      </div>

      <div className="flex flex-col justify-between pt-2">
        <div className="text-xs md:text-sm lg:text-base font-bold text-stone-600 truncate">
          {title}
        </div>
        <div className="flex justify-between py-2">
          <div className="flex gap-1 lg:gap-2 items-center justify-center">
            <img
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full object-cover object-center"
              src={authImg}
              alt={authName}
            />
            <div className="flex flex-col justify-center items-start ">
              <div className="text-[0.70rem] lg:text-sm font-bold truncate hover:text-orange-500">
                {authName}
              </div>
              <div className="text-[0.60rem] lg:text-xs text-gray-500 truncate">
                Author
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
