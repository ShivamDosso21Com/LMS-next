'use client';

import React from 'react';

interface RightContentProps {
  lessons: string[];
}

const RightContent: React.FC<RightContentProps> = ({ lessons }) => {
  return (
    <div className="w-full md:w-3/4  box-border p-2 border-2 m-2 mt-9">
      <div className='text-black font-bold'>Lessons</div>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson} className="border-b border-gray-200 py-2 flex justify-between items-center">
            <span className="flex items-center">
              <span className="mr-2 text-blue-500">📖</span>
              {lesson}
            </span>
            <span className="text-yellow-500">⚠️</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightContent;
