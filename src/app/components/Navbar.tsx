"use client";
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="home">Home</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link href="/signup" className="text-white hover:text-gray-300">
              Signup
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
