import React from 'react';

function Card({ title, description, link, pic }) {
  return (
    <div className=" text-center max-w-sm bg-white border border-white rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5 flex flex-col content-center">
        <img src={pic} className="m-auto h-12 " alt={title} />
        <a href={link}>
          <h5 className="font-['Poppins'] font-normal mb-2 text-3xl tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="font-['Poppins'] mb-3 font-light text-sm text-slate-400 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
