import React, { useEffect, useState } from "react";
import { Get_user } from "../services/api/auth/Get_user";
// Adjust the import path

const UserProfile = () => {
  const [initial, setInitial] = useState<string | null>(null);

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

  return (
    <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
      {initial}
    </div>
  );
};

export default UserProfile;
