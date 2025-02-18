import Image from "next/image";
'use client';
import React from "react";

export default function Home() {
  /**
   * loading images up
   * images as state
   * if images are loading use loading page
   * if loaded, show masonry
   * 
   * 
   * 
   */
  const [images, setImages] = React.useState()
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 items-center min-h-screen p-8 pb-10 gap-4 sm:p-20">
      <div className="w-full aspect-square bg-slate-500">hi col 1</div>
      <div className="w-full aspect-square bg-slate-500">hi col 1</div>

      <div className="w-full aspect-square bg-slate-500">hi col 2</div>
      <div className="w-full aspect-square bg-slate-500">hi col 2</div>

      <div className="w-full aspect-square bg-slate-500">hi col 3</div>
      <div className="w-full aspect-square bg-slate-500">hi col 3</div>
    </div>
  );
}
