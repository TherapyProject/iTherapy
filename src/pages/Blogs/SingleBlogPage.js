import React from 'react'
import Slider from '../../components/SliderSection/Slider'
import SliderLayout from '../../components/SliderSection/SliderLayout'

const SingleBlogPage = () => {
  return (
    <div className='flex overflow-hidden flex-col justify-start bg-slate-100 w-full items-start py-10 px-5  sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-96 ' >
      <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white my-10">
                      <img className="mr-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                      <div>
                          <a href="link" rel="author" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Hevar tofiq</a>
                          <p className="text-sm sm:text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer</p>
                          <p className="text-base sm:text-lg font-light text-gray-500 dark:text-gray-400"><time  dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
                  <div className="  rounded-md  ">
                    <img className=' object-center object-cover rounded-lg max-h-[400px]' src="https://static.vecteezy.com/system/resources/previews/002/099/721/original/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg" alt="blog post"/>
                  </div>
                  
                  <div className="flex flex-col justify-start items-start w-full">
                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                  </div>
                  
                  <div className="flex flex-col justify-center items-start w-full mt-5 md:mt-10">
                       <p className=' text-left md:text-lg md:text-justify'>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!`}</p>
                    </div>

                      <div/>

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
              Enter
            </button>
          </div>
        </div>
      </div>

      <SliderLayout title="Related Blogs">
        <Slider />
      </SliderLayout>


    </div>
  )
}

export default SingleBlogPage