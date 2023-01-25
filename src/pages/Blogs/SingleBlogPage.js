import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import Slider from '../../components/SliderSection/Slider';
import SliderLayout from '../../components/SliderSection/SliderLayout';

const SingleBlogPage = ({blogData}) => {
  const { blogId } = useParams();

  const location = useLocation();

  useEffect(() => {}, [blogId]);

  return (
    <div className="flex overflow-hidden flex-col justify-start bg-slate-100 w-full items-start py-10 px-5  sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-96 ">
      <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white my-10">
        <img
          className="mr-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-center"
          src={location.state.blogData.authImage}
          alt="Jese Leos"
        />
        <div>
          <a
            href="link"
            rel="author"
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
          >
            {location.state.blogData.authName}
          </a>
          <p className="text-sm sm:text-base font-light text-gray-500 dark:text-gray-400">
            author
          </p>
          <p className="text-base sm:text-lg font-light text-gray-500 dark:text-gray-400">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              {location.state.blogData.date}
            </time>
          </p>
        </div>
      </div>
      <div className="  rounded-md w-full bg-red-500 ">
        <img
          className=" object-center object-cover rounded-lg w-full h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96  "
          src={location.state.blogData.image}
          alt="blog post"
        />
      </div>

      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-10">
          {location.state.blogData.title}
        </h1>
      </div>

      <div className="flex flex-col justify-center items-start w-full mt-5 md:mt-10">
        <p className=" text-left md:text-lg md:text-justify">
          {location.state.blogData.body}
        </p>
      </div>

      <div />

      <div className="flex-col items-start justify-start mt-10 ">
        <h5 className="text-md lg:text-3xl font-bold ">
          Subscribe to our newsletter
        </h5>

        <p className=" text-sm md:text-base lg:text-lg xl:text-xl block mt-2 ">
          We&apos;ll never to spam you or share your email
        </p>
        <div className="form-control w-80  ">
          <div className="relative pt-4 sm:w-64 lg:w-96 ">
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="input input-bordered w-40 text-sm  md:w-full md:pr-16 "
            />
            <button
              className=" btn btn-primary absolute sm:top--6 right-24 sm:right-8 md:right-0 rounded-l-none"
              type="submit"
            >
              send
            </button>
          </div>
        </div>
      </div>

      <SliderLayout title="Related Blogs">
        <Slider blogData={blogData}  />
      </SliderLayout>
    </div>
  );
};

export default SingleBlogPage;
