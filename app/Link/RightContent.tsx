// 'use client';

// import React from 'react';

// interface RightContentProps {
//   lessons: string[];
// }

// const RightContent: React.FC<RightContentProps> = ({ lessons }) => {
//   return (
//     <div className="w-full md:w-3/4  box-border p-2 border-2 m-2 mt-9">
//       <div className='text-black font-bold'>Lessons</div>
//       <ul>
//         {lessons.map((lesson) => (
//           <li key={lesson} className="border-b border-gray-200 py-2 flex justify-between items-center">
//             <span className="flex items-center">
//               <span className="mr-2 text-blue-500">📖</span>
//               {lesson}
//             </span>
//             <span className="text-yellow-500">⚠️</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RightContent;

'use client';

import React from 'react';
import Image from 'next/image'; // Import the Image component

interface RightContentProps {
  lessons: string[];
}

const RightContent: React.FC<RightContentProps> = ({ lessons }) => {
  return (
    <div className="w-full md:w-3/4  2xl:w-1/2 box-border p-2 border-2 m-2 mt-9">
      <div className="text-black font-bold">Lessons</div>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={lesson} className="border-b border-gray-200 py-2 flex justify-between items-center">
            <span className="flex items-center">
              <span className="mr-2 text-blue-500">📖</span>
              {lesson}
            </span>
            {index === 0 ? (
              <span className="relative text-green-500 group flex items-center">
              <Image
                src="/check.png" // Path to image in the public folder
                alt="Completed"
                width={24} // Adjust the width as needed
                height={24} // Adjust the height as needed
              />
              <span className="hidden group-hover:inline text-xs text-gray-500 ml-2">
                Completed
              </span>
            </span>
            ) : (
              <span className="relative text-yellow-500 group">
                ⚠️
                <span className="hidden group-hover:inline text-xs text-gray-500 ml-2">
                  In progress
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightContent;
