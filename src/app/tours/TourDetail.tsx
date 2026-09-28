import Link from "next/link";
import { tours, type Tour } from "./tour-data";
import { tourImages } from "./tour-images";

export default function TourDetail({ tour }: { tour: Tour }) {
  const image = tourImages[tour.slug];
  const facts = [
    ["Duration", tour.duration],
    ["Destination", tour.location],
    ["Price", tour.price],
    tour.minimum
      ? ["Minimum", tour.minimum]
      : ["Itinerary", `${tour.itinerary.length} days`],
  ];

  return (
    <main className="tourDetailPage">
      <section className="tourDetailHero" style={{ backgroundImage: `url("${image.src}?auto=format&fit=crop&w=2400&q=90")` }}>
        <div className="tourDetailHeroOverlay" />
        <div className="tourDetailHeroContent">
          <Link href="/tours" className="tourBackLink">← ALL JOURNEYS</Link>
          <p className="eyebrow">{tour.category}</p>
          <h1>{tour.title}</h1>
          <div className="tourHeroMeta">
            <span>{tour.duration}</span>
            <span>{tour.price}</span>
            {tour.minimum && <span>Minimum: {tour.minimum}</span>}
          </div>
        </div>
      </section>

      {image.credit && (
        <p
          style={{
            margin: 0,
            padding: "0.65rem 24px",
            background: "#f4f1ea",
            color: "#1d2424",
            fontSize: "0.7rem",
            textAlign: "right",
          }}
        >
          Photo: {" "}
          <a href={image.source} target="_blank" rel="noreferrer">
            {image.credit.author}
          </a>
          {" · "}
          <a
            href={image.credit.licenseUrl}
            target="_blank"
            rel="noreferrer"
          >
            {image.credit.license}
          </a>
          {" · Unmodified"}
        </p>
      )}

      <section className="tourStory">
        <div className="tourStoryLabel">
          <p className="eyebrow">THE JOURNEY</p>
          <span>01 — {String(tour.itinerary.length).padStart(2, "0")}</span>
        </div>
        <div className="tourStoryContent">
          <h2>{tour.title}</h2>
          <p>{tour.description}</p>
        </div>
      </section>

      <section className="tourFacts">
        {facts.map(([label, value], index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <p>{value}</p>
          </div>
        ))}
      </section>

      <section className="itinerarySection">
        <div className="detailSectionHeader">
          <p className="eyebrow">THE ITINERARY</p>
          <h2>Your day-by-day journey.</h2>
        </div>
        <div className="itineraryList">
          {tour.itinerary.map((day, index) => (
            <article className="itineraryItem" key={index}>
              <div className="itineraryDay">Day {index + 1}</div>
              <div className="itineraryMain">
                <h3>{day.title}</h3>
                {day.entries.map((entry, entryIndex) => <p key={entryIndex}>{entry}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      {(tour.included.length > 0 || tour.mealNotes) && (
        <section className="includedSection">
          {tour.included.length > 0 && (
            <div className="includedColumn">
              <p className="eyebrow">INCLUDED</p>
              <h2>Tour inclusions.</h2>
              <ul>
                {tour.included.map((item) => <li key={item}><span>+</span>{item}</li>)}
              </ul>
            </div>
          )}
        {tour.mealNotes && (
          <div className="excludedColumn">
            <p className="eyebrow">MEAL NOTES & EXCLUSIONS</p>
            <ul>
              {tour.mealNotes.map((note) => <li key={note}><span>—</span>{note}</li>)}
            </ul>
          </div>
        )}
        </section>
      )}

      <section className="tourBookingCta">
        <p className="eyebrow">PLAN YOUR JOURNEY</p>
        <h2>{tour.title}</h2>
        <Link href="/booking" className="tourBookingButton">BOOK THIS TOUR <span>↗</span></Link>
      </section>

      <section className="relatedTours">
        <div>
          <p className="eyebrow">KEEP EXPLORING</p>
          <h2>More journeys.</h2>
        </div>
        <div className="relatedTourLinks">
          {tours.filter((other) => other.slug !== tour.slug).map((other, index) => (
            <Link href={`/tours/${other.slug}`} key={other.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {other.title}
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
