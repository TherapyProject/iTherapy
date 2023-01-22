import React from 'react';

function ContactThanks() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="card-title text-4xl mt-5">THANK YOU!</h1>
      <p className="text-2xl mt-5">
        Your request has been sent, a member of the support team will get in
        contact with you through the email <br /> you provided as soon as
        possible.
      </p>
      <a href="./Home">
        <button
          href="./"
          type="button"
          className="btn btn-info text-xl mt-5 mb-15"
        >
          BACK TO HOME
        </button>
      </a>
    </div>
  );
}

export default ContactThanks;
