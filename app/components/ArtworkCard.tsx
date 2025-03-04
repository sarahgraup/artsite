import Image from "next/image";
import { IArtwork } from "../types/artwork";

export function ArtworkCard({ artwork }: { artwork: IArtwork }) {
  return (
    <div key={artwork.id} className='break-inside-avoid mb-8'>
      <div className='relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300'>
        <div className='relative w-full'>
          <Image
            src={artwork.src}
            alt={artwork.title}
            width={artwork.width}
            height={artwork.height}
            className='w-full h-auto'
            priority={false}
          />
          <div className='absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300'></div>
        </div>
      </div>
    </div>
  );
}
