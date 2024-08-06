"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Verify_otp } from '../services/api/auth/Verify_otp';

interface VerifyOtpProps {
  emailAddress: string;
 
}

const VerifyOtp: React.FC<VerifyOtpProps> = ({ emailAddress }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [otpS, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsTimeUp(true);
    }
  }, [timeLeft]);
  const handleVerify = async () => {
    console.log("clicked")
    const otpString = otpS.join('');
    const otp = parseInt(otpString, 10); 
    if (!isNaN(otp) && otpString.length === 6 && emailAddress.trim() !== '') {
      setLoading(true);
      try {
        await Verify_otp(emailAddress, otp); // Pass OTP as number
        // Handle successful verification
      } catch (error) {
        console.error("Verification error:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  const resendOtp = () => {
    setTimeLeft(120);
    setIsTimeUp(false);
    setOtp(Array(6).fill(''));
    inputRefs.current[0]?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otpS];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (value === '') {
      const newOtp = [...otpS];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otpS];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0 && otpS[index] === '') {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const isOtpFilled = otpS.every((digit) => digit !== '');

  return (
    <form
      className="form relative flex flex-col items-center max-w-md p-6 bg-white text-gray-800 border-2 border-black rounded-lg shadow-lg"
      onSubmit={(e) => {
        e.preventDefault();
        handleVerify();
      }}
    >
      <div className="info mb-5 text-center">
        <span className="title text-2xl font-bold">Verify OTP</span>
        <p className="description mt-2 text-lg">
          Enter the OTP sent to your registered E-mail
        </p>
      </div>

      <div className="input-fields flex justify-between gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            className="input-field w-12 h-12 text-center text-xl text-black border-2 border-gray-300 rounded focus:border-black focus:shadow-inner focus:scale-105 transition-transform duration-500"
            type="tel"
            maxLength={1}
            value={otpS[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <div className="action-btns flex mt-5 gap-2">
        {!isTimeUp && (
          <button
            className={`verify px-4 py-2 text-lg font-medium text-white bg-black border border-gray-800 rounded hover:bg-gray-800 transition-colors duration-500 ${!isOtpFilled || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={!isOtpFilled || loading}
            onClick={handleVerify}
          >
            verify
          </button>
        )}
      </div>

      {!isTimeUp && (
        <div className="timer mt-4 text-lg text-gray-700">
          Resend OTP: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </div>
      )}

      {isTimeUp && (
        <div className="action-btns flex mt-5 gap-2">
          <button
            className="resend px-4 py-2 text-lg font-medium text-black bg-transparent border border-gray-800 rounded hover:text-red-500 hover:border-red-500 transition-colors duration-500"
            type="button"
            onClick={resendOtp}
          >
            Resend OTP
          </button>
        </div>
      )}
    </form>
  );
};

export default VerifyOtp;
