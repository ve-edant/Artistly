'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Artist } from '@/store/types/artist';
import ArtistCard from '@/components/ArtistCard';
import FiltersComponent from '@/components/FilterComponent';
import { ArtistCategory } from '@/store/types/category';

interface Props {
  artists: Artist[];
  categories: ArtistCategory[];
}

const priceRanges = ['5000-10000', '10000-20000', '20000-40000', '40000-80000', '100000'];
const locations = ['Pune', 'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Goa'];

export default function ClientArtistPage({ artists, categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filtersFromUrl = {
    category: searchParams.get('category') || '',
    subCategory: searchParams.get('sub') || '',
    location: searchParams.get('location') || '',
    priceRange: searchParams.get('price') || '',
  };

  const [filters, setFilters] = useState(filtersFromUrl);
  const [filtered, setFiltered] = useState<Artist[]>([]);

  useEffect(() => {
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
    <div className="w-full pt-[24px] px-4 py-6">
      <div className="fixed top-[64px] left-0 right-0 z-30 bg-white px-8 py-1 mb-5 lg:mb-10 ">
        <FiltersComponent
          filters={filters}
          updateSearchParams={updateSearchParams}
          categories={categories}
          locations={locations}
          priceRanges={priceRanges}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="flex justify-center items-center h-64 mt-[64px]">
          <span className="text-gray-500 text-lg">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[64px]">
          {filtered.map((artist) => (
        <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      )}
    </div>
  );
}
