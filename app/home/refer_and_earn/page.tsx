"use client"
import React from "react";
import { FaCopy } from "react-icons/fa";

const Page = () => {
  const referralLink = process.env.LINK;
 
  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 w-full">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 mx-4">
        <h1 className="text-xl font-bold mb-4">For Each Friend You Refer</h1>
        <p className="text-gray-700 mb-2">
          You Will Get ₹1000 On Your Friend's Enrollment
        </p>
        <p className="text-gray-700 mb-4">
          Your friend will get ₹10000000000 as discount on other courses
        </p>
        <div className="flex justify-between items-center mb-6">
          <div className="w-full">
            <p className="text-xs">Referral Link</p>
            <button
              className="bg-black text-white rounded-lg px-4 py-2 mt-1"
              onClick={() => copyToClipboard(referralLink)}
            >
              Copy code
            </button>
          </div>
          <div className="w-full ml-2">
            <p className="text-xs">Referral Code</p>
            <div
              className="bg-gray-100 text-black px-4 py-2 border rounded-lg mt-1 flex items-center justify-between cursor-pointer"
              onClick={() => copyToClipboard("imvpankaj")}
            >
              <span>imvpankaj</span>
              <FaCopy className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
