import React from "react";
import Card from "./Card";
import phoneCall from '../../images/phone-call.svg';
import videoCall from '../../images/video-call.svg';
import chat from '../../images/chat.svg';

function Communication() {
    return (
        <div className="pl-40" >
            <div className=" font-['Poppins'] pt-16 pb-10 text-2xl md:text-3xl">
                <h2>WE CAN COMMUNICATE THROUGH</h2>
            </div>
            <div className="flex gap-3 md:flex-row flex-col">
                <Card link="/voice" pic={phoneCall} title="Voice Call" description="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!" />
                <Card link="/chat" pic={chat} title="Chat" description="Need to talk to someone? Come have a chat with your therapist!"/>                            
                <Card link="/video" pic={videoCall} title="Vedio Call" description="For better experience therapists recommend video calls, but always remember that its a choice!" />
            </div>

        </div>
    );
}

export default Communication;
