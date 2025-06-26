"use client";

import React, { useMemo, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import { ArtistCategory } from "@/store/types/category";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FiltersProps {
  filters: {
    location: string;
    priceRange: string;
    category: string;
    subCategory: string;
  };
  updateSearchParams: (params: Partial<FiltersProps["filters"]>) => void;
  categories: ArtistCategory[];
  locations: string[];
  priceRanges: string[];
}

const FiltersComponent: React.FC<FiltersProps> = ({
  filters,
  updateSearchParams,
  categories,
  locations,
  priceRanges,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const subCategoryOptions = useMemo(() => {
    return categories.flatMap((cat) =>
      cat.subCategories.map((sub) => ({
        label: sub,
        value: sub,
      }))
    );
  }, [categories]);

  return (
    <div className="w-full">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-sm font-medium text-white bg-black px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
      >
        <GiSettingsKnobs size={18} /> Filters
      </button>

      {showFilters && (
        <div className="fixed flex flex-col gap-4 bg-white p-4 rounded-xl border border-gray-200">
          {/* Location Filter */}
          <div>
            <label className="text-xs font-semibold flex items-center gap-1 mb-1">
              <FaLocationDot /> Location
            </label>
            <Select
              value={filters.location}
              onValueChange={(val) => updateSearchParams({ location: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Filter */}
          <div>
            <label className="text-xs font-semibold flex items-center gap-1 mb-1">
              <RiMoneyRupeeCircleFill /> Price Range
            </label>
            <Select
              value={filters.priceRange}
              onValueChange={(val) => updateSearchParams({ priceRange: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-xs font-semibold flex items-center gap-1 mb-1">
              <BiSolidCategory /> Category
            </label>
            <Select
              value={filters.category}
              onValueChange={(val) => updateSearchParams({ category: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat: ArtistCategory) => (
                  <SelectItem key={cat.slug} value={cat.category}>
                    {cat.category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Subcategory Filter */}
          <div>
            <label className="text-xs font-semibold flex items-center gap-1 mb-1">
              <TbCategory /> Subcategory
            </label>
            <Select
              value={filters.subCategory}
              onValueChange={(val) => updateSearchParams({ subCategory: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                {subCategoryOptions.map((option) => (
                  <SelectItem key={uuidv4()} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersComponent;
