"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";
import Study_bar from "./Study_bar";

const Topbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white shadow-2xl w-full h-16 flex items-center justify-between fixed top-0 left-0 z-50 px-4">
      <div className="sm:hidden flex justify-start">
          <button onClick={handleButton} className="text-gray-600 hover:text-gray-900">
            {isOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <div>
          <Image src="/logo.jpeg" alt="Logo" width={80} height={100} />
        </div>

        {/* Hamburger Menu Button */}
     <Study_bar/>

        {/* Placeholder for profile icon */}
        <div className=" sm:flex items-center">
          <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
            P
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

export default Topbar;
