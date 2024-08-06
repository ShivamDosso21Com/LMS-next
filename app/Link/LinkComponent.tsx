
// 'use client';

// import React, { useState } from 'react';
// import LeftNav from './LeftContent';
// import RightContent from './RightContent';

// const LinkComponent = () => {
//   const [selectedChapter, setSelectedChapter] = useState('Fundamentals of Web Development');

//   const chapters = {
//     'Fundamentals of Web Development': [
//       'Progress Tracker Overview',
//       'What is full stack web development?',
//       'Basics of Internet and Web',
//       'Intro to VS Code IDE',
//       'Intro to Command Line Interface',
//       'Intro to Git and GitHub',
//       'Competency Test - Fundamentals of Web Development'
//     ],
//     'JavaScript Fundamentals': [
//       'Introduction to JavaScript',
//       'JavaScript Basics',
//       'Control Structures',
//       'Functions',
//       'Objects and Arrays'
//     ],
//     'Functions and OOP Programming': [
//       'Introduction to Functions',
//       'Higher-Order Functions',
//       'Object-Oriented Programming Basics',
//       'Classes and Instances',
//       'Inheritance and Polymorphism'
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <main className="mt-4 flex flex-col md:flex-row">
//         <LeftNav
//           chapters={chapters}
//           selectedChapter={selectedChapter}
//           onSelectChapter={setSelectedChapter}
//         />
//         <RightContent lessons={chapters[selectedChapter]} />
//       </main>
//     </div>
//   );
// };

// export default LinkComponent;







// // 'use client';

// // import { useState } from 'react';

// // const LinkComponent = () => {
// //   const [selectedChapter, setSelectedChapter] = useState('Fundamentals of Web Development');

// //   const chapters = {
// //     'Fundamentals of Web Development': [
// //       'Progress Tracker Overview',
// //       'What is full stack web development?',
// //       'Basics of Internet and Web',
// //       'Intro to VS Code IDE',
// //       'Intro to Command Line Interface',
// //       'Intro to Git and GitHub',
// //       'Competency Test - Fundamentals of Web Development'
// //     ],
// //     'JavaScript Fundamentals': [
// //       'Introduction to JavaScript',
// //       'JavaScript Basics',
// //       'Control Structures',
// //       'Functions',
// //       'Objects and Arrays'
// //     ],
// //     'Functions and OOP Programming': [
// //       'Introduction to Functions',
// //       'Higher-Order Functions',
// //       'Object-Oriented Programming Basics',
// //       'Classes and Instances',
// //       'Inheritance and Polymorphism'
// //     ]
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-4">
// //       <main className="mt-4">
// //         <section className="bg-white p-4 shadow rounded flex">
// //           <div className="w-1/4 border-r border-gray-200">
// //             <h3 className="text-lg font-bold pb-2">Module 1</h3>
// //             <ul>
// //               {Object.keys(chapters).map((chapter) => (
// //                 <li
// //                   key={chapter}
// //                   className={`border-b border-gray-200 py-2 cursor-pointer ${
// //                     selectedChapter === chapter ? 'text-red-500 font-bold' : ''
// //                   }`}
// //                   onClick={() => setSelectedChapter(chapter)}
// //                 >
// //                   {chapter}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div className="w-3/4 pl-4">
// //             <ul>
// //               {chapters[selectedChapter].map((lesson) => (
// //                 <li key={lesson} className="border-b border-gray-200 py-2 flex justify-between">
// //                   <span>{lesson}</span>
// //                   <span className="text-yellow-500">⚠️</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // };

// // export default LinkComponent;














// // 'use client';

// // import { useState } from 'react';

// // const LinkComponent = () => {
// //   const [selectedChapter, setSelectedChapter] = useState('Fundamentals of Web Development');

