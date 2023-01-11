import React from 'react';

const Avatar = ({ imgSrc }) => {
  return (
    <img
      className=" h-24 sm:h-28 border-2 border-white rounded-full dark:border-gray-800"
      src={imgSrc}
      alt=""
    />
  );
};

export default Avatar;
