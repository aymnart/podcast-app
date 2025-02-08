"use client";

import EpisodesList from "@/components/episodes/EpisodesList";
import Hero from "../components/hero-section";
import PlaylistsList from "@/components/playlists/PlaylistsList";

export default function Home() {
  return (
    <div className="min-h-[dvh]">
      <Hero />
      <EpisodesList />
      <PlaylistsList/>
    </div>
  );
}
