"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 mx-4">
        <div className="text-center mb-6">
          <Image 
            src="/logo.png"
            width={100}
            height={100}  
            alt="logo"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Skill On Time</h1>
          <p className="text-gray-500 font-bold mt-2">Update Password</p>
        </div>
        <form className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
           Password
            </label>
            <input
              className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
             Confirm Password
            </label>
            <input
              className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`w-full ${isFormValid ? "bg-black hover:bg-lightColor" : "bg-gray-300 cursor-not-allowed"} text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
              type="button"
              disabled={!isFormValid}
            >
              Update Password
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
