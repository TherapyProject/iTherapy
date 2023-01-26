import React from 'react';
import { Link } from 'react-router-dom';
import CreditCard from '../../components/CreditCard/CreditCard';
import Card1 from './cardPics/Card1.png';
import Card2 from './cardPics/Card2.png';
import Card3 from './cardPics/Card3.png';

function BuyTicket() {
  return (
    <div>
      <div className=" py-10 ">
        <div className=" text-center px-10">
          <h1 className=" font-[Poppins]    text-xl sm:text-3xl	 whitespace-nowrap  ">
            SELECT CARD
          </h1>
          <p className="font-[Poppins]    sm:whitespace-nowrap  text-slate-400 pb-10 text-sm  sm:text-xl       ">
            Please select the card you want to buy the tickets with
          </p>
        </div>

        <div className="flex gap-10 flex-wrap justify-center py-10">
          <CreditCard pic={Card1} />
          <CreditCard pic={Card2} />
          <CreditCard pic={Card3} />
        </div>
        <div className="text-center">
          <p className="text-center font-[Poppins] text-sm sm:text-2xl py-10 px-10">
            Click confirm to use the selected card to purchase 5 tickets for 10$
          </p>
          <Link to="./buyticketthanks">
            <button type="submit" className="btn btn-info  ">
              CONFIRM PURCHASE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;
