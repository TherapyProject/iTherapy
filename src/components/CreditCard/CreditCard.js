import React from 'react';

function CreditCard({ pic }) {
  return (
    <div className="card w-60 bg-base-100 shadow-xl ">
      <figure>
        <img src={pic} alt="Cards" />
      </figure>
      <div className="card-body ">
        <div className="card-actions justify-end">
          <button  type="submit" className="btn btn-info ">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
