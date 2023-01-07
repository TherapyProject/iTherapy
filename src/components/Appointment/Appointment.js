import AvatarGroup from './AvatarGroup';

function Appointment() {
  return (
    <div className="h-screen md:pl-10 lg:pl-20  w-full  flex flex-col items-center  md:-gap-10  justify-evenly sm:justify-around md:items-start p-5 bg-[#FEE89E]">
      <div className="w-full p-5 flex flex-row justify-center sm:justify-start items-center text-center md:text-left">
        <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-4xl lg:mr-52 xl:text-5xl text-gray-600 font-bold">
          Professional, licensed, and vetted therapists that you can
          trust
        </h2>
      </div>

      <div className="sm:pl-5  -my-4">
        <AvatarGroup size="lg"  />
      </div>

      <div className="px-5 sm:pr-10 md:pr-20 xl:pr-56">
        <p className=" text-sm sm:text-base lg:text-lg text-justify  text-gray-600 font-semibold">
          Tap into the worlds largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>
      </div>

      <div className="pl-4">
       <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg sm:text-lg xl:text-xl px-5 py-2.5 text-center mr-2 mb-2 hover:scale-105 transition ">BOOK AN APPOINTMENT</button>

      </div>
    </div>
  );
}

export default Appointment;
