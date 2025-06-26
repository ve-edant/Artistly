import React from "react";

const ArtistCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 animate-pulse">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-2/3 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
        </div>
        <div className="w-16 h-16 rounded-full bg-gray-300 ml-4" />
      </div>

      {/* Category + Price */}
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div className="flex flex-col gap-1 w-2/3">
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="flex gap-2 mt-1">
            <div className="h-4 bg-gray-200 rounded-full w-12" />
            <div className="h-4 bg-gray-200 rounded-full w-16" />
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-20 mt-1" />
      </div>

      {/* Bio */}
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />

      {/* Languages */}
      <div className="flex flex-wrap gap-2 mt-1">
        <div className="h-4 bg-gray-200 rounded-md w-14" />
        <div className="h-4 bg-gray-200 rounded-md w-10" />
      </div>

      {/* Rating + CTA */}
      <div className="flex justify-between items-center mt-2">
        <div className="h-4 bg-gray-200 rounded w-16" />
        <div className="h-8 bg-gray-300 rounded-lg w-24" />
      </div>
    </div>
  );
};

export default ArtistCardSkeleton;
