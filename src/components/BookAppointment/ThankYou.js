import React from 'react';
import { useNavigate } from 'react-router';

export default function ThankYou() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center w-full mb-24">
      <h2 className="text-gray-800 dark:text-gray-200">Request Submitted</h2>
      <p className="text-gray-800 dark:text-gray-200">
        Thank you for your request. We will get back to you as soon as possible.
      </p>
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-primary btn-wide"
      >
        Back to Home
      </button>
    </div>
  );
}
