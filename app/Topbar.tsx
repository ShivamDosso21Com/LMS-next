"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-2xl w-full h-16 flex items-center justify-between fixed top-0 left-0 z-50 px-4">
      <div>
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      {/* Hamburger Menu Button */}
      <div className="sm:hidden flex items-center">
        <button onClick={handleButton} className="text-gray-600 hover:text-gray-900">
          {isOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

    

      {/* Placeholder for profile icon */}
      <div className="hidden sm:flex items-center">
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
          P
        </div>
      </div>
    </div>
  );
}
