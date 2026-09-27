import Link from "next/link";
import styles from "../article.module.css";

export default function LombokTravelGuide() {
  return (
    <main className={styles.article}>
      <header className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay}>
          <p>JOURNAL · LOMBOK</p>
          <h1>A First Guide to Lombok</h1>
          <span>Where the island begins to feel like a journey.</span>
        </div>
      </header>

      <article className={styles.content}>
        <p className={styles.lead}>
          Lombok is an island of contrasts. Mountains rise behind quiet
          villages, beaches stretch along the southern coast, and the Gili
          Islands offer a completely different rhythm of island life.
        </p>

        <h2>Start with the landscape</h2>
        <p>
          The easiest way to understand Lombok is to move through its
          landscapes. From the highlands around Mount Rinjani to the beaches
          of the south, each part of the island has its own character.
        </p>

        <h2>Meet the Sasak culture</h2>
        <p>
          Lombok is home to the Sasak people, whose traditions, architecture,
          food and village life remain an important part of the island's
          identity. A journey becomes more meaningful when there is time to
          experience the island beyond its famous viewpoints.
        </p>

        <h2>Choose your pace</h2>
        <p>
          Some travelers come for mountain trekking. Others come for beaches,
          snorkeling, surfing or simply a slower few days by the sea. Lombok
          allows all of these experiences to exist within one journey.
        </p>

        <div className={styles.related}>
          <span>EXPLORE</span>
          <Link href="/destinations">Discover Lombok destinations →</Link>
          <Link href="/tours/lombok-3d2n">Explore the Lombok journey →</Link>
        </div>
      </article>
    </main>
  );
}
