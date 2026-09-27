import Link from "next/link";

export const metadata = {
  title: "Lombok Island Escape — 3 Days / 2 Nights | Awesome Tour",
  description:
    "Experience Lombok through beaches, waterfalls, local culture and the quieter side of the island with Awesome Tour.",
};

const itinerary = [
  {
    day: "01",
    title: "South Lombok & The Coast",
    description:
      "Begin your journey along the southern coast of Lombok. Discover local villages, dramatic beaches and the relaxed rhythm of island life before settling into the evening.",
    places: ["Kuta Lombok", "Tanjung Aan", "Mawun Beach"],
  },
  {
    day: "02",
    title: "Waterfalls & Highland Roads",
    description:
      "Leave the coast behind and travel into Lombok's greener interior. Walk through tropical landscapes, discover a waterfall and experience the changing scenery of the island.",
    places: ["Tetebatu", "Waterfall", "Local village"],
  },
  {
    day: "03",
    title: "Culture, Sea & Departure",
    description:
      "Spend your final morning discovering local culture before making your way back toward the coast. A relaxed final chapter before departure.",
    places: ["Traditional village", "Local market", "Lombok coast"],
  },
];

const included = [
  "Private transportation during the trip",
  "English-speaking local guide",
  "Accommodation for 2 nights",
  "Daily breakfast",
  "Entrance fees according to itinerary",
  "Mineral water during the journey",
];

const excluded = [
  "Flights to and from Lombok",
  "Personal expenses",
  "Lunch and dinner",
  "Travel insurance",
  "Optional activities outside the itinerary",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85",
    alt: "Traditional Indonesian temple beside water",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
    alt: "Tropical landscape in Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1600&q=85",
    alt: "Tropical island coastline",
  },
  {
    src: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1600&q=85",
    alt: "Island beach and turquoise sea",
  },
];

export default function LombokIslandEscapePage() {
  return (
    <main className="tourDetailPage">
      <section className="tourDetailHero">
        <div className="tourDetailHeroOverlay" />

        <div className="tourDetailHeroContent">
          <Link href="/tours" className="tourBackLink">
            ← ALL JOURNEYS
          </Link>

          <p className="eyebrow">ISLAND ESCAPE · LOMBOK</p>

          <h1>
            Lombok
            <br />
            Island Escape.
          </h1>

          <div className="tourHeroMeta">
            <span>3 DAYS / 2 NIGHTS</span>
            <span>FROM RP 2.500.000</span>
          </div>
        </div>
      </section>

      <section className="tourStory">
        <div className="tourStoryLabel">
          <p className="eyebrow">THE JOURNEY</p>
          <span>01 — 03</span>
        </div>

        <div className="tourStoryContent">
          <h2>
            A slower way to
            <br />
            discover Lombok.
          </h2>

          <p>
            Lombok is an island best experienced at its own pace. This three-day
            journey brings together beaches, villages, waterfalls and local
            landscapes without trying to turn the island into a checklist.
          </p>

          <p>
            Travel from the southern coast into the greener highlands, meet the
            island through its everyday places and leave room for the moments
            between destinations.
          </p>
        </div>
      </section>

      <section className="tourFacts">
        <div>
          <span>01</span>
          <strong>Duration</strong>
          <p>3 Days / 2 Nights</p>
        </div>

        <div>
          <span>02</span>
          <strong>Destination</strong>
          <p>Lombok, West Nusa Tenggara</p>
        </div>

        <div>
          <span>03</span>
          <strong>Travel style</strong>
          <p>Private · Cultural · Nature</p>
        </div>

        <div>
          <span>04</span>
          <strong>Starting from</strong>
          <p>Rp 2.500.000</p>
        </div>
      </section>

      <section className="itinerarySection">
        <div className="detailSectionHeader">
          <p className="eyebrow">THE ITINERARY</p>
          <h2>Three days, thoughtfully arranged.</h2>
        </div>

        <div className="itineraryList">
          {itinerary.map((item) => (
            <article className="itineraryItem" key={item.day}>
              <div className="itineraryDay">{item.day}</div>

              <div className="itineraryMain">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="itineraryPlaces">
                  {item.places.map((place) => (
                    <span key={place}>{place}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detailGallery">
        <div className="detailGalleryIntro">
          <p className="eyebrow">FROM THE ISLAND</p>
          <h2>Places along the way.</h2>
        </div>

        <div className="detailGalleryGrid">
          {gallery.map((image, index) => (
            <figure
              className={`detailGalleryImage galleryImage${index + 1}`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="includedSection">
        <div className="includedColumn">
          <p className="eyebrow">INCLUDED</p>
          <h2>Everything you need to travel comfortably.</h2>

          <ul>
            {included.map((item) => (
              <li key={item}>
                <span>+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="excludedColumn">
          <p className="eyebrow">NOT INCLUDED</p>

          <ul>
            {excluded.map((item) => (
              <li key={item}>
                <span>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="importantSection">
        <div>
          <p className="eyebrow">GOOD TO KNOW</p>
          <h2>Before you go.</h2>
        </div>

        <div className="importantList">
          <div>
            <strong>Comfortable clothing</strong>
            <p>
              Lightweight clothing and comfortable walking shoes are recommended
              for the journey.
            </p>
          </div>

          <div>
            <strong>Flexible itinerary</strong>
            <p>
              Travel times may change depending on weather, traffic and local
              conditions.
            </p>
          </div>

          <div>
            <strong>Responsible travel</strong>
            <p>
              We encourage respectful interaction with local communities and
              responsible care for the places we visit.
            </p>
          </div>
        </div>
      </section>

      <section className="tourBookingCta">
        <p className="eyebrow">READY WHEN YOU ARE</p>
        <h2>
          Your Lombok story
          <br />
          starts here.
        </h2>

        <p>
          Tell us your preferred dates and number of travelers. Our team will
          help arrange the next steps.
        </p>

        <Link href="/booking" className="tourBookingButton">
          BOOK THIS TOUR <span>↗</span>
        </Link>
      </section>

      <section className="relatedTours">
        <div>
          <p className="eyebrow">KEEP EXPLORING</p>
          <h2>More journeys.</h2>
        </div>

        <div className="relatedTourLinks">
          <Link href="/tours/rinjani-2d1n">
            <span>01</span>
            Rinjani Mountain Journey
            <b>↗</b>
          </Link>

          <Link href="/tours/gili-island-day-trip">
            <span>02</span>
            Gili Island Experience
            <b>↗</b>
          </Link>
        </div>
      </section>
    </main>
  );
}
