// Direct image URLs resolved from the supplied Unsplash photo pages.
// Keep image configuration separate from the authoritative itinerary and prices.
export const tourImages: Record<string, {
  src: string;
  alt: string;
  source: string;
  credit?: { author: string; license: string; licenseUrl: string };
}> = {
  "lombok-island-5d4n": {
    src: "https://images.unsplash.com/photo-1527369977102-ea8c4a693f85",
    alt: "Coastline at Merese Hill, Lombok",
    source: "https://unsplash.com/photos/2uGBupFOJBo",
  },
  "lombok-island-4d3n": {
    src: "https://images.unsplash.com/photo-1676938007570-cdff052a9841",
    alt: "Snorkeling with a sea turtle at Gili Meno, Lombok",
    source: "https://unsplash.com/photos/a-man-swimming-next-to-a-turtle-in-the-ocean-i4IeFFM62gA",
  },
  "north-lombok-3d2n": {
    src: "https://images.unsplash.com/photo-1725163938260-68e159b65fdc",
    alt: "Pergasingan Hill in Sembalun, Lombok",
    source: "https://unsplash.com/photos/a-scenic-view-of-a-mountain-with-clouds-in-the-sky-ZTIfh-q97fM",
  },
  "whale-shark-sumbawa": {
    src: "/images/tours/whale-shark/saleh-bay-whale-shark.jpg",
    alt: "Whale shark swimming in Saleh Bay, Sumbawa",
    source: "https://commons.wikimedia.org/wiki/File:Hiu_Paus_Teluk_Saleh_Sumbawa.jpg",
    credit: {
      author: "Egaryan Saadi",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
};
