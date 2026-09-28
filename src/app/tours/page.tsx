import Link from "next/link";

import { tours } from "./tour-data";

import { tourImages } from "./tour-images";

export const metadata = {
  title: "Lombok Tours | Lombok Awesome Tour",
  description:
    "Explore Lombok Island 5D4N, Lombok Island 4D3N and North Lombok 3D2N with Lombok Awesome Tour.",
};

export default function ToursPage() {
  return (
    <main className="tours-page">
      <section className="toursHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(18, 52, 59, 0.72), rgba(18, 52, 59, 0.12)), url("${tourImages["lombok-island-5d4n"].src}?auto=format&fit=crop&w=2200&q=90")` }}>
        <div className="toursHeroOverlay" />

        <div className="toursHeroContent">
          <p className="eyebrow">CURATED JOURNEYS · LOMBOK · INDONESIA</p>
          <h1>
            Journeys worth
            <br />
            remembering.
          </h1>
          <p>
            Thoughtfully designed trips for travelers who want to experience
            Lombok beyond the usual itinerary.
          </p>
        </div>
      </section>

      <section className="tourIntro">
        <div>
          <p className="eyebrow">OUR JOURNEYS</p>
          <h2>Choose your way into Lombok.</h2>
        </div>

        <p>
          From the mountains of Rinjani to the turquoise waters of the Gili
          Islands, each journey is built around place, people and experience.
        </p>
      </section>

      <section className="tourList">
        {tours.map((tour, index) => (
          <article className={`tourFeature ${index % 2 !== 0 ? "reverse" : ""}`} key={tour.slug}>
            <div className="tourFeatureImage">
              <img src={`${tourImages[tour.slug].src}?auto=format&fit=crop&w=1800&q=85`} alt={tourImages[tour.slug].alt} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="tourFeatureContent">
              <p className="eyebrow">{tour.category}</p>

              <h2>{tour.title}</h2>

              <div className="tourMeta">
                <span>{tour.duration}</span>
                <span>{tour.location}</span>
              </div>

              <p className="tourDescription">{tour.description}</p>

              <div className="tourHighlights">
                {tour.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>

              <div className="tourBottom">
                <div>
                  <small>FROM</small>
                  <strong>{tour.price}</strong>
                </div>

                <Link href={`/tours/${tour.slug}`} className="tourLink">
                  VIEW JOURNEY <span>↗</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="tourClosing">
        <p className="eyebrow">TRAVEL WITH INTENTION</p>
        <h2>
          Not just a place
          <br />
          to visit.
        </h2>
        <p>
          We believe the best journeys leave you with more than photographs:
          stories, conversations and a deeper sense of place.
        </p>

        <Link href="/booking" className="tourClosingLink">
          PLAN YOUR JOURNEY <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
