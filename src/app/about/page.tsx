import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us — Lombok Awesome Tour",
  description:
    "Discover the story, philosophy and local approach behind Lombok Awesome Tour in Indonesia.",
};

const places = [
  {
    number: "01",
    name: "Rinjani",
    type: "MOUNTAIN",
    description:
      "Highland roads, volcanic landscapes and journeys shaped by the presence of Mount Rinjani.",
    href: "/destinations/rinjani",
    image: "/images/about/rinjani-mountain.jpg",
  },
  {
    number: "02",
    name: "Gili Islands",
    type: "ISLAND LIFE",
    description:
      "Clear water, quiet mornings and a slower rhythm across Lombok's famous island trio.",
    href: "/destinations",
    image: "/images/about/gili-air.jpg",
  },
  {
    number: "03",
    name: "Mandalika",
    type: "COAST & CULTURE",
    description:
      "A changing southern coastline where beaches, local communities and new energy meet.",
    href: "/destinations",
    image: "/images/about/mandalika-coast.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p>ABOUT LOMBOK AWESOME TOUR · LOMBOK</p>

          <h1>
            Travel
            <br />
            <em>differently.</em>
          </h1>

          <p className={styles.heroText}>
            We create thoughtful journeys across Lombok and West Nusa
            Tenggara — built around local knowledge, meaningful experiences
            and the freedom to explore.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <span>LOCAL · THOUGHTFUL · CURIOUS</span>
          <span>LOMBOK · INDONESIA</span>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.sectionLabel}>
          <span>01 — OUR STORY</span>
        </div>

        <div className={styles.storyGrid}>
          <h2>
            More than
            <br />
            <em>a destination.</em>
          </h2>

          <div>
            <p className={styles.lead}>
              Lombok has a way of revealing itself slowly. A mountain road,
              an empty beach, a village gathering or a conversation over
              coffee can become the memory you remember long after the trip.
            </p>

            <p>
              Lombok Awesome Tour was created to help travellers experience that
              side of Lombok. We connect visitors with carefully selected
              journeys, local experiences and places that deserve more than
              a quick stop.
            </p>

            <p>
              From the slopes of Rinjani to the islands of Gili, from
              Mandalika to the quieter corners of Lombok, our approach is
              simple: travel with curiosity, respect the place and leave
              room for the unexpected.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className={styles.philosophyImage} />

        <div className={styles.philosophyContent}>
          <p className={styles.sectionLabelLight}>02 — HOW WE TRAVEL</p>

          <h2>
            Local
            <br />
            <em>knowledge.</em>
          </h2>

          <div className={styles.values}>
            <div className={styles.value}>
              <span>01</span>
              <div>
                <h3>Local perspective</h3>
                <p>
                  We believe the best journeys begin with people who know the
                  destination beyond the usual itinerary.
                </p>
              </div>
            </div>

            <div className={styles.value}>
              <span>02</span>
              <div>
                <h3>Thoughtful journeys</h3>
                <p>
                  Our trips are designed around experiences, not simply a
                  checklist of attractions.
                </p>
              </div>
            </div>

            <div className={styles.value}>
              <span>03</span>
              <div>
                <h3>Travel with respect</h3>
                <p>
                  We want visitors to enjoy Lombok while respecting its
                  communities, culture and natural environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.places}>
        <div className={styles.placesHeader}>
          <div>
            <p className={styles.sectionLabel}>03 — THE ISLAND</p>
            <h2>
              Places that
              <br />
              <em>shape our journeys.</em>
            </h2>
          </div>

          <p>
            Lombok is not one experience. Its mountains, islands, coastline
            and communities each reveal a different side of the island.
          </p>
        </div>

        <div className={styles.placeList}>
          {places.map((place) => (
            <Link href={place.href} className={styles.place} key={place.number}>
              <div className={styles.placeImage}>
                <img src={place.image} alt={place.name} />
                <span>{place.number}</span>
              </div>

              <div className={styles.placeContent}>
                <p>{place.type}</p>
                <h3>{place.name}</h3>
                <span>{place.description}</span>
                <strong>Explore place ↗</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.sectionLabel}>04 — YOUR JOURNEY</p>

        <h2>
          Come discover
          <br />
          <em>Lombok with us.</em>
        </h2>

        <div className={styles.ctaLinks}>
          <Link href="/tours" className={styles.primaryButton}>
            Explore journeys <span>↗</span>
          </Link>

          <Link href="/contact" className={styles.textLink}>
            Talk to us <span>→</span>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.logo}>
          LOMBOK AWESOME<span>TOUR</span>
        </Link>

        <span>LOMBOK · INDONESIA</span>
      </footer>
    </main>
  );
}
