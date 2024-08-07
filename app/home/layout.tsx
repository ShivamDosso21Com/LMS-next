"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Study_bar from "../components/Study_bar";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import Swal from "sweetalert2";
import useOnlineStatus from "../services/hooks/useOnlineStatus";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const isOnline = useOnlineStatus();

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const showAlert = () => {
      if (navigator.onLine) {
        Swal.fire({
          title: 'Back Online',
          text: 'Your internet connection is restored.',
          icon: 'success',
          confirmButtonText: 'Great',
        });
      } else {
        Swal.fire({
          title: 'No Internet Connection',
          text: 'You are offline. Please check your internet connection.',
          icon: 'warning',
          confirmButtonText: 'Okay',
        });
      }
    };

    // Show alert on initial load
    showAlert();

    // Set up event listeners for online/offline events
    window.addEventListener('online', showAlert);
    window.addEventListener('offline', showAlert);

    // Clean up event listeners on component unmount
   
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-200">
      {/* Sidebar */}
   

      <div className="flex flex-col ml-[var(--sidebar-width)] transition-all duration-300 ease-in-out">
        {/* Topbar */}
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

        {/* Main content */}
        <main className=" flex">
        <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)} />{children}
        </main>
      </div>
    </div>
  );
}
