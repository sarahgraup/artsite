'use client';
import { artworks } from './types/artwork';
import { ArtworkCard } from "./components/ArtworkCard";
import { useState } from "react";
import { ImageModal } from './components/ImageModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openModal = (index: number) => {
    setInitialIndex(index);
   
    setModalOpen(true);
     console.log("index", index);
    
  };

  const closeModal = () => {
    setModalOpen(false);
    setInitialIndex(0);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-8'>
        {artworks.map((artwork, index) => (
          <div key={artwork.id} onClick={() => openModal(index)}>
            <ArtworkCard artwork={artwork} />
          </div>
        ))}
      </div>
      {modalOpen && (
        <ImageModal
          artworks={artworks}
          initialIndex={initialIndex}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
