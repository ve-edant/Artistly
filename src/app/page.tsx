"use client";
import React from "react";

const Home = () => {
  return (
    <main className="px-4 md:px-20 pt-10 md:pt-5 max-h-screen flex items-start md:items-center bg-white">
      <section className="w-full border min-h-[60vh] md:h-[90vh] border-black rounded-3xl p-3 md:p-12 content-end bg-gray-50">
        {/* Left Content */}
        <div className="w-full md:w-[50vw]">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Your Stage. Their Talent. <br className="hidden md:block" />
              Perfectly Connected.
            </h1>
            <p className="text-lg text-gray-700 max-w-xl hidden md:block">
              Whether you&apos;re an event planner seeking the perfect act or an
              artist manager looking for new leads,{" "}
              <strong>Artistly.com</strong> is your go-to hub for seamless
              performing artist bookings.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full flex flex-row gap-0 rounded-xl">
            <label htmlFor="search" className="sr-only">
              Search Artists
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search artists, genres..."
              className="w-4/5 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="w-1/5 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
