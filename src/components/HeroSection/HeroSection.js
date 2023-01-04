import React from 'react';
import therapist from './HeroSection-images/cartoonImage.svg';

function Hero() {
  return (
    <div
      className=" font-['Poppins'] h-screen flex justify-center items-center md:flex-row flex-col md:pl-10 md:gap-1 lg:gap-10 lg:pl-20 bg-cover bg-[url('components/HeroSection/HeroSection-images/linearbackground.png')]
    "
    >
      <div className="flex flex-col items-center gap-14  ml-4">
        <div className='flex flex-col items-center justify-center gap-5 font-semibold'>
        <p className=" text-4xl xl:text-5xl ">
         We Are Here To
        </p>
        <span className=" text-7xl md:text-6xl lg:text-7xl xl:text-8xl ">
          Help you
        </span>
        </div>
        
        <button type="button" className="hover:scale-105 transition text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-base md:text-lg lg:text-xl xl:text-2xl px-5 py-2.5 text-center  mb-2 ">BOOK AN APPOINTMENT</button>
      </div>
      <div className=" md:w-3/5 pt-10 pb-5 w-full">
        <img
          className=" h-64 md:h-72 lg:h-80 xl:h-96 mx-auto"
          src={therapist}
          alt="therapist talking to a patient "
        />
      </div>
    </div>
  );
}

export default Hero;
