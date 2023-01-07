import { Label, Radio } from 'flowbite-react/lib/esm/components';
import React from 'react';

export default function Issues({ issue, setIssue }) {
  const handleChange = (e) => {
    setIssue(e.target.value);
  };

  return (
    <div className="mb-4">
      {' '}
      <fieldset
        className="flex flex-col gap-4"
        id="radio"
        onChange={handleChange}
      >
        <legend className="my-4">
          Are there any issues you would like to focus on?
        </legend>
        <div className="flex items-center gap-2">
          <Radio
            id="depression"
            name="issue"
            value="depression"
            defaultChecked={issue === 'depression'}
          />
          <Label htmlFor="depression" className="text-gray-200">
            Depression
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="stress-anxiety"
            name="issue"
            value="stress-anxiety"
            defaultChecked={issue === 'stress-anxiety'}
          />
          <Label htmlFor="stress-anxiety" className="text-gray-200">
            Stress and anxiety
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="relationship"
            name="issue"
            value="relationship"
            defaultChecked={issue === 'relationship'}
          />
          <Label htmlFor="relationship" className="text-gray-200">
            Relationship
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="family"
            name="issue"
            value="family"
            defaultChecked={issue === 'family'}
          />
          <Label htmlFor="family" className="text-gray-200">
            Family
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="trauma-abuse"
            name="issue"
            value="trauma-abuse"
            defaultChecked={issue === 'trauma-abuse'}
          />
          <Label htmlFor="trauma-abuse" className="text-gray-200">
            Trauma Abuse
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="eating-disorder"
            name="issue"
            value="eating-disorder"
            defaultChecked={issue === 'eating-disorder'}
          />
          <Label htmlFor="eating-disorder" className="text-gray-200">
            Eating Disorder
          </Label>
        </div>
      </fieldset>
    </div>
  );
}
