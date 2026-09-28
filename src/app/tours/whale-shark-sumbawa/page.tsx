import TourDetail from "../TourDetail";
import { tours } from "../tour-data";

const tour = tours.find((tour) => tour.slug === "whale-shark-sumbawa")!;

export const metadata = {
  title: "Whale Shark Sumbawa | Saleh Bay Whale Shark Tour",
  description:
    "Experience a marine adventure with whale sharks in Saleh Bay, Sumbawa, including snorkeling and swimming from Labuhan Jambu.",
};

export default function WhaleSharkSumbawaPage() {
  return <TourDetail tour={tour} />;
}
