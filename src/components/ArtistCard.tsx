import { Artist } from "@/store/types/artist";
import React, { useState } from "react";

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
      className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          {location && (
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
              📍 <span>{location}</span>
            </p>
          )}
        </div>
        <img
          src={image || "https://placehold.co/400x300/e0e0e0/000000"}
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

      {/* Bio (Expandable) */}
      {bio && (
        <div className="text-sm text-gray-700">
          {showFullBio ? bio : `${bio.slice(0, 100)}...`}
          {bio.length > 100 && (
            <button
              onClick={toggleBio}
              className="ml-2 text-indigo-600 hover:underline text-xs font-medium"
            >
              {showFullBio ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      )}

      {/* Languages Spoken */}
      {languagesSpoken && languagesSpoken.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {languagesSpoken.map((lang, i) => (
            <span
              key={`${id}-lang-${i}`}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-md"
            >
              {lang}
            </span>
          ))}
        </div>
      )}

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
