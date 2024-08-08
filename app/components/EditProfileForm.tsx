import React, { useState, useEffect } from "react";
import { Get_user_data } from "@/app/services/api/auth/Get_user_data";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const EditProfileForm = ({ userData }: { userData: any }) => {
  const [formData, setFormData] = useState({
   
    contactNumber: "",
    
  });

  useEffect(() => {
    if (userData) {
      setFormData({
       
        contactNumber: userData.contactNumber,
   
      });
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://localhost:5000/api/student/update", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`, // Use Bearer prefix if required by your API
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update data");
      }

      Swal.fire({
        title: "Success!",
        text: "Your details have been updated.",
        icon: "success",
        confirmButtonText: "OK"
      }).then(()=>{
        window.location.reload(); // Refresh the page to update the user data in the state
      });
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: error.message || "An unknown error occurred",
        icon: "error",
        confirmButtonText: "Try Again"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    
      <div>
        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="mt-1 block w-fit px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
 
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-black"
       
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
