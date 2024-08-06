import LoginForm from "./LoginForm";
import Image from "next/image";

export default function Login() {
    return (
      <div className="">
        <div className="flex items-center justify-center mt-32">
          <div className="bg-white w-2/5 h-1/3 rounded-3xl shadow shadow-lg shadow-gray-800 p-5">
            <div className="text-center flex items-center justify-center text-color text-3xl font-bold ">
              <Image 
                src="/logo.png"
                width={100}
                height={100}  
                alt="logo"
              />
              <span>Skill On Time</span> 
            </div>
            <div className="text-center text-gray-500 font-bold">
              Student Login
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
  