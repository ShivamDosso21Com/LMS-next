"use client"
import React, { useEffect, useState } from "react";
import { Get_user } from "../services/api/auth/Get_user"; // Adjust the import path
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserProfile = () => {
  const [initial, setInitial] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Use useRouter to navigate

  useEffect(() => {
    const getUserData = async () => {
      const name = await Get_user();
      if (name) {
        const firstLetter = name.charAt(0).toUpperCase();
        setInitial(firstLetter);
      }
    };

    getUserData();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Remove token from cookies
    Cookie.remove("token");

    // Redirect to login page
    router.push("/");
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
      >
        {initial}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li>
              <Link
                href="/home/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/home/certificates"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                My Certificates
              </Link>
            </li>
            <li>
              <Link
                href="/home/passwords"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Manage Passwords
              </Link>
            </li>
        
            <li>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 w-full text-left text-gray-800 hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
