// 'use client';

// import React from 'react';

// interface LeftNavProps {
//   chapters: Record<string, string[]>;
//   selectedChapter: string;
//   onSelectChapter: (chapter: string) => void;
// }

// const LeftContent: React.FC<LeftNavProps> = ({ chapters, selectedChapter, onSelectChapter }) => {
//   return (
//     <div className="w-full md:w-1/4 border-r border-gray-200">
//       <h3 className="text-lg font-bold pb-2">Module 1</h3>
//       <ul>
//         {Object.keys(chapters).map((chapter) => (
//           <li
//             key={chapter}
//             className={`border-b border-gray-200 py-2 cursor-pointer ${
//               selectedChapter === chapter
//                 ? 'bg-light-green-200 text-color border border-green-400'
//                 : ''
//             }`}
//             onClick={() => onSelectChapter(chapter)}
//           >
//             {chapter}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LeftContent;




'use client';

import React from 'react';

interface LeftNavProps {
  chapters: Record<string, string[]>;
  selectedChapter: string;
  onSelectChapter: (chapter: any) => void;
}

const LeftContent: React.FC<LeftNavProps> = ({ chapters, selectedChapter, onSelectChapter }) => {
  return (
    <div className="w-full md:w-1/4 border-r border-gray-200">
      <h3 className="text-lg font-bold pb-2 px-4">Module 1</h3>
      <ul>
        {Object.keys(chapters).map((chapter) => (
          <li
            key={chapter}
            className={`py-2 px-4 cursor-pointer border-b border-gray-200 ${
              selectedChapter === chapter
                ? 'bg-light-green-200 text-color border border-green-400'
                : ''
            }`}
            onClick={() => onSelectChapter(chapter)}
          >
            {chapter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftContent;
