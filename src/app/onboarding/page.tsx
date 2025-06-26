"use"
import React from "react";
import ArtistOnboardForm from "@/components/ArtistOnboardingForm";

const ArtistOnboardPage = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Onboard New Artist</h1>
      <ArtistOnboardForm />
    </div>
  );
};

export default ArtistOnboardPage;
