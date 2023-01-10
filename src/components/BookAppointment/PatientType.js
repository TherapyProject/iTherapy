import { Label, Radio } from 'flowbite-react/lib/esm/components';
import React from 'react';

export default function PatientType({ type, setType }) {
  const handleChange = (e) => {
    setType(e.target.value);
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
          What type of counseling are you looking for?
        </legend>
        <div className="flex items-center gap-2">
          <Radio
            id="individual"
            name="type"
            value="individual"
            defaultChecked={type === 'individual'}
          />
          <Label htmlFor="individual">Individual Counseling</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="teen"
            name="type"
            value="teen"
            defaultChecked={type === 'teen'}
          />
          <Label htmlFor="teen">Teen Counseling (For my child)</Label>
        </div>
      </fieldset>
    </div>
  );
}
