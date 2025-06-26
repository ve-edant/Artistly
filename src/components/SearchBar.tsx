"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import categories from "@/app/lib/data/catetgories.json";
import { ArtistCategory } from "@/store/types/category";
import { useDispatch } from "react-redux";
import { setCategory, setSubCategory } from "@/store/categorySlice";

const typedCategories: ArtistCategory[] = categories;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const clearInput = () => {
    setQuery("");
    setShowSuggestions(false);
    dispatch(setCategory(""));
    dispatch(setSubCategory(""));
  };

  const handleSelect = (category: string, subCategory?: string | null) => {
    setQuery(subCategory ?? category);
    setShowSuggestions(false);

    dispatch(setCategory(category));
    dispatch(setSubCategory(subCategory ?? ""));

    // Redirect to /artists?cat=slug&sub=slug (slugify if needed)
    const categorySlug = typedCategories.find(c => c.category === category)?.slug ?? category.toLowerCase();
    const subSlug = subCategory?.toLowerCase().replace(/\s+/g, "-");
    const url = subCategory
      ? `/artists?category=${categorySlug}&sub=${subSlug}`
      : `/artists?category=${categorySlug}`;
    router.push(url);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search artists by categories..."
          className="flex-1 px-2 py-1 text-base focus:outline-none"
          aria-label="Search artists"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
        {query && (
          <button
            type="button"
            onClick={clearInput}
            aria-label="Clear"
            className="hover:bg-gray-200 rounded-full text-xl text-gray-500 px-3 py-0.5 transition"
          >
            ×
          </button>
        )}
        <button
          type="submit"
          aria-label="Search"
          className="bg-black text-white p-2 rounded-md ml-2 hover:bg-gray-900 transition"
        >
          <IoSearch size={20} />
        </button>
      </div>

      {/* Grouped Suggestions */}
      {showSuggestions && query.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-64 overflow-y-auto text-sm">
          {typedCategories.map((cat) => {
            const matchesCategory = cat.category.toLowerCase().includes(query.toLowerCase());
            const matchedSub = cat.subCategories.filter(sub =>
              sub.toLowerCase().includes(query.toLowerCase())
            );

            if (!matchesCategory && matchedSub.length === 0) return null;

            return (
              <li key={cat.slug}>
                {/* Category Header */}
                {matchesCategory && (
                  <div
                    onClick={() => handleSelect(cat.category)}
                    className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-100"
                  >
                    {cat.category}
                  </div>
                )}

                {/* Subcategories */}
                {matchedSub.map((sub, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelect(cat.category, sub)}
                    className="px-6 py-1 text-gray-600 cursor-pointer hover:bg-gray-50"
                  >
                    {sub}
                  </div>
                ))}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
