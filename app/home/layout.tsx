"use client"
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Study_bar from "../components/Study_bar";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const handleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="en">
      <body className="">
      <div className="bg-white shadow-2xl w-full h-16 flex items-center justify-between fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="sm:hidden flex justify-start">
          <button onClick={handleButton} className="text-gray-600 hover:text-gray-900">
            {isOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/logo.jpeg" alt="Logo" width={80} height={100} className="object-contain" />
          <Study_bar />
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
            P
          </div>
        </div>
      </div>
    <div className="flex">  <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)} /> {children}</div>
      </body>
    </html>
  );
}
