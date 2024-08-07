"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Study_bar from "../components/Study_bar";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import Swal from "sweetalert2";
import useOnlineStatus from "../services/hooks/useOnlineStatus";
import UserProfile from "../components/UserProfile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const isOnline = useOnlineStatus();
  const [initialLoad, setInitialLoad] = useState(true);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const showAlert = () => {
      if (initialLoad) {
        setInitialLoad(false);
        return;
      }

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

    // Set up event listeners for online/offline events
    window.addEventListener('online', showAlert);
    window.addEventListener('offline', showAlert);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('online', showAlert);
      window.removeEventListener('offline', showAlert);
    };
  }, [initialLoad]);

  return (
    <div className="relative min-h-screen bg-gray-200">
      <div className="flex flex-col ml-[var(--sidebar-width)] transition-all duration-300 ease-in-out">
        <div className="bg-white shadow-2xl w-full h-16 flex items-center justify-between fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-8">
          <div className="sm:hidden flex justify-start">
            <button onClick={handleButton} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={200} height={100} className="object-contain" />
            <div className="hidden sm:block">
              <Study_bar />
            </div>
          </div>
          <div className="flex items-center">
            <UserProfile />
          </div>
        </div>
        <main className="flex">
          <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)} />
          {children}
        </main>
      </div>
    </div>
  );
}
