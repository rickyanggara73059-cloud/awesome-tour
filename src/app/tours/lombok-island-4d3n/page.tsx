import TourDetail from "../TourDetail";
import { tours } from "../tour-data";

const tour = tours.find((tour) => tour.slug === "lombok-island-4d3n")!;

export const metadata = {
  title: `${tour.title} | Awesome Tour`,
  description: tour.description,
};

export default function LombokIsland4D3NPage() {
  return <TourDetail tour={tour} />;
}
