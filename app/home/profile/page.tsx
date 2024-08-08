"use client";
import React, { useEffect, useState } from "react";
import { Get_user_data } from "@/app/services/api/auth/Get_user_data";
import EditProfileForm from "@/app/components/EditProfileForm";
import { Get_user } from "@/app/services/api/auth/Get_user";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Page = () => {
  const [initial, setInitial] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Get_user_data();
        if (response) {
          setUserData(response);
          setProfilePic(response.studentProfile);
        } else {
          setError("No user data found");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleProfilePicChange = async () => {
    if (!file) {
      Swal.fire({
        title: "Error!",
        text: "No file selected",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const token = Cookies.get("token");
    if (!token) {
      Swal.fire({
        title: "Error!",
        text: "No token found",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const response = await fetch(
        "http://localhost:5000/api/student/uploadProfilePic",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update profile picture");
      }

      setProfilePic(data.profilePic);
      setFile(null); // Clear the file input after successful upload
      setShowFileInput(false); // Hide the file input after upload
      Swal.fire({
        title: "Success!",
        text: "Profile picture updated.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: error.message || "An unknown error occurred",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  const handleCancel = () => {
    setFile(null);
    setShowFileInput(false);
  };

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-16 w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6 mt-10">
        <div className="flex justify-between mb-4">
          <div className="flex-col">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
            >
              {initial}
            </button>
            <button
              onClick={() => setShowFileInput(!showFileInput)}
              className="inline-flex items-center py-2 text-gray-700 font-semibold rounded-md shadow-sm hover:underline h-fit"
            >
              Change Profile Pic
            </button>
            {profilePic && !showFileInput && (
              <div className="mb-4 flex justify-center">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-32 h-32 sm:w-24 sm:h-24 object-cover rounded-full border border-gray-300"
                />
              </div>
            )}

            {showFileInput && (
              <div className="mt-4 flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="mb-2 sm:mb-0"
                />
                {file && (
                  <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Chosen file"
                      className="w-32 h-32 sm:w-24 sm:h-24 object-cover rounded-full border border-gray-300 mb-2 sm:mb-0"
                    />
                    <div className="flex flex-col sm:flex-row sm:space-x-2">
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 mb-2 sm:mb-0"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleProfilePicChange}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={toggleEditForm}
          className="rounded-lg px-4 py-2 border border-color bg-gray-100 text-gray-700 hover:bg-gray-200 transition mt-4 w-fit h-fit"
        >
          {showEditForm ? "Hide Edit Form" : "Edit"}
        </button>
      </div>

      {showEditForm && userData && (
        <div className="mt-4">
          <EditProfileForm userData={userData} />
        </div>
      )}
      <div className="space-y-4 mt-4 bg-white rounded-lg shadow-md p-6 ">
        <div>
          <h1 className="text-xl font-bold mb-1">Name</h1>
          <p className="text-base text-gray-700">
            {userData?.name}{" "}
            <span className="text-xs text-red-500">
              (This will be shown in Certificate)
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-1">Student ID</h1>
          <p className="text-base text-gray-700">{userData?.studentId}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-1">Contact Number</h1>
          <p className="text-base text-gray-700">{userData?.contactNumber}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-1">E-mail Address</h1>
          <p className="text-base text-gray-700">{userData?.emailAddress}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-1">Student Profile</h1>
          <p className="text-base text-gray-700">{userData?.studentProfile}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
