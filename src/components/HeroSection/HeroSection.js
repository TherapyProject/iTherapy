import React from 'react';
import therapist from './HeroSection-images/cartoonImage.svg'

const linearBackground = require('./HeroSection-images/linearbackground.png')


function HeroSection() {
  return (
    <div>
      <div  className=''>
        <img className='w-full h-full z-20 absolute ' src={linearBackground} alt='background' />
        <div className='flex justify-center items-center flex-wrap-reverse flex-row-reverse  '>
          <img className=' w-3/5 h-[425px] ml-auto  z-50  pt-10 ' src={therapist} alt='therapist talking to a patient ' />
          <div className='w-40 text-center  z-50 grid items-center justify-center pt-40 ml-60'>
            <p className=' text-center'>WE ARE HERE TO </p>
            <span className=''>HELP</span>
            <button
            type="button"
            className=" text-2xl text-black font-semibold  w-96  border border-indigo-300 bg-cyan-500  rounded-md px-6 py-4 m-5 transition duration-500 ease select-none hover:bg-cyan-600 focus:outline-none focus:shadow-outline  "
          >BOOK AN APPOINTMENT</button>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default HeroSection;