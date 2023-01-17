import React from 'react';

const SliderLayout = ({ children , title }) => {
  return (
    <div className="flex flex-col gap-5 md:gap-6 lg:gap-8 xl:gap-9 2xl:gap-10  my-5 py-3 sm:my-4 md:my-8 lg:my-10 xl:my-12 2xl:my-14 w-full ">
      <div className="flex font-[poppins] justify-between items-center  lg:mx-2  text-stone-700">
        <div className="text-sm font-bold md:text-base xl:text-lg 2xl:text-xl ">{title}</div>
      {
        title === 'Recent Blogs' &&   <div className="text-sm  md:text-base xl:text-lg 2xl:text-xl border border-orange-500 px-3 md:px-5 md:py-2 py-1 rounded-full text-orange-500 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition hover:cursor-pointer">
         see all       
          </div>
      }
        
      </div>

      {children}
    </div>
  );
};

export default SliderLayout;
