"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { login } from "./services/api/auth/Login"; // Update with the actual path
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const isFormValid = userName.trim() !== "" && password.trim() !== "";

  const handleLogin = async () => {
    if (isFormValid) {
      setLoading(true);
      try {
        await login(userName, password);
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 mx-4">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center">
            <Image 
              src="/logo-min.png"
              width={100}
              height={100}  
              alt="logo"
              className="mt-10"
            />
            <h1 className="lg:text-3xl sm:text-lg font-bold text-gray-800 mt-10 -ml-4">Skill On Time</h1>
          </div>
          <p className="text-gray-500 font-bold mt-2 text-xl">Student Login</p>
        </div>
        <form className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color"
              id="username"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow-lg border rounded w-full py-2 px-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color"
                id="password"
                type={showPassword ? "text" : "password"} // Conditionally set input type
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`w-full ${isFormValid ? "bg-color hover:bg-lightColor" : "bg-gray-300 cursor-not-allowed"} text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
              type="button"
              onClick={handleLogin}
              disabled={!isFormValid || loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <Link
              className="mt-4 text-color hover:text-lightColor font-bold text-sm"
              href="/forget_password"
            >
              Forgot Password?
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
