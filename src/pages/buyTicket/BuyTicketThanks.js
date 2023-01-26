import React from 'react';
import { Link } from 'react-router-dom';

function BuyTicketThanks() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="card-title text-4xl mt-5">THANK YOU!</h1>
      <p className="text-2xl mt-5">
        Your purchase has been submitted, you should receive the receipt soon.
      </p>
      <Link to="/">
        <button type="button" className="btn btn-info text-xl mt-5 mb-15">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
}

export default BuyTicketThanks;
