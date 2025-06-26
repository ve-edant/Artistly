"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ArtistCard from "@/components/ArtistCard";

const DashboardPage = () => {
  const onboardedArtists = useSelector(
    (state: RootState) => state.onboarding.onboardedArtists
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Onboarded Artists</h1>

      {onboardedArtists.length === 0 ? (
        <p className="text-gray-500">No artists onboarded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onboardedArtists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
