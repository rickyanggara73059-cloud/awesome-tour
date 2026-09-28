import TourDetail from "../TourDetail";
import { tours } from "../tour-data";

const tour = tours.find((tour) => tour.slug === "lombok-island-5d4n")!;

export const metadata = {
  title: `${tour.title} | Lombok Awesome Tour`,
  description: tour.description,
};

export default function LombokIsland5D4NPage() {
  return <TourDetail tour={tour} />;
}
