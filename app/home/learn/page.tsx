"use client"
import React, { useState } from "react";
import { MdLibraryBooks } from "react-icons/md";

const Page = () => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const handleChapterClick = (chapterId: string) => {
    setSelectedChapter(chapterId);
  };

  const chapters = [
    { id: "1", title: "Chapter 1", description: "Fundamentals of Web Development" },
    { id: "2", title: "Chapter 2", description: "Fundamentals of Web Development" },
    { id: "3", title: "Chapter 3", description: "Fundamentals of Web Development" },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 ml-4">
      <div className="grid gap-4 h-fit mt-4">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            id={chapter.id}
            className="border border-color p-4 rounded cursor-pointer hover:bg-gray-300 bg-gray-100"
            onClick={() => handleChapterClick(chapter.id)}
          >
            <p>{chapter.title}</p>
            <p>{chapter.description}</p>
          </div>
        ))}
      </div>
    
      {selectedChapter && (
        <div className="border border-color p-4 rounded mt-4 bg-white h-fit w-max">
          <h2>Lessons for {chapters.find((chapter) => chapter.id === selectedChapter)?.title}</h2>
          <p className="flex"><MdLibraryBooks/>{chapters.find((chapter) => chapter.id === selectedChapter)?.description}</p>
         
        </div>
      )}
    </div>
  );
};

export default Page;