// //   const chapters = {
// //     'Fundamentals of Web Development': [
// //       'Progress Tracker Overview',
// //       'What is full stack web development?',
// //       'Basics of Internet and Web',
// //       'Intro to VS Code IDE',
// //       'Intro to Command Line Interface',
// //       'Intro to Git and GitHub',
// //       'Competency Test - Fundamentals of Web Development'
// //     ],
// //     'JavaScript Fundamentals': [
// //       'Introduction to JavaScript',
// //       'JavaScript Basics',
// //       'Control Structures',
// //       'Functions',
// //       'Objects and Arrays'
// //     ],
// //     'Functions and OOP Programming': [
// //       'Introduction to Functions',
// //       'Higher-Order Functions',
// //       'Object-Oriented Programming Basics',
// //       'Classes and Instances',
// //       'Inheritance and Polymorphism'
// //     ]
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-4">
// //       {/* <header className="bg-white shadow p-4 flex justify-between items-center">
// //         <h1 className="text-2xl font-bold">Full Stack Web Development</h1>
// //         <div className="text-sm text-gray-500">
// //           <span className="mr-4">0% Progress</span>
// //           <span>Lessons: 0/84</span>
// //         </div>
// //       </header> */}

// //       <main className="mt-4">
// //         {/* <section className="bg-white p-4 shadow rounded mb-4">
// //           <h2 className="text-x font-bold mb-2">Introduction to Computer Programming</h2>
// //           <p className="text-gray-600">21 Lessons · 4 weeks · 5 credits</p>
// //           <div className="flex justify-between mt-4">
// //             <div className="w-1/4">
// //               <button className="bg-red-500 text-white py-2 px-4 rounded">Start Learning</button>
// //             </div>
// //             <div className="w-3/4 text-right flex items-center justify-end">
// //               <span className="mr-4 text-gray-600 font-bold">Progress:</span>
// //               <div className="bg-gray-200 h-4 rounded-full overflow-hidden w-2/4 mr-4">
// //                 <div className="bg-red-500 h-full" style={{ width: '0%' }}></div>
// //               </div>
// //               <span className="text-gray-600 font-bold">0%</span>
// //             </div>
// //           </div>
// //         </section> */}

// //         <section className="bg-white p-4 shadow rounded flex">
// //           <div className="w-1/4 border-r border-gray-200">
// //             <h3 className="text-lg font-bold pb-2">Module 1</h3>
// //             <ul>
// //               {Object.keys(chapters).map((chapter) => (
// //                 <li
// //                   key={chapter}
// //                   className={`border-b border-gray-200 py-2 cursor-pointer ${
// //                     selectedChapter === chapter ? 'text-red-500 font-bold' : ''
// //                   }`}
// //                   onClick={() => setSelectedChapter(chapter)}
// //                 >
// //                   {chapter}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div className="w-3/4 pl-4">
// //             <ul>
// //               {chapters[selectedChapter].map((lesson) => (
// //                 <li key={lesson} className="border-b border-gray-200 py-2 flex justify-between">
// //                   <span>{lesson}</span>
// //                   <span className="text-yellow-500">⚠️</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // };

// // export default LinkComponent;










'use client';

import React, { useState } from 'react';
import LeftNav from './LeftContent';
import RightContent from './RightContent';

type ChapterKey = 'Fundamentals of Web Development' | 'JavaScript Fundamentals' | 'Functions and OOP Programming';

const chapters: Record<ChapterKey, string[]> = {
  'Fundamentals of Web Development': [
    'Progress Tracker Overview',
    'What is full stack web development?',
    'Basics of Internet and Web',
    'Intro to VS Code IDE',
    'Intro to Command Line Interface',
    'Intro to Git and GitHub',
    'Competency Test - Fundamentals of Web Development'
  ],
  'JavaScript Fundamentals': [
    'Introduction to JavaScript',
    'JavaScript Basics',
    'Control Structures',
    'Functions',
    'Objects and Arrays'
  ],
  'Functions and OOP Programming': [
    'Introduction to Functions',
    'Higher-Order Functions',
    'Object-Oriented Programming Basics',
    'Classes and Instances',
    'Inheritance and Polymorphism'
  ]
};

const LinkComponent = () => {
  const [selectedChapter, setSelectedChapter] = useState<ChapterKey>('Fundamentals of Web Development');

  return (
    <div 
    className="min-h-screen bg-white p-2"
    >
      <main className="mt-1 flex flex-col md:flex-row">
        <LeftNav
          chapters={chapters}
          selectedChapter={selectedChapter}
          onSelectChapter={setSelectedChapter}
        />
        <RightContent lessons={chapters[selectedChapter]} />
      </main>
    </div>
  );
};

export default LinkComponent;
