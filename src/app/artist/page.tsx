'use client';

import React, { useEffect, useState } from 'react';
import ArtistCard from '@/components/ArtistCard';
import artistsData from '@/app/lib/data/artist.json';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import categories from '@/app/lib/data/catetgories.json';
import { ArtistCategory } from '@/store/types/category';
import { v4 as uuidv4 } from 'uuid';

type Artist = {
  id: string;
  name: string;
  image: string;
  category: string;
  subCategory: string[];
  priceRange: string;
  location: string;
  rating: number;
};

const priceRanges = ['5000-10000', '10000-20000', '20000-40000', '40000-80000', '100000'];
const locations = ['Pune','Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Goa'];

const Page = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filtered, setFiltered] = useState<Artist[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const filtersFromUrl = {
    category: searchParams.get('category') || '',
    subCategory: searchParams.get('sub') || '',
    location: searchParams.get('location') || '',
    priceRange: searchParams.get('price') || '',
  };

  const [filters, setFilters] = useState(filtersFromUrl);

  useEffect(() => {
    setArtists(artistsData);
  }, []);

  useEffect(() => {
    // Filter artists whenever filters change
    const filteredList = artists.filter((artist) => {
      return (
        (filters.location === '' || artist.location === filters.location) &&
        (filters.priceRange === '' || artist.priceRange === filters.priceRange) &&
        (filters.category === '' || artist.category.toLowerCase() === filters.category.toLowerCase()) &&
        (filters.subCategory === '' || artist.subCategory.includes(filters.subCategory))
      );
    });
    setFiltered(filteredList);
  }, [filters, artists]);

  const updateSearchParams = (newFilters: Partial<typeof filters>) => {
    const updated = { ...filters, ...newFilters };
    const params = new URLSearchParams();

    if (updated.category) params.set('category', updated.category);
    if (updated.subCategory) params.set('sub', updated.subCategory);
    if (updated.location) params.set('location', updated.location);
    if (updated.priceRange) params.set('price', updated.priceRange);

    router.push(`/artist?${params.toString()}`);
    setFilters(updated);
  };

  return (
    <div className="w-full px-4 py-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Location Filter */}
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

        {/* Price Range Filter */}
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

        {/* Category Filter */}
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

        {/* Subcategory Filter */}
        <Select value={filters.subCategory} onValueChange={(val)=>updateSearchParams({category: val})}>
          <SelectTrigger>
            <SelectValue placeholder="Values" />
          </SelectTrigger>
          <SelectContent>
            {
              categories.flatMap((cat:ArtistCategory)=>
                cat.subCategories.map((sub)=>(
                <SelectItem key={uuidv4()} value={sub}>
                  {sub}
                </SelectItem>
              )))
            }
          </SelectContent>
        </Select>
      </div>

      {/* Artist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((artist) => (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            name={artist.name}
            image={artist.image}
            category={artist.category}
            subCategory={artist.subCategory}
            priceRange={artist.priceRange}
            location={artist.location}
            rating={artist.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
