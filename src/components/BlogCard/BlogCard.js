
const BlogCard = ({
  blogImg,
  blogTitle,
  authImg,
  authName,
  authTitle,
  minsRead,
}) => {
  return (
    <div className=" w-40 sm:w-64 md:w-72 lg:w-80 xl:w-96 md:m-3 hover:cursor-pointer hover:scale-105 transition duration-300 mb-3">
  <div><img src={blogImg} alt="Shoes" className="object-cover shadow-sm-light hover:shadow-blue-500 rounded-md object-center w-full h-24 sm:h-32 md:h-48 " /></div>
      <div className="pt-2 flex flex-col justify-between gap-1">
    <h2 className="text-xs md:text-sm xl:text-base 2xl:text-lg font-bold truncate">{blogTitle}</h2>

        <div className="flex justify-between items-center pt-1 lg:pt-2 xl:pt-3">
          <div className="flex items-center justify-between space-x-2 ">
    <img className="w-8 h-8 object-cover object-center sm:h-7 sm:w-7 lg:w-9 lg:h-9 rounded-full " src={authImg} alt="authImage"/>
            <div className="font-medium dark:text-white">
        <div className="text-[10px] lg:text-sm xl:text-base">{authName}</div>
        <div className="text-[8px] text-gray-500 dark:text-gray-400">{authTitle}</div>
              </div>

          </div>

      <span className=" bg-gradient-to-r from-orange-500 to-orange-600 px-1 py-1 text-[8px] rounded text-white dark:text-gray-400">{minsRead} min read</span>
   
        </div>
    

      </div>





    </div>
  );
};

export default BlogCard;
