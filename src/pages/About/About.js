function About() {
  return (
    <div className="About ">
      <div className="flex flex-col mb-10 px-4 py-14 sm:px-28 sm:text-center md:text-left">
        <h1 className="font-[Poppins] text-4xl text-center sm:text-left sm:text-5xl sm:pl-0">
          Healing!
        </h1>
        <h3 className="font-[Poppins] text-slate-400 mt-4 pb-10 text-2xl whitespace-nowrap text-center sm:text-left">
          Helping you heal
        </h3>

        <p
          className="font-[Poppins] text-justify md:text-lg leading-7	font-normal text-gray-600 dark:text-gray-400 mb-10
          sm:text-left sm:text-base sm:leading-8 sm:pr-0"
        >
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
          <div className="flex flex-col gap-5 md:flex-row md:max-w-xl md:justify-between py-10">
            <img
              className="md:w-72 px-10 sm:px-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgOVWLFRM2VMy-pVscCdMG-c4JvMQR0G5mg&usqp=CAU"
              alt="Therapist"
            />
            <div className="p-6 flex flex-col justify-start gap-8">
              <div className="w-40 ">
                <h1 className="text-gray-900 font-normal mb-2 text-3xl sm:pl-0 pl-2 whitespace-nowrap font-['Poppins']">
                  Our Founding
                </h1>
                <p className="text-gray-700 w-96 font-normal sm:text-base px-3 sm:px-0 font-['Poppins']">
                  Healing was founded in 2019 by a group of SEO experts who
                  wanted to make SEO more accessible to everyone. We believe
                  that SEO is a powerful tool for businesses of all sizes and
                  that it should be easy to understand and use. We&#39;re
                  passionate about helping businesses grow and we&#39;re excited
                  to help you achieve your goals.
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
