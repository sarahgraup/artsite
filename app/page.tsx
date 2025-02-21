import { artworks } from './types/artwork';
import { ArtworkCard } from "./components/ArtworkCard";
import React from "react";

export default function Home() {

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-8'>
        {artworks.map((artwork) => (
          <ArtworkCard artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </div>
  );
}
