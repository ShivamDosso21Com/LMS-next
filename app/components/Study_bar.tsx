import React, { useState } from 'react';

const Study_bar: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-lg font-semibold bg-gray-200 p-2">My Courses</span>
      {hovered && (
        <>
          <span className="absolute top-0 left-0 text-lg font-semibold bg-gray-200 p-2">My Courses</span>
          <div className="absolute top-full left-0  bg-gray-800 text-white p-4 rounded-lg shadow-lg text-sm w-fit">
            <ul className='grid'>
                <button>Full stack development</button>
                <button>Mern stack</button>
                <button>DSA</button>
                <button>DSA + MERN</button>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Study_bar;
