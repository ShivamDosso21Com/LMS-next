import LoginForm from "./LoginForm";

export default function Login() {
    return (
      <div className="">
      <div className="flex items-center justify-center mt-64">
        <div className="bg-white w-1/5 h-1/3 rounded-3xl shadow shadow-lg shadow-gray-800 p-5">
            <div className="">
              <div className="text-center text-color text-3xl font-bold pt-5">Skill On Time</div>
              <div className="text-center text-gray-500 font-bold">Student Login</div>
              <LoginForm />
            </div>
        </div>
      </div>
      </div>
    );
  }
  