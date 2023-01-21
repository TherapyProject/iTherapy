import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';
import { Blogs } from '../BlogCard/BlogMockData';

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    speed: 10,
    dragFree: true,
    align: 'start',
  });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className="embla " ref={emblaRef}>
      <div className=" flex gap-5 w-full h-full py-2  ">
        {Blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <div
              className="flex-auto relative flex-shrink-0 w-52 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 p-1"
              key={blog.title}
            >
              <BlogCard
                key={blog.id}
                title={blog.title}
                img={blog.img}
                authImg={blog.authImg}
                authName={blog.authName}
                authTitle={blog.authTitle}
                minsRead={blog.minsRead}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;
