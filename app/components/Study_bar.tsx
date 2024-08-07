import React, { useState } from 'react';

const Study_bar: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-sm sm:text-lg font-semibold bg-gray-200 p-2 rounded-lg cursor-pointer">
        My Goal | Certification in Full Stack
      </span>
      {hovered && (
        <div className="absolute top-full left-0 mt-2 bg-white p-4 rounded-lg shadow-lg text-sm w-full sm:w-max grid">
          <h1 className="font-bold">My Goal</h1>
          <hr className="my-2" />
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
            <p className="text-xs sm:text-base mb-2 sm:mb-0">Certification in Full Stack Development</p>
            <div className="flex space-x-2 sm:ml-10">
              <button className="border border-black p-1 rounded bg-red-100 font-bold text-red-700">
                Enrolled
              </button>
            </div>
          </div>
          <button className="border border-black p-2 rounded-lg w-full hover:bg-black hover:text-white">
            Explore Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default Study_bar;
