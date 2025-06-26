"use client"
// app/artist/page.tsx
import { ArtistCategory } from "@/store/types/category";
import categories from "@/app/lib/data/catetgories.json";
import artistsData from "@/app/lib/data/artist.json";
import ClientArtistPage from "./ClientArtistPage";
import { Suspense } from "react";

export default function ArtistPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading filters...</div>}>
      <ClientArtistPage
        categories={categories as ArtistCategory[]}
        artists={artistsData}
      />
    </Suspense>
  );
}
