"use client"
import 'tailwindcss/tailwind.css';
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Perform signup logic here, e.g., sending a request to your server
    // with the provided name, email, and password.
    // If signup is successful, you can redirect the user or show a success message.
    // If it fails, you can show an error message.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
          <div className="mb-4">
            <label htmlFor="repeat_password" className="block text-gray-700">Repeat Password</label>
            <input
              type="repeat_password"
              id="repeat_password"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
          <button
            type="button"
            onClick={handleSignup}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
