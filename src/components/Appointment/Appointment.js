import { Button } from 'flowbite-react/lib/esm/components';
import AvatarGroup from './AvatarGroup';

function Appointment() {
  return (
    <div className=" md:pl-10 lg:pl-20  w-full h-[490px] flex flex-col md:-gap-10  justify-evenly sm:justify-around items-start p-5 bg-[#FEE89E]">
      <div className="w-full p-5 flex flex-row ">
        <h2 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-bold">
          Professional, licensed, and vetted therapists  <br /> that you can trust
        </h2>
      </div>

      <div className='pl-5 -my-4'>
        <AvatarGroup size='lg' />
      </div>

      <div className="px-5 sm:pr-28 md:pr-56">
        <p className=" text-sm sm:text-base lg:text-lg text-justify  text-gray-600 font-medium">
          Tap into the worlds largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>
      </div>

      <div className='pl-4'>
        <Button className='sm:w-48 md:w-52 lg:w-64 xl:w-72' gradientDuoTone="purpleToBlue">
          Book an Appointment
        </Button></div>
    </div>
  );
}

export default Appointment;
