// types/artwork.ts
export interface IArtwork {
  id: string;
  title: string;
  slug: string;
  src: string;
  //   thumbnailPath: string;
  description: string;
  medium: string;
    width: number;
    height: number;
  year: number;
  category?: string;
}

// data/artwork.ts
export const artworks: IArtwork[] = [
  {
    id: "1",
    title: "Bella Dog",
    slug: "bella-dog",
    src: "/artwork/bella.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "brown small dog named bella",
    medium: "digital painting",
    width: 4500,
    height: 3600,
    year: 2023,
    category: "animals",
  },
  {
    id: "2",
    title: "Adrian",
    slug: "adrian",
    src: "/artwork/adrian.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "side profile of boy",
    medium: "digital painting",
    width: 1640,
    height: 2360,
    year: 2023,
    category: "people",
  },
  {
    id: "3",
    title: "Koi Fish",
    slug: "Koi-fish",
    src: "/artwork/koi-fish.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "women underwater surrounded by koi fish",
    medium: "digital painting",
    width: 1718,
    height: 2212,
    year: 2023,
    category: "people",
  },
  {
    id: "4",
    title: "Womens Body",
    slug: "womens-body",
    src: "/artwork/body.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "side profile of woman",
    medium: "digital painting",
    width: 1640,
    height: 2360,
    year: 2023,
    category: "people",
  },
  {
    id: "5",
    title: "sunny",
    slug: "sunny",
    src: "/artwork/sunglasses.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "woman with sunglasses reflecting the beach",
    medium: "digital painting",
    width: 1790,
    height: 2048,
    year: 2023,
    category: "people",
  },
  {
    id: "6",
    title: "closeup",
    slug: "closeup",
    src: "/artwork/closeup.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "woman closeup",
    medium: "digital painting",
      width: 2048,
    height:2048,
    year: 2023,
    category: "people",
  },
  {
    id: "7",
    title: "tongue out",
    slug: "tongue-out",
    src: "/artwork/tongue.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "woman tongue and teeth closeup",
    medium: "digital painting",
    width: 1650,
    height: 2048,
    year: 2023,
    category: "people",
  },
  {
    id: "8",
    title: "Grandma Black and White",
    slug: "grandma",
    src: "/artwork/grandma.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "black and white of grandma",
    medium: "digital painting",
    width: 960,
    height: 720,
    year: 2023,
    category: "people",
  },
  {
    id: "9",
    title: "mom black and white",
    slug: "mom-black-and-white",
    src: "/artwork/mom-acrylic.jpeg",
    // thumbnailPath: "/artwork/thumbnails/mountain-sunset.jpg",
    description: "black and white acrylic painting of mom",
    medium: "acrylic painting on canvas",
    width: 4284,
    height: 5712,
    year: 2024,
    category: "people",
  },
  // Add other artworks...
];
