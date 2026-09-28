import Link from "next/link";
import styles from "../article.module.css";

export default function GiliIslandsGuide() {
  return (
    <main className={styles.article}>
      <header className={styles.hero}>
        <div className={`${styles.heroImage} ${styles.giliHeroImage}`} />
        <div className={styles.heroOverlay}>
          <p>JOURNAL · GILI ISLANDS</p>
          <h1>The Gili Islands</h1>
          <span>Three islands, three different ways to slow down.</span>
        </div>
      </header>

      <article className={styles.content}>
        <p className={styles.lead}>
          Just off Lombok's northwest coast, the Gili Islands offer a
          different rhythm. Clear water, small beaches, coral reefs and
          evenings that seem to move more slowly.
        </p>

        <h2>Three islands, different personalities</h2>
        <p>
          Gili Trawangan, Gili Air and Gili Meno sit close together, yet each
          offers a different atmosphere. Choosing the right island depends on
          how you want your time by the sea to feel.
        </p>

        <h2>Life in the water</h2>
        <p>
          Snorkeling and swimming are central to the Gili experience. The
          surrounding waters make it easy to spend an entire day moving
          between beaches, reefs and quiet corners of the islands.
        </p>

        <h2>When the sun goes down</h2>
        <p>
          The islands change character toward evening. Beaches become places
          to watch the sunset, share a meal and simply let the day disappear.
        </p>

        <div className={styles.related}>
          <span>EXPLORE</span>
          <Link href="/tours/gili-island-day-trip">
            Explore the Gili Island Day Trip →
          </Link>
        </div>
      </article>
    </main>
  );
}
