"use client";

import EpisodesList from "@/components/episodes/EpisodesList";
import Hero from "../components/hero-section";
import PlaylistsList from "@/components/playlists/PlaylistsList";
import ProgramsList from "@/components/programs/ProgramsList";

export default function Home() {
  return (
    <div className="min-h-[dvh]">
      <Hero />
      <EpisodesList />
      <PlaylistsList type='slider' />
      <ProgramsList/>
    </div>
  );
}
