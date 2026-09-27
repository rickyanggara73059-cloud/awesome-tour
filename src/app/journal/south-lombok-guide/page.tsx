import Link from "next/link";
import styles from "../article.module.css";

export default function SouthLombokGuide() {
  return (
    <main className={styles.article}>
      <header className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay}>
          <p>JOURNAL · SOUTH LOMBOK</p>
          <h1>The Southern Coast</h1>
          <span>Open roads, turquoise water and a quieter side of Lombok.</span>
        </div>
      </header>

      <article className={styles.content}>
        <p className={styles.lead}>
          South Lombok is where the island opens toward the Indian Ocean.
          Long beaches, rolling hills and coastal roads create some of the
          most memorable landscapes in the region.
        </p>

        <h2>Beyond the beach</h2>
        <p>
          The southern coast is more than a collection of beautiful beaches.
          Villages, hills, local food and winding roads give the landscape a
          sense of place that rewards travelers who take their time.
        </p>

        <h2>The coast and the road</h2>
        <p>
          Moving between the beaches is part of the experience. The road
          itself becomes a journey, with viewpoints appearing between bays
          and small communities.
        </p>

        <h2>A slower Lombok</h2>
        <p>
          South Lombok works especially well for travelers who want space in
          their itinerary. There is room for swimming, surfing, exploring and
          simply stopping somewhere beautiful.
        </p>

        <div className={styles.related}>
          <span>EXPLORE</span>
          <Link href="/destinations">Discover South Lombok →</Link>
          <Link href="/tours/lombok-3d2n">Explore the Lombok journey →</Link>
        </div>
      </article>
    </main>
  );
}
