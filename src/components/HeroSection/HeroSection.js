import React from 'react';
import { useNavigate } from 'react-router';
import therapist from './HeroSection-images/girl-chatting.png';

function Hero() {
  const navigate = useNavigate();

  return (
    <div
      className="  font-['Poppins'] h-screen flex justify-center pt-12 items-center md:flex-row flex-col md:pl-10 md:gap-1 lg:gap-10 lg:pl-20 bg-cover bg-[url('components/HeroSection/HeroSection-images/linearbackground.png')]
    "
    >
      <div className="flex flex-col items-center gap-8  ml-4">
        <div className='flex flex-col items-center justify-center gap-2 font-semibold'>
        <p className=" text-3xl xl:text-5xl ">
         We Are Here To
        </p>
        <span className=" text-6xl  lg:text-7xl xl:text-8xl ">
          Help you
        </span>
        <button
          type="button"
          className=" md:py-2.5 md:px-1.5 md:mt-11 mt-6 text-black font-semibold border border-indigo-300 bg-cyan-500  rounded-md transition duration-500  select-none hover:bg-cyan-600 focus:outline-none focus:shadow-outline  "
          onClick={() => navigate('/book')}
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
      <div className=" md:w-3/5 pt-10 w-full">
        <img
          className=" h-96 lg:scale-125 xl:h-96 mx-auto"
          src={therapist}
          alt="therapist talking to a patient "
        />
      </div>
    </div>
  );
}

export default Hero;
