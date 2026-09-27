import Link from "next/link";
import styles from "./destinations.module.css";

const destinations = [
  {
    number: "01",
    name: "Rinjani",
    region: "North Lombok",
    description:
      "Mountain landscapes, village roads and unforgettable journeys around Mount Rinjani.",
    image:
      "https://images.unsplash.com/photo-1741845303120-61daa348ecd0?auto=format&fit=crop&w=1800&q=90",
    slug: "rinjani",
  },
  {
    number: "02",
    name: "Gili Islands",
    region: "West Lombok",
    description:
      "Clear water, coral gardens and slow island days across Lombok's famous islands.",
    image:
      "https://images.unsplash.com/photo-1530658432962-05f34932eb47?auto=format&fit=crop&w=1600&q=90",
    slug: "gili-islands",
  },
  {
    number: "03",
    name: "Mandalika",
    region: "South Lombok",
    description:
      "Open beaches, coastal roads, surf and the distinctive character of southern Lombok.",
    image:
      "https://images.unsplash.com/photo-1532506182952-9aaa2633962a?auto=format&fit=crop&w=1600&q=90",
    slug: "mandalika",
  },
];

export const metadata = {
  title: "Destinations — Awesome Tour",
  description:
    "Discover Rinjani, Gili Islands, Mandalika and the landscapes of Lombok.",
};

export default function DestinationsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>DESTINATIONS · LOMBOK</p>

          <h1>
            Discover the
            <br />
            <em>island differently.</em>
          </h1>

          <p className={styles.heroDescription}>
            From the mountains of Rinjani to the turquoise waters of the Gili
            Islands and the southern coast of Mandalika.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <span>WEST NUSA TENGGARA</span>
          <span>INDONESIA</span>
        </div>
      </section>

      <section className={styles.destinations}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrowDark}>EXPLORE LOMBOK</p>

            <h2>
              Places that make
              <br />
              <em>the island unforgettable.</em>
            </h2>
          </div>

          <p className={styles.sectionIntro}>
            Lombok changes character as you travel across the island. Discover
            its mountains, islands, beaches and the quieter roads between them.
          </p>
        </div>

        <div className={styles.destinationList}>
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className={styles.destination}
            >
              <div className={styles.destinationImage}>
                <img
                  src={destination.image}
                  alt={`${destination.name}, Lombok`}
                />

                <span className={styles.destinationNumber}>
                  {destination.number}
                </span>

                <span className={styles.destinationArrow}>↗</span>
              </div>

              <div className={styles.destinationInfo}>
                <div>
                  <p>{destination.region}</p>
                  <h3>{destination.name}</h3>
                </div>

                <div>
                  <span className={styles.exploreLabel}>
                    Explore destination
                  </span>
                  <p>{destination.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>YOUR LOMBOK JOURNEY</p>

          <h2>
            The island is
            <br />
            <em>waiting.</em>
          </h2>

          <p className={styles.ctaText}>
            Tell us how you want to experience Lombok and we will help shape
            the journey around you.
          </p>
        </div>

        <Link href="/tours" className={styles.ctaButton}>
          Explore our tours
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
