import React from "react";
import Card from "./Card";

function Communication() {
    return (
        <div className="pl-40" >
            <div className="pt-16 pb-10 text-5xl">
                <h2>WE CAN COMMUNICATE THROUGH</h2>
            </div>
            <div className="flex gap-2">
                <Card link="/voice" title="Voice Call" description="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!" />
                <Card link="/chat" title="Chat" description="Need to talk to someone? Come have a chat with your therapist!"/>
                <Card link="/video" title="Vedio Call" description="For better experience therapists recommend video calls, but always remember that its a choice!" />
            </div>

        </div>
    );
}

export default Communication;
