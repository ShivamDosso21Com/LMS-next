import UserProfile from "@/app/components/UserProfile";
import React from "react";

const Page = () => {
  return (
    <div className="mt-16 w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6 mt-10">
        <div className="flex items-center justify-between mb-4">
         <p className="text-2xl"> <UserProfile /></p>
          <button className="rounded-lg px-4 py-2 border border-color bg-gray-100 text-gray-700 hover:bg-gray-200 transition w-fit">
            Edit
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-xl font-bold mb-1">Name</h1>
            <p className="text-base text-gray-700">
              Pankaj <span className="text-xs text-red-500">(This will be shown in Certificate)</span>
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">Address</h1>
            <p className="text-base text-gray-700">Surajpur Gr Noida</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">Postal Code</h1>
            <p className="text-base text-gray-700">201306</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
