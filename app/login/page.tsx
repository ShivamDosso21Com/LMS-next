import LoginForm from "./LoginForm";

export default function Login() {
    return (
      <>
        <div className="bg-white w-1/2 h-1/3 rounded">
            <div className="">
              <div className="text-center text-color text-3xl font-bold pt-5">Skill On Time</div>
              <div className="text-center text-gray-500 font-bold">Login</div>
              <LoginForm />
            </div>
        </div>
      </>
    );
  }
  