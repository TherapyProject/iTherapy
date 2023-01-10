// import React, { Component } from 'react';
import rectangle from './about-images/Rectangle.svg';

function About() {
  return (
    <div className="About  ">
      <div className="flex flex-col px-4 py-14 sm:px-28 sm:text-center md:text-left mb-20">
        <h1 className="font-[Poppins]   sm:pl-0 text-4xl sm:text-5xl	text-center sm:text-left">
          HEALING!
        </h1>
        <h3 className="font-[Poppins]   text-slate-400 pb-10 text-2xl whitespace-nowrap text-center sm:text-left">
          some cool one liner !
        </h3>

        <p className="  font-[Poppins] text-justify md:text-lg leading-7	font-normal min-w-[250px] pr-12 px-3 m-7 sm:px-0 sm:m-0	sm:w-[1000px]   text-xs sm:text-left ">
          At Healing &#39;we believe there is a better way to do things. A more
          valuable way where customers are earned rather than bought. We&#39;re
          obsessively passionate about it&#39; and our mission is to help people
          achieve it. We focus on search engine optimization. It &#39;s one of
          the least understood and least transparent aspects of great
          marketing&#39; and we see that as an opportunity. We&#39;re excited to
          simplify SEO for everyone through our software, education, and
          community.
        </p>
      </div>
      <div className="bg-[url('pages/About/about-images/backGround.png')] ">
        <div className="flex justify-center">
          <div className="flex flex-col gap-5 md:flex-row md:max-w-xl md:justify-between  py-10">
            <img
              className="     md:w-72 px-10  sm:px-0"
              src={rectangle}
              alt="Therapist"
            />
            <div className="p-6 flex flex-col justify-start gap-8">
              <div className="w-40 ">
                <h1 className="text-gray-900  font-normal mb-2 text-3xl sm:pl-0 pl-2 whitespace-nowrap font-['Poppins']">
                  Our Founding
                </h1>
                <p className="text-gray-700 w-96 font-normal text-xs sm:text-base  px-3 sm:px-0 font-['Poppins'] ">
                  Healing was founded by Payam Abubakr in 2021. It was called
                  Healing Online, and started as a blog and an online community
                  where some of the world&apos;s therapists shared their
                  research and ideas. We launched the Beginner&apos;s Guide to
                  Therapy and our first study, and that hub of industry
                  expertise transformed into a small consulting firm and led us
                  to create the Online Therapist of today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
