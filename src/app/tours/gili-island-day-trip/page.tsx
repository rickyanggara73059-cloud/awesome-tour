import Link from "next/link";

export const metadata = {
  title: "Gili Island Experience — 1 Day | Awesome Tour",
  description:
    "A relaxed day around the Gili Islands with snorkeling, clear water and island time.",
};

const itinerary = [
  {
    day: "01",
    title: "Across the Gili Islands",
    description:
      "Leave Lombok in the morning and head toward the Gili Islands. Spend the day moving between clear waters, snorkeling spots and quiet island corners.",
    places: ["Gili Trawangan", "Gili Meno", "Gili Air"],
  },
  {
    day: "02",
    title: "Island Time",
    description:
      "Enjoy a slower afternoon on the island before returning toward Lombok. Swim, snorkel or simply take time to enjoy the sea.",
    places: ["Snorkeling", "Beach time", "Lombok return"],
  },
];

const included = [
  "Private transportation",
  "Boat transfers",
  "Snorkeling equipment",
  "Local guide",
  "Entrance and activity fees",
  "Mineral water",
];

const excluded = [
  "Personal expenses",
  "Lunch and dinner",
  "Travel insurance",
  "Underwater photography",
  "Optional activities",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    alt: "Tropical beach",
  },
  {
    src: "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1600&q=85",
    alt: "Tropical ocean",
  },
  {
    src: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1600&q=85",
    alt: "Island coastline",
  },
  {
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1600&q=85",
    alt: "Clear tropical water",
  },
];

export default function GiliIslandPage() {
  return (
    <main className="tourDetailPage">
      <section className="tourDetailHero">
        <div className="tourDetailHeroOverlay" />

        <div className="tourDetailHeroContent">
          <Link href="/tours" className="tourBackLink">
            ← ALL JOURNEYS
          </Link>

          <p className="eyebrow">ISLAND DAY TRIP · GILI</p>

          <h1>
            Gili Island
            <br />
            Experience.
          </h1>

          <div className="tourHeroMeta">
            <span>1 DAY</span>
            <span>FROM RP 750.000</span>
          </div>
        </div>
      </section>

      <section className="tourStory">
        <div className="tourStoryLabel">
          <p className="eyebrow">THE JOURNEY</p>
          <span>ONE DAY</span>
        </div>

        <div className="tourStoryContent">
          <h2>
            A day shaped
            <br />
            by the sea.
          </h2>

          <p>
            The Gili Islands are made for slow days: clear water, small boats,
            warm sand and time spent between the islands.
          </p>

          <p>
            This day trip combines island hopping and snorkeling with enough
            space to simply enjoy being surrounded by the sea.
          </p>
        </div>
      </section>

      <section className="tourFacts">
        <div>
          <span>01</span>
          <strong>Duration</strong>
          <p>1 Day</p>
        </div>

        <div>
          <span>02</span>
          <strong>Destination</strong>
          <p>Gili Islands</p>
        </div>

        <div>
          <span>03</span>
          <strong>Travel style</strong>
          <p>Island · Snorkeling · Leisure</p>
        </div>

        <div>
          <span>04</span>
          <strong>Starting from</strong>
          <p>Rp 750.000</p>
        </div>
      </section>

      <section className="itinerarySection">
        <div className="detailSectionHeader">
          <p className="eyebrow">THE ITINERARY</p>
          <h2>One day between the islands.</h2>
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
          <p className="eyebrow">ISLAND LIFE</p>
          <h2>Into the blue.</h2>
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
          <h2>A simple day, prepared properly.</h2>

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
          <h2>Before you sail.</h2>
        </div>

        <div className="importantList">
          <div>
            <strong>Bring sun protection</strong>
            <p>
              Sunglasses, sunscreen, a hat and comfortable clothing are useful
              throughout the day.
            </p>
          </div>

          <div>
            <strong>Sea conditions</strong>
            <p>
              Boat routes and snorkeling locations may change according to
              weather and sea conditions.
            </p>
          </div>

          <div>
            <strong>Respect marine life</strong>
            <p>
              Avoid touching coral or marine animals and follow local guidance
              while snorkeling.
            </p>
          </div>
        </div>
      </section>

      <section className="tourBookingCta">
        <p className="eyebrow">THE ISLANDS ARE WAITING</p>

        <h2>
          Take a day
          <br />
          by the sea.
        </h2>

        <p>
          Tell us your preferred date and number of travelers and we&apos;ll
          help arrange your island day.
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
          <Link href="/tours/lombok-3d2n">
            <span>01</span>
            Lombok Island Escape
            <b>↗</b>
          </Link>

          <Link href="/tours/rinjani-2d1n">
            <span>02</span>
            Rinjani Mountain Journey
            <b>↗</b>
          </Link>
        </div>
      </section>
    </main>
  );
}
