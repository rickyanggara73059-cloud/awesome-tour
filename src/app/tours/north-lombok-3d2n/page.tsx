import TourDetail from "../TourDetail";
import { tours } from "../tour-data";

const tour = tours.find((tour) => tour.slug === "north-lombok-3d2n")!;

export const metadata = {
  title: `${tour.title} | Lombok Awesome Tour`,
  description: tour.description,
};

export default function NorthLombok3D2NPage() {
  return <TourDetail tour={tour} />;
}
