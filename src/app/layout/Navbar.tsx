import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-5 py-2 h-[64px] flex items-center fixed">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo/Brand Name */}
        <div className="text-xl font-bold text-gray-800 cursor-pointer"><Link href="/">Artistly</Link></div>

        {/* Navigation Links */}
        <div className="md:flex rounded-full border border-black hidden">
          <a href="/artist" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in hover:bg-stone-300 rounded-full px-3 py-2">
            Find Artist
          </a>
          <a href="/onboarding" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-out hover:bg-stone-200 rounded-full px-3 py-2">
            Artist Onboarding
          </a>
          <a href="/pricing" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-stone-100 rounded-full px-3 py-2">
            Pricing
          </a>
        </div>

        {/* Dashboard Button */}
        <div>
          <a
            href="/dashboard"
            className="px-6 py-2 border border-black rounded-full bg-slate-300 text-black hover:bg-slate-500 transition duration-300"
          >
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;