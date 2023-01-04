import React from 'react';
import therapist from './HeroSection-images/cartoonImage.svg';

function Hero() {
  return (
    <div
      className=" font-['Poppins'] h-screen flex justify-center items-center md:flex-row flex-col md:pl-10 md:pb-40 lg:pl-20 bg-[url('components/HeroSection/HeroSection-images/linearbackground.png')]
    "
    >
      <div className="flex flex-col items-center gap-14 ml-4">
        <div className='flex flex-col items-center justify-center gap-5'>
        <p className=" text-4xl ">
          WE ARE HERE TO
        </p>
        <span className=" md:text-9xl text-7xl ">
          HELP
        </span>
        </div>
        
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center  mb-2 ">BOOK AN APPOINTMENT</button>
      </div>
      <div className=" md:w-3/5 pt-10 pb-5 w-full">
        <img
          className=" h-64 mx-auto"
          src={therapist}
          alt="therapist talking to a patient "
        />
      </div>
    </div>
  );
}

export default Hero;
