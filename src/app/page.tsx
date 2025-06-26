"use client";
import React from "react";
import CategoryCards from "@/components/CategoryCards";
import SearchBar from "@/components/SearchBar";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <main className="px-4 md:px-20 pt-10 md:pt-5 max-h-screen flex items-start md:items-center bg-white">
        <section className="w-full border min-h-[60vh] md:h-[90vh] border-black rounded-3xl p-3 md:p-12 content-end bg-gray-50">
          {/* Hero */}
          <div className="w-full md:w-[40vw]">
            <div className="flex-1 space-y-2">
              <h1 className="w-full text-3xl md:text-5xl font-bold leading-tight">
                Your Stage. <br className="hidden md:block" />
                Their Talent. <br className="hidden md:block" />
                Perfectly Connected.
              </h1>
              <p className="w-full text-lg text-gray-700 max-w-xl hidden md:block">
                Artistly.com connects event planners with top talent, and
                empowers artist managers with new opportunities.
              </p>
            </div>

            {/* Search Bar */}
            <SearchBar />
          </div>
          <CategoryCards />
        </section>
      </main>
    </Provider>
  );
};

export default Home;
