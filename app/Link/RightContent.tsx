'use client';

import React from 'react';

interface RightContentProps {
  lessons: string[];
}

const RightContent: React.FC<RightContentProps> = ({ lessons  }) => {
  return (
    <div className="w-full md:w-3/4 pl-4">
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson} className="border-b border-gray-200 py-2 flex justify-between">
            <span>{lesson}</span>
            <span className="text-yellow-500">⚠️</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightContent;
