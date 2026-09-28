import Link from "next/link";
import styles from "./experiences.module.css";

const experiences = [
  {
    number: "01",
    category: "MOUNTAIN",
    title: "Rinjani",
    subtitle: "Above the ordinary.",
    description:
      "Walk through the highlands of Lombok, meet mountain communities and experience the landscape around Mount Rinjani at a slower pace.",
    image: "/images/expeditions/rinjani-mountain.jpg",
  },
  {
    number: "02",
    category: "ISLAND LIFE",
    title: "Gili Islands",
    subtitle: "Into clear blue water.",
    description:
      "Swim above coral gardens, explore quiet beaches and spend an unhurried day moving between the Gili Islands.",
    image: "/images/expeditions/gili-trawangan-drone.jpg",
  },
  {
    number: "03",
    category: "LOCAL CULTURE",
    title: "Sasak Life",
    subtitle: "Closer to the island.",
    description:
      "Discover traditional villages, local crafts, food and stories that reveal another side of Lombok beyond the main tourist routes.",
    image: "/images/expeditions/benang-kelambu.jpg",
  },
  {
    number: "04",
    category: "COAST & SURF",
    title: "South Lombok",
    subtitle: "Where the road meets the sea.",
    description:
      "Follow coastal roads through southern Lombok, discover hidden beaches and experience the open landscape around Mandalika.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
  },
];

export const metadata = {
  title: "Experiences — Lombok Awesome Tour",
  description:
    "Discover mountain, island, cultural and coastal experiences across Lombok.",
};

export default function ExperiencesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>EXPERIENCES · LOMBOK</p>

          <h1>
            Travel for the
            <br />
            <em>moments.</em>
          </h1>

          <p className={styles.heroDescription}>
            Not just places to see, but experiences to remember. Discover
            Lombok through its mountains, islands, people and coast.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <span>CURATED EXPERIENCES</span>
          <span>WEST NUSA TENGGARA</span>
        </div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.eyebrowDark}>HOW YOU EXPERIENCE LOMBOK</p>

          <h2>
            Go beyond
            <br />
            <em>the itinerary.</em>
          </h2>
        </div>

        <p className={styles.introText}>
          Some of the best parts of travelling happen between the places on
          the map. Our experiences are designed around landscapes, local
          stories and the freedom to slow down.
        </p>
      </section>

      <section className={styles.experienceList}>
        {experiences.map((experience, index) => (
          <article
            key={experience.number}
            className={`${styles.experience} ${
              index % 2 === 1 ? styles.reverse : ""
            }`}
          >
            <div className={styles.imageWrap}>
              <img
                src={experience.image}
                alt={`${experience.title} experience in Lombok`}
              />

              <span className={styles.number}>{experience.number}</span>
            </div>

            <div className={styles.content}>
              <p className={styles.category}>{experience.category}</p>

              <h2>{experience.title}</h2>

              <h3>
                <em>{experience.subtitle}</em>
              </h3>

              <p className={styles.description}>
                {experience.description}
              </p>

              <Link href="/booking" className={styles.link}>
                Plan this experience
                <span>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>YOUR NEXT EXPERIENCE</p>

          <h2>
            Make Lombok
            <br />
            <em>your own.</em>
          </h2>

          <p>
            Tell us what kind of experience you are looking for and we will
            help shape your journey around it.
          </p>
        </div>

        <Link href="/booking" className={styles.ctaButton}>
          Plan your experience
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
