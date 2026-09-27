import Link from "next/link";
import styles from "../article.module.css";

export default function RinjaniGuide() {
  return (
    <main className={styles.article}>
      <header className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay}>
          <p>JOURNAL · RINJANI</p>
          <h1>Understanding Rinjani</h1>
          <span>A mountain journey shaped by altitude, landscape and time.</span>
        </div>
      </header>

      <article className={styles.content}>
        <p className={styles.lead}>
          Mount Rinjani dominates the northern landscape of Lombok. For
          travelers who choose to climb it, the mountain becomes more than a
          destination—it becomes the central experience of the journey.
        </p>

        <h2>The highlands</h2>
        <p>
          The journey begins far from the coast, through villages and
          highland roads where the air becomes cooler and the landscape
          changes with every turn.
        </p>

        <h2>The climb</h2>
        <p>
          Rinjani trekking demands preparation and patience. The terrain,
          altitude and changing conditions make the experience very different
          from an ordinary day trip.
        </p>

        <h2>Sunrise on the mountain</h2>
        <p>
          Early mornings reveal another side of Rinjani. As the sky changes,
          the surrounding ridges, crater and distant coastline gradually
          become visible.
        </p>

        <div className={styles.related}>
          <span>EXPLORE</span>
          <Link href="/destinations/rinjani">Discover Rinjani →</Link>
          <Link href="/tours/rinjani-2d1n">Explore the Rinjani journey →</Link>
        </div>
      </article>
    </main>
  );
}
