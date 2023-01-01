/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Image from '../../images/Image.png';

function Contact() {
  return (
  <div className="p-10">
    <div>
        <h1 className="card-title">SEND US YOUR REQUEST!</h1>
        <p className="text-xl">Do you have a question, concern, idea, feedback, or problem? If you need assistance, please fill out the <br/> form below and we&apos;d be happy to help!</p>
      </div>
    <div>
        <h2 className="card-title mt-5 mb-10">Type of contact</h2>
        <div className="flex justify-between">
        
        <div className="flex flex-col text-xl gap-8 ">
    <div className="flex items-center mr-4">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-radio" className="ml-2  font-medium text-gray-400 dark:text-gray-500">I have a question about the service.</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-2-radio" className="ml-2  font-medium text-gray-400 dark:text-gray-500">I&apos;m a registered client and I need support.</label>
    </div>
    <div className="flex items-center mr-4">
        <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-checked-radio" className="ml-2  font-medium text-gray-400 dark:text-gray-500">I&apos;m a counselor interested in joining.</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-disabled-radio" className="ml-2  font-medium text-gray-400 dark:text-gray-500">I&apos;m a registered counselor and I need support.</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-disabled-radio" className="ml-2  font-medium text-gray-400 dark:text-gray-500">I have a business-related inquiry.</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-disabled-radio" className="ml-2  font-medium text-gray-400 dark:text-gray-500">I&apos;m interested in Healing Online for my organization.</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-disabled-radio" className="ml-2  font-medium text-gray-400 dark:text-gray-500">I have a billing related question.</label>
    </div>
    
</div>
        <img src={Image} alt="Contact Us" />
        </div>
        </div>

        <div className="flex">

          <div className='grid grid-cols-2 space-x-52 '>
          
            <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="card-title">Full Name:</span>
      </label>
    <input type="text" placeholder="Enter your full name here..." className="input input-bordered w-full max-w-xs" />
    <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="card-title">Email:</span>
      </label>
    <input type="text" placeholder="Enter your email address here..." className="input input-bordered w-full max-w-xs" />
    <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="card-title">Details:</span>
      </label>
    <input type="text" placeholder="Enter your details here..." className="input input-bordered w-full max-w-xs" />
    <button className="btn btn-info mt-10" type="button">SUBMIT</button>
  
    </div>
    </div>

    
    </div>

    <div className="card w-72 bg-teal-50 text-primary-content mt-10 p-5 ">
    
      <h2 className="card-title text-black">Find Us At:</h2>
      <div className="card-body text-black">
      <p>Nergiz Plaza</p>
      <p>3rd Floor</p>
      <p>Bakhtiyari Street 40m</p>
      <p>Erbil, Iraq</p>
      <p>44001</p>
      
      </div>    
    </div>
          </div>
    
  </div>
  </div>    
    
  );
}



export default Contact;
