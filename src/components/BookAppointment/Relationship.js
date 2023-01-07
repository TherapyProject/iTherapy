import { Label, Radio } from 'flowbite-react/lib/esm/components';
import React from 'react';

export default function Relationship({ relationship, setRelationship }) {
  const handleChange = (e) => {
    setRelationship(e.target.value);
  };

  return (
    <div className="mb-4">
      {' '}
      <fieldset
        className="flex flex-col gap-4"
        id="radio"
        onChange={handleChange}
      >
        <legend className="my-4">What is your relationship status?</legend>
        <div className="flex items-center gap-2">
          <Radio
            id="single"
            name="relationship"
            value="single"
            defaultChecked={relationship === 'single'}
          />
          <Label htmlFor="single" className="text-gray-200">
            Single
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="married"
            name="relationship"
            value="married"
            defaultChecked={relationship === 'married'}
          />
          <Label htmlFor="married" className="text-gray-200">
            Married
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="divorced"
            name="relationship"
            value="divorced"
            defaultChecked={relationship === 'divorced'}
          />
          <Label htmlFor="divorced" className="text-gray-200">
            Divorced
          </Label>
        </div>
      </fieldset>
    </div>
  );
}
