import React from "react";

interface TimelapseVideoProps {
  src: string;
  poster?: string;
}

export default function TimelapseVideo({ src, poster }: TimelapseVideoProps) {
    return (
      <div className='w-full mb-12 rounded-xl overflow-hidden'>
        <video
          className='w-full h-auto'
          autoPlay
          loop
          muted
          controlsList='nodownload'
          playsInline
          poster={poster}
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    );
    
}
