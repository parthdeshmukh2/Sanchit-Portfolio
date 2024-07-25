import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await signIn("credentials", credentials);
    // Handle sign-in success or error (optional)
  };

  return (
    <div className="container mx-auto max-w-sm p-4 rounded-lg shadow-md bg-white">
      {" "}
      {/* Tailwind CSS classes */}
      <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex items-center">
          <label htmlFor="username" className="w-1/3 text-sm font-medium">
            Email:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="password" className="w-1/3 text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
