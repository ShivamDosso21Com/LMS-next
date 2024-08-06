import Link from "next/link";


export default function LoginForm() {
    return (
      <>
        <form className=" px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-black font-bold mb-2" >
                    Username
                </label>
                <input className="shadow shadow-lg hover:shadow-gray-400 border rounded w-full py-2 px-3 text-gray-700" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
                <label className="block text-black text-sm font-bold mb-2" >
                    Password
                </label>
                <input className="shadow shadow-lg hover:shadow-gray-400 border rounded w-full py-2 px-3 text-gray-700" id="password" type="password" placeholder="********" />
                <p className="text-red-500 text-xs italic"></p>
            </div>
            <div className="grid items-center justify-center mt-6">
                <button className="flex float-center w-auto  items-center justify-center bg-color hover:bg-lightColor hover:text-gray-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline " type="button">
                    Sign In
                </button>
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-lightColor text-color mt-5" href={"forget"}>
                    Forgot Password?
                </Link>
            </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
            &copy;2024 skill on time.
        </p>      
            
      </>
    );
  }
  