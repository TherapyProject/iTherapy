const BlogCard = ({
  blogImg,
  blogTitle,
  authImg,
  authName,
  authTitle,
  minsRead,
}) => {
  return (
    <div className=" group w-full m-1 p-1.5 rounded-lg bg-gray-100 hover:shadow-md transition duration-500 scale-95 hover:scale-100 hover:cursor-pointer">
      <div className="relative ">
        <img
          className=" object-cover object-center w-full h-52 rounded-lg shadow-md"
          src={blogImg}
          alt="blog"
        />
        <div className=" top-0 left-0 absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 hover:opacity-0 rounded-lg" />
      </div>

      <div className="flex flex-col justify-between">
        <h2 className=" mx-1 my-2  text-xs sm:text-sm lg:text-base font-bold text-gray-900 ">
          {blogTitle}
        </h2>
        <div className="flex justify-between items-center mt-5 mx-1 lg:mx-3 lg:mb-1 ">
          <div className="flex items-center space-x-2">
            <img
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border border-stone-100 hover:cursor-pointer "
              src={authImg}
              alt=""
            />
            <div className="font-medium">
              <div className="text-xs text-gray-500 hover:text-orange-600 transition">
                {authName}
              </div>
              <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
                {authTitle}
              </div>
            </div>
          </div>
          <p className="  text-end text-xs lg:text-sm font-base text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:bg-orange-700 px-1 py-1 sm:px-2 sm:py-1 rounded">
            {minsRead}-mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
