"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Get_otp } from "../services/api/auth/Get_otp"; // Adjust the import path as needed
import { useRouter } from "next/navigation"; // Import from "next/navigation" for the app directory

export default function Login() {
  const [emailAddress, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false); // New state to manage OTP request
  const router = useRouter(); // Use the useRouter hook

  const isFormValid = emailAddress.trim() !== "";

  const handleOtp = async () => {
    if (isFormValid) {
      setLoading(true);
      try {
        await Get_otp(emailAddress);
        setOtpRequested(true);
        // Construct the URL with query parameters
        const queryParams = new URLSearchParams({ emailAddress }).toString();
        router.push(`/verify_otp?${queryParams}`);
      } catch (error) {
        console.error("Error requesting OTP:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 mx-4">
        <div className="text-center mb-6">
        <div className="flex justify-center items-center"> <Image 
            src="/logo.jpeg"
            width={100}
            height={100}  
            alt="logo"
            className="mt-10"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-10 -ml-4">Skill On Time</h1></div>
          <p className="text-gray-500 font-bold mt-2 text-xl">Forget Password</p>
        </div>
        <form className="space-y-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Enter E-mail
            </label>
            <input
              className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color"
              id="email"
              type="email" // Changed to "email" for better validation
              placeholder="E-mail"
              value={emailAddress}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-full ${
                isFormValid
                  ? "bg-black hover:bg-lightColor"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
              type="button"
              disabled={!isFormValid}
              onClick={handleOtp}
            >
              {loading ? "Loading..." : "Get OTP"}
            </button>
            <Link
              className="mt-4 text-color hover:text-lightColor font-bold text-sm"
              href="/"
            >
              Go to Login
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">
          &copy;2024 Skill On Time.
        </p>
      </div>
    </div>
  );
}
