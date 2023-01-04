import React from 'react';
import { useNavigate } from 'react-router';
import therapist from './HeroSection-images/cartoonImage.svg';

function Hero() {
  const navigate = useNavigate();

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
        <button
          type="button"
          className=" md:py-2.5 md:px-1.5 md:mt-11 mt-6 text-black font-semibold border border-indigo-300 bg-cyan-500  rounded-md transition duration-500  select-none hover:bg-cyan-600 focus:outline-none focus:shadow-outline  "
          onClick={() => navigate('/book')}
        >
          BOOK AN APPOINTMENT
        </button>
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
