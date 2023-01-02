import React from 'react';
import Card from './Card';
import phoneCall from '../../images/phone-call.svg';
import videoCall from '../../images/video-call.svg';
import chat from '../../images/chat.svg';

function Communication() {
  return (
    <div className="pb-14 pt-14 md:pl-10 lg:pl-20 pl-7 pr-7 md:pr-16">
      <div className=" pb-10 font-['Poppins'] text-2xl md:text-3xl">
        <h2>WE CAN COMMUNICATE THROUGH</h2>
      </div>
      <div className="flex gap-5 justify-between md:flex-row flex-col">
        <Card
          link="/voice"
          pic={phoneCall}
          title="Voice Call"
          description="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!"
        />
        <Card
          link="/chat"
          pic={chat}
          title="Chat"
          description="Need to talk to someone? Come have a chat with your therapist!"
        />
        <Card
          link="/video"
          pic={videoCall}
          title="Video Call"
          description="For better experience therapists recommend video calls, but always remember that its a choice!"
        />
      </div>
    </div>
  );
}

export default Communication;
