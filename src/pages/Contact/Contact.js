import React from 'react';
import Image from '../../images/Image.png';

function Contact() {
  return (
    <div className="Contact">
    <div>
        <h1>SEND US YOUR REQUEST!</h1>
        <p>Do you have a question, concern, idea, feedback, or problem? If you need assistance, please fill out the form below and we&apos;d be happy to help!</p>
        </div>
    <div>
        <h2>Type of contact</h2>
        <div className="flex flex-col mb-10">
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I have a question about the service.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I&apos;m a registered client and I need support.</label>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I&apos;m a counselor interested in joining.</label><br/>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I&apos;m a registered counselor and I need support.</label><br/>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I have a business-related inquiry.</label><br/>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I&apos;m interested in Healing Online for my organization.</label><br/>
        <input id="default-radio-1" type="radio" value="" className="default-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I have a billing related question.</label><br/>
        </div>
    <div>
        <img src={Image} alt="Contact Us" />
        </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Full Name:</span>
      </label>
    <input type="text" placeholder="Enter your full name here..." className="input input-bordered w-full max-w-xs" />
    <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Email:</span>
      </label>
    <input type="text" placeholder="Enter your email address here..." className="input input-bordered w-full max-w-xs" />
    <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Details:</span>
      </label>
    <input type="text" placeholder="Enter your details here..." className="input input-bordered w-full max-w-xs" />
    <button className="btn btn-info" type="button">SUBMIT</button>
    </div>
    </div>
    </div>
  <div className="card w-96 bg-teal-50 text-primary-content">
    <div className="card-body">
      <h2 className="card-title text-black font- [Poppins]">Find Us At:</h2>
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
  );
}

export default Contact;
