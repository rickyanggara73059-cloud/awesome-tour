import Link from "next/link";
import styles from "./journal.module.css";

const stories = [
  {
    number: "01",
    href: "/journal/lombok-travel-guide",
    category: "LOMBOK GUIDE",
    title: "A First Guide to Lombok",
    subtitle: "Where should you begin?",
    description:
      "An introduction to Lombok's landscapes, regions and the places worth taking your time to explore.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    href: "/journal/rinjani-guide",
    category: "MOUNTAIN",
    title: "Understanding Rinjani",
    subtitle: "More than a mountain.",
    description:
      "A closer look at Mount Rinjani, the landscapes around it and what makes the journey special.",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    href: "/journal/gili-islands-guide",
    category: "ISLAND LIFE",
    title: "The Gili Islands",
    subtitle: "Three islands, different moods.",
    description:
      "Discover the character of the Gili Islands, from quiet mornings in the water to slow afternoons by the coast.",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    href: "/journal/south-lombok-guide",
    category: "SOUTH LOMBOK",
    title: "The Southern Coast",
    subtitle: "Follow the road south.",
    description:
      "Open beaches, coastal roads, surf and the changing landscape of southern Lombok.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
  },
];

export const metadata = {
  title: "Journal — Awesome Tour",
  description:
    "Travel stories, destination guides and local perspectives from Lombok.",
};

export default function JournalPage() {
  const [featured, ...rest] = stories;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>THE JOURNAL · LOMBOK</p>

          <h1>
            Stories from
            <br />
            <em>the island.</em>
          </h1>

          <p className={styles.heroDescription}>
            Travel notes, destination guides and stories from the landscapes
            and people that make Lombok worth discovering slowly.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <span>TRAVEL · CULTURE · PLACES</span>
          <span>WEST NUSA TENGGARA</span>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionLabel}>
          <span>FEATURED STORY</span>
          <span>{featured.number}</span>
        </div>

        <Link href={featured.href} className={styles.featuredGrid}>
          <div className={styles.featuredImage}>
            <img src={featured.image} alt={featured.title} />
          </div>

          <div className={styles.featuredContent}>
            <p>{featured.category}</p>

            <h2>{featured.title}</h2>

            <h3>
              <em>{featured.subtitle}</em>
            </h3>

            <div className={styles.featuredBottom}>
              <span>{featured.description}</span>
              <b>Read story ↗</b>
            </div>
          </div>
        </Link>
      </section>

      <section className={styles.stories}>
        <div className={styles.storiesHeader}>
          <div>
            <p className={styles.eyebrowDark}>FROM THE JOURNAL</p>

            <h2>
              Notes for
              <br />
              <em>curious travellers.</em>
            </h2>
          </div>

          <p>
            A collection of guides, stories and observations to help you
            understand the island before you arrive.
          </p>
        </div>

        <div className={styles.storyList}>
          {rest.map((story, index) => (
            <article
              key={story.number}
              className={`${styles.story} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
            >
              <div className={styles.storyImage}>
                <img src={story.image} alt={story.title} />
                <span>{story.number}</span>
              </div>

              <div className={styles.storyContent}>
                <p className={styles.category}>{story.category}</p>

                <h3>{story.title}</h3>

                <h4>
                  <em>{story.subtitle}</em>
                </h4>

                <p className={styles.description}>
                  {story.description}
                </p>

                <Link href={story.href} className={styles.readLink}>
                  Explore destination
                  <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>FROM STORY TO JOURNEY</p>

          <h2>
            Read about it.
            <br />
            <em>Then go.</em>
          </h2>

          <p>
            Explore our journeys across Lombok and turn inspiration into a
            trip of your own.
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



