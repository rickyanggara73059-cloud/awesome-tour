import Link from "next/link";
import styles from "./rinjani.module.css";

export const metadata = {
  title: "Rinjani — Lombok Awesome Tour",
  description:
    "Explore Mount Rinjani, Sembalun, Senaru and mountain experiences in Lombok.",
};

const experiences = [
  "Rinjani trekking",
  "Sembalun sunrise",
  "Senaru village",
  "Waterfalls",
  "Local food",
  "Mountain landscapes",
];

export default function RinjaniPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: "url('/images/destinations/rinjani/rinjani01.jpg')" }}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>01 — NORTH LOMBOK</p>

          <h1>
            Rinjani
            <br />
            <em>above the clouds.</em>
          </h1>

          <p className={styles.heroDescription}>
            A mountain journey through highland landscapes, traditional
            villages and mornings above the clouds.
          </p>
        </div>

        <div className={styles.heroMeta}>
          <span>MOUNTAIN · ADVENTURE</span>
          <span>WEST NUSA TENGGARA</span>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>01 — THE MOUNTAIN</p>

        <div className={styles.introGrid}>
          <h2>
            A different
            <br />
            <em>perspective.</em>
          </h2>

          <div className={styles.introCopy}>
            <p className={styles.lead}>
              Mount Rinjani rises above Lombok as one of Indonesia&apos;s most
              remarkable mountain landscapes.
            </p>

            <p>
              The journey is as important as the summit: volcanic terrain,
              traditional villages, changing landscapes and long mornings
              above the clouds create an experience that stays with you.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.facts}>
        <div>
          <span>ALTITUDE</span>
          <strong>3,726 m</strong>
        </div>

        <div>
          <span>REGION</span>
          <strong>North Lombok</strong>
        </div>

        <div>
          <span>EXPERIENCE</span>
          <strong>Adventure</strong>
        </div>

        <div>
          <span>BEST FOR</span>
          <strong>Mountain lovers</strong>
        </div>
      </section>

      <section className={styles.experience}>
        <div
          className={styles.experienceImage}
          style={{ backgroundImage: "url('/images/destinations/rinjani/rinjani02.jpg')" }}
        />

        <div className={styles.experienceContent}>
          <p className={styles.sectionLabelLight}>02 — EXPERIENCES</p>

          <h2>
            More than
            <br />
            <em>the summit.</em>
          </h2>

          <div className={styles.experienceList}>
            {experiences.map((experience, index) => (
              <div key={experience}>
                <span>0{index + 1}</span>
                <strong>{experience}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.journey}>
        <div className={styles.journeyHeader}>
          <div>
            <p className={styles.sectionLabel}>03 — JOURNEY</p>

            <h2>
              Explore Rinjani
              <br />
              <em>with us.</em>
            </h2>
          </div>

          <p>
            A carefully planned mountain journey designed around the landscape,
            the pace of the trail and the experience of being in the highlands.
          </p>
        </div>

        <div className={styles.journeyCard}>
          <div>
            <span>THE RINJANI TOUR</span>
            <h3>Explore the mountain journey.</h3>
          </div>

          <strong>Itinerary and booking details</strong>

          <Link href="/tours/rinjani-2d1n">
            View tour <span>→</span>
          </Link>
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.sectionLabel}>READY TO GO?</p>

        <h2>
          Your Rinjani
          <br />
          <em>journey starts here.</em>
        </h2>

        <Link href="/tours/rinjani-2d1n" className={styles.ctaButton}>
          View the journey <span>↗</span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/destinations">← Back to destinations</Link>
        <span>RINJANI · LOMBOK</span>
      </footer>
    </main>
  );
}
