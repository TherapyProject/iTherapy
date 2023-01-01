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
        <div className="flex flex-col">
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">I have a question about the service.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">I&apos;m a registered client and I need support.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">I&apos;m a counselor interested in joining.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">I&apos;m a registered counselor and I need support.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">I have a business-related inquiry.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">I&apos;m interested in Healing Online for my organization.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">I have a billing related question.</label>
      </div>
        <img src={Image} alt="Contact Us" />
        </div>
        </div>
        <div className="flex">
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
  <div className="card w-96 bg-teal-50 text-primary-content mt-10">
    <div className="card-body">
      <h2 className="card-title text-black">Find Us At:</h2>
      <div className="text-black">
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
    </div>
  </div>
  </div>    
    
  );
}

export default Contact;
