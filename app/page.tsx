import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Artwork</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">hi</div>
            <div className="aspect-square relative">hi</div>
            <div className="aspect-square relative">hi</div>
          </div>
        </div>
      </main>
    </div>
  );
}
