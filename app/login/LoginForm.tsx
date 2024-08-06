import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <form className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow-lg hover:shadow-gray-400 border rounded w-full py-2 px-3 text-gray-700"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow-lg hover:shadow-gray-400 border rounded w-full py-2 px-3 text-gray-700"
            id="password"
            type="password"
            placeholder="********"
          />
          <p className="text-red-500 text-xs italic"></p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <Link
            className="mt-4 text-blue-500 hover:text-blue-700 font-bold text-sm"
            href="/forget"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs mt-4">
        &copy;2024 Skill On Time.
      </p>
    </>
  );
}
