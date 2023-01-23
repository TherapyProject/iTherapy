import React from 'react';
import { Link } from 'react-router-dom';
import pic from './img/pic.png';


function LearnMore() {
  return (
    <div className="font-[Poppins] py-20 text-center sm:text-left sm:pl-52 ">
      <div className=" float-right">
        <img src={pic} alt="Therapist" className="w-[550px] hidden md:block" />
      </div>
      <h1 className="sm:text-3xl text-2xl ">WHY WORK WITH HEALING?</h1>

      <h2 className="text-xl py-5">RELIABLE INCOME</h2>
      <p className="w-6/12 sm:text-lg text-slate-500  text-sm mx-auto sm:mx-0">
        Over 10,000 people sign up on BetterHelp every day looking for a
        counselor to help with life&rdquo;s challenges. BetterHelp can be your
        main source of income (&rdquo;full time&rdquo;) or a supplement to your
        current work.
      </p>

      <h2 className="text-xl py-5">FOCUS ON COUNSELING</h2>
      <p className="w-6/12 sm:text-lg text-slate-500  text-sm mx-auto sm:mx-0">
        No need to worry about costs from acquiring clients, billing, support or
        operations. Let us handle the fees and paperwork so you can focus on
        what you do best!
      </p>

      <h2 className="text-xl py-5">RELIABLE INCOME</h2>
      <p className="w-6/12 sm:text-lg text-slate-500  text-sm mx-auto sm:mx-0">
        There is no need to be concerned about client acquisition, billing,
        support, or operational costs. So that you may concentrate on what you
        do best, let us manage the fees and paperwork.
      </p>

      <h1 className="text-2xl py-10">REQUIREMENTS</h1>
      <ul className="w-6/12 sm:text-lg text-slate-500 text-left text-sm mx-auto sm:mx-0">
        <li>
          <span className="text-6xl text-black">.</span> Licensed by a State
          Board to provide counseling
        </li>
        <li>
          <span className="text-6xl text-black">.</span> Experience in
          counseling for adults, couples, and/or teens
        </li>
        <li>
          <span className="text-6xl text-black">.</span> Excellent writing
          skills
        </li>
        <li className="whitespace-nowrap">
          <span className="text-6xl text-black">.</span> Reliable Internet
          connection
        </li>
        <li className="whitespace-nowrap">
          <span className="text-6xl text-black">.</span> Currently residing in
          the US
        </li>
      </ul>
      <Link to='/therapistcreate'>
        <button type="submit" className="btn btn-info mt-10  ">
        GET STARTED
      </button>
      </Link>
      
    </div>
  );
}

export default LearnMore;
