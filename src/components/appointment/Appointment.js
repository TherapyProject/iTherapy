import {Button} from 'flowbite-react/lib/esm/components';
import AvatarGroup from './AvatarGroup';

function Appointment() {
  return (
    <div className=" pl-20 w-full flex flex-col gap-3 justify-around items-start p-5 bg-[#FEE89E]">
      <div className="p-5 flex flex-wrap ">
        <h2 className="text-4xl text-gray-600 font-bold">
          Professional, licensed, and vetted therapists that you can trust
        </h2>
      </div>

      <div className='pl-5'>
       <AvatarGroup size="lg"/>
      </div>

      <div className='pl-5 '><p className=' text-gray-600 font-medium'>Tap into the worlds largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate whenever and however you want.</p></div>

      <div className='pl-4'> 
      <Button gradientDuoTone="purpleToBlue">
      Book an Appointment
    </Button></div>
    </div>
  );
}





export default Appointment;
