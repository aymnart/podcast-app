"use client";

import EpisodesList from "@/components/episodes/EpisodesList";
import Hero from "@/components/hero-section";
import PlaylistsList from "@/components/playlists/PlaylistsList";
import HomeProductsList from "@/components/products/HomeProductsList";
import ProgramsList from "@/components/programs/ProgramsList";

export default function Home() {
  return (
    <div className="min-h-[dvh]">
      <Hero />
      <EpisodesList />
      <PlaylistsList type='slider' />
      <hr className="container mx-auto my-4 md:mt-8 md:mb-6 px-4 md:px-8 lg:px-16"></hr>
      <HomeProductsList/>
      <ProgramsList/>
    </div>
  );
}
