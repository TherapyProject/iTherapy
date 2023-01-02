import React from 'react';
import therapist from './HeroSection-images/cartoonImage.svg';

function Hero() {
  return (
    <div className=" h-screen flex md:flex-row flex-col md:pl-10 md:pb-40 lg:pl-20 bg-[url('components/HeroSection/HeroSection-images/linearbackground.png')]
    ">
      <div className='flex flex-col w-2/5 items-start m-auto'>
        <p className="pl-1 md:text-4xl text-2xl font-['Poppins'] ">WE ARE HERE TO </p>
        <span className="md:pl-1 pr-5 md:text-9xl text-5xl font-['Poppins'] ">HELP</span>
        <button
          type="button"
          className=" md:py-2.5 md:px-1.5 md:mt-11 mt-6 text-black font-semibold border border-indigo-300 bg-cyan-500  rounded-md transition duration-500  select-none hover:bg-cyan-600 focus:outline-none focus:shadow-outline  "
        >BOOK AN APPOINTMENT</button>
      </div>
      <div className=' md:w-3/5 pt-10 pb-5 w-full' >
        <img className='w-8/12 m-auto' src={therapist} alt='therapist talking to a patient ' />
      </div>
    </div>
  );
}

export default Hero;
