import React from 'react';

function About() {
  return (
    <div className="About">
      <div className="flex flex-col px-52 py-14 md:text-left sm:text-center ">
        <h1 className="font-[Poppins] text-4xl sm:text-5xl	 ">HEALING!</h1>
        <h3 className="font-[Poppins] text-slate-400 pb-10 text-2xl whitespace-nowrap">
          some cool one liner !
        </h3>
        <p className="font-[Poppins]  md:text-lg leading-7	font-normal break-normal">
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
    </div>
  );
}

export default About;
