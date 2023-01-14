import { Card } from 'flowbite-react/lib/esm/components';
import React from 'react';

const TeamMember = ({ name, title, image }) => {
  return (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col items-center justify-center p-4 gap-y-4">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={image}
            alt={`${name} avatar`}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </span>
          <a href={image.slice(0, -4)} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default TeamMember;
