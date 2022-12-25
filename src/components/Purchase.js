import React from "react";

function Purchase() {
    return (
        <header className="p-10">
  <div>
    <span className="sm:text-center text-5xl font-bold">PURCHASE TICKETS</span>
    <br/>
    <br/>
    <span className="text-2xl font-bold">PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!</span>
    </div>
    <div className="md:flex-row justify-around mt-10 flex flex-col">
    <div className="card w-70 bg-base-100 shadow-xl mb-10">
  <div className="card-body">
    <h2 className="card-title text-3xl justify-center">5 TICKETS</h2>
    <span className="text-xl text-center">10$</span>
    <div className="card-actions justify-center">
      <button type="button" className="btn btn-info">PURCHASE</button>
    </div>
  </div>
</div>
<div className="card w-70 bg-base-100 shadow-xl mb-10">
  <div className="card-body">
    <h2 className="card-title text-3xl justify-center">25 TICKETS</h2>
    <p className="text-xl text-center">40$</p>
    <div className="card-actions justify-center">
      <button type="button" className="btn btn-info">PURCHASE</button>
    </div>
  </div>
</div> 
<div className="card w-70 bg-base-100 shadow-xl mb-10">
  <div className="card-body">
    <h2 className="card-title text-3xl justify-center">50 TICKETS</h2>
    <p className="text-xl text-center">70$</p>
    <div className="card-actions justify-center">
      <button type="button" className="btn btn-info">PURCHASE</button>
    </div>
  </div>
</div>
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