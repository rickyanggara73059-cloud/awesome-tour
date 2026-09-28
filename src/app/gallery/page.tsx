import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Lombok Travel Gallery | Lombok Awesome Tour",
  description:
    "Explore our collection of Lombok travel photography, from Mount Rinjani and the Gili Islands to beaches, waterfalls, Mandalika and Sasak culture.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
