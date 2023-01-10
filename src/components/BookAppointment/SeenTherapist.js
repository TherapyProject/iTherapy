import { Label, Radio } from 'flowbite-react/lib/esm/components';
import React from 'react';

export default function SeenTherapist({ seenTherapist, setSeenTherapist }) {
  const handleChange = (e) => {
    setSeenTherapist(e.target.value);
  };

  return (
    <div className="mb-4">
      {' '}
      <fieldset
        className="flex flex-col gap-4"
        id="radio"
        onChange={handleChange}
      >
        <legend className="my-4 text-gray-800 dark:text-gray-200">
          Have you seen a therapist before?
        </legend>
        <div className="flex items-center gap-2">
          <Radio
            id="yes"
            name="seen"
            value="yes"
            defaultChecked={seenTherapist === 'yes'}
          />
          <Label htmlFor="yes" className="text-gray-800 dark:text-gray-200">
            Yes
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="no"
            name="seen"
            value="no"
            defaultChecked={seenTherapist === 'no'}
          />
          <Label htmlFor="no" className="text-gray-800 dark:text-gray-200">
            No
          </Label>
        </div>
      </fieldset>
    </div>
  );
}
