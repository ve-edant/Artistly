import { Artist } from "@/store/types/artist";
import React from "react";

const ArtistCard: React.FC<Artist> = ({
  id,
  name,
  image,
  category,
  subCategory,
  priceRange,
  location,
  rating,
}) => {
  return (
    <div
      key={id}
      className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Name & Location */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          {location && (
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
              📍 <span>{location}</span>
            </p>
          )}
        </div>

        {/* Avatar */}
        <img
          src={image || "/placeholder.jpg"}
          alt={name || "Artist"}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover ml-4"
        />
      </div>

      {/* Category + Price */}
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-gray-700 text-sm">
            <span className="font-medium">Category:</span> {category}
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {subCategory.map((sub, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Price:</span> {priceRange}
        </div>
      </div>

      {/* Rating + CTA */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center text-yellow-500 font-semibold text-sm">
          ⭐ <span className="ml-1">{rating}</span>
        </div>

        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:brightness-110 transition">
          Ask Quote
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;
