import { Label, Textarea } from 'flowbite-react/lib/esm/components';
import React from 'react';

export default function Details({ details, setDetails }) {
  const handleChange = (e) => {
    setDetails(e.target.value);
  };

  return (
    <div id="textarea" className="w-full mb-4 flex flex-col gap-4">
      <div className="mb-2">
        <Label
          htmlFor="comment"
          value="Additional Information"
          className="text-gray-800 dark:text-gray-200"
        />
      </div>
      <Textarea
        id="comment"
        placeholder="Please provide any additional information that will help us better understand your needs."
        rows={6}
        required
        value={details}
        onChange={handleChange}
        className="w-full"
      />
    </div>
  );
}
