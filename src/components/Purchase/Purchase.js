import React from "react";
import PurchaseCard from "./PurchaseCard";

function Purchase() {
    return (
    <header className="p-10">
  <div>
    <span className="text-5xl font-bold ">PURCHASE TICKETS</span>
    <br/>
    <br/>
    <span className="text-2xl font-bold">PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!</span>
  </div>
    <div className="flex flex-wrap gap-5 justify-around mt-10">
      <PurchaseCard title="1 TICKET" price="10"/>
      <PurchaseCard title="5 TICKETS" price="40"/>
      <PurchaseCard title="10 TICKETS" price="70"/>
    </div>
    <div className="mt-10">
      <div className="card w-500 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl justify-center">ARE YOU A COUNSELOR?</h2>
          <p className="text-xl justify-center">Interested in joining our mental health platform? You decide your schedule and how much you want to work, we’ll take care of the client referrals and billing details!</p>
          <div className="card-actions justify-center">
            <button type="button" className="btn btn-info">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  </header>
    );
}

export default Purchase;