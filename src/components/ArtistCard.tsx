"use client";

import { Artist } from "@/store/types/artist";
import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ArtistCard: React.FC<Artist> = ({
  id,
  name,
  image,
  category,
  subCategory,
  priceRange,
  location,
  rating,
  bio,
  languagesSpoken,
}) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const toggleBio = () => setShowFullBio(!showFullBio);

  return (
    <div
      key={id}
      className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
    >
      {/* Section 1: Header */}
      <div className="bg-black text-white dark:bg-zinc-900 px-6 py-4 flex items-center">
        <img
          src={image || "https://placehold.co/400x300/e0e0e0/000000"}
          alt={name || "Artist"}
          className="w-16 h-16 rounded-full border-2 border-white object-cover mr-4"
          loading="lazy"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{name}</h2>
          {location && (
            <p className="text-sm mt-1 flex items-center gap-1 text-gray-300">
              <FaLocationDot className="text-sm" />
              <span>{location}</span>
            </p>
          )}
        </div>
      </div>

      {/* Section 2: Info */}
      <div className="p-6 flex flex-col gap-4">
        {/* Category + Subcategories + Price */}
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm">
              <span className="font-medium">Category:</span> {category}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {subCategory.map((sub, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
          <div className="text-xl font-bold flex items-center gap-1 text-gray-950">
            <FaRupeeSign />
            {priceRange}
          </div>
        </div>

        {/* Bio */}
        {bio && (
          <div className="text-sm">
            {showFullBio ? bio : `${bio.slice(0, 100)}...`}
            {bio.length > 100 && (
              <button
                onClick={toggleBio}
                className="ml-2 text-indigo-500 hover:underline text-xs font-medium"
              >
                {showFullBio ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        )}

        {/* Languages */}
        {languagesSpoken && languagesSpoken.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {languagesSpoken.map((lang, i) => (
              <span
                key={`${id}-lang-${i}`}
                className="bg-gray-100 dark:bg-gray-700 text-gray-950 dark:text-gray-100 text-xs px-2 py-0.5 rounded-md"
              >
                {lang}
              </span>
            ))}
          </div>
        )}

        {/* Rating & CTA */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-yellow-500 font-semibold text-sm">
            ⭐ <span className="ml-1">{rating}</span>
          </div>
          <button className="bg-gradient-to-r from-[#000000] to-[#2D3436] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:brightness-110 transition">
            Ask Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
