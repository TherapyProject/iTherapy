import { Button } from 'flowbite-react/lib/esm/components';

import React from 'react';

export default function Submit({ onSubmit }) {
  return (
    <div className="flex flex-col items-center text-center w-full gap-4 mb-24">
      <h2 className="text-gray-800 dark:text-gray-200">Submit Appointment</h2>
      <p className="text-gray-800 dark:text-gray-200">
        Please be aware that this action will cost you a ticket!
      </p>
      <Button
        type="submit"
        onClick={onSubmit}
        className="btn btn-success btn-wide"
      >
        Submit
      </Button>
    </div>
  );
}
