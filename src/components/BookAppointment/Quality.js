import { Label, Radio } from 'flowbite-react/lib/esm/components';
import React from 'react';

export default function Quality({ quality, setQuality }) {
  const handleChange = (e) => {
    setQuality(e.target.value);
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
          Are there any specific qualities that you&apos;d like in a counsoler?
        </legend>
        <div className="flex items-center gap-2">
          <Radio
            id="male"
            name="quality"
            value="male"
            defaultChecked={quality === 'male'}
          />
          <Label htmlFor="male" className="text-gray-800 dark:text-gray-200">
            I prefer a male counselor
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="female"
            name="quality"
            value="female"
            defaultChecked={quality === 'female'}
          />
          <Label htmlFor="female" className="text-gray-800 dark:text-gray-200">
            I prefer a female counselor
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="old"
            name="quality"
            value="old"
            defaultChecked={quality === 'old'}
          />
          <Label htmlFor="old" className="text-gray-800 dark:text-gray-200">
            I prefer an older counselor (45+)
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="non-religious"
            name="quality"
            value="non-religious"
            defaultChecked={quality === 'non-religious'}
          />
          <Label
            htmlFor="non-religious"
            className="text-gray-800 dark:text-gray-200"
          >
            I prefer a non-religious counselor
          </Label>
        </div>
      </fieldset>
    </div>
  );
}
