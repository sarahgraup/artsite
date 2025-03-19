import { useState } from 'react';
import Image from 'next/image';
import { IImageModalProps } from '../types/artwork';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export function ImageModal({
  artworks,
  initialIndex,
  isOpen,
  onClose,
}: IImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  console.log('index in modal', currentIndex);

  if (!isOpen) return null;

  const currentArtwork = artworks[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artworks.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length,
    );
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center'>
      {/* Close button */}
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white hover:text-sienna-300 z-10'
      >
        <XIcon size={24} />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className='absolute left-4 text-white hover:text-sienna-300 z-10'
      >
        <ChevronLeftIcon size={36} />
      </button>

      <button
        onClick={goToNext}
        className='absolute right-4 text-white hover:text-sienna-300 z-10'
      >
        <ChevronRightIcon size={36} />
      </button>

      {/* Image container */}
      <div className='max-w-5xl max-h-[85vh] relative'>
        <Image
          src={currentArtwork.src}
          alt={currentArtwork.title}
          width={currentArtwork.width}
          height={currentArtwork.height}
          className='max-h-[85vh] w-auto object-contain'
        />
      </div>
    </div>
  );
}
