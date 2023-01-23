import React from 'react';

function BuyTicketThanks() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="card-title text-4xl mt-5">THANK YOU!</h1>
      <p className="text-2xl mt-5">
       Your purchase has been submitted, you should receive the receipt soon.
      </p>
      <a href="./home">
        <button
          type="button"
          className="btn btn-info text-xl mt-5 mb-15"
        >
          BACK TO HOME
        </button>
      </a>
    </div>
  );
}

export default BuyTicketThanks;