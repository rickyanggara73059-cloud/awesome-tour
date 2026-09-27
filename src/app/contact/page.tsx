import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact — Awesome Tour",
  description:
    "Contact Awesome Tour to plan your Lombok and West Nusa Tenggara journey.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>CONTACT AWESOME TOUR</p>

          <h1>
            Let&apos;s plan
            <br />
            <em>your journey.</em>
          </h1>

          <p className={styles.heroText}>
            Have a question about a tour, want to arrange a private journey,
            or simply need help deciding where to go? Tell us what you have
            in mind.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <span>TRAVEL · LOMBOK · INDONESIA</span>
          <span>GET IN TOUCH</span>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.details}>
          <p className={styles.sectionLabel}>01 — GET IN TOUCH</p>

          <h2>
            Start with
            <br />
            <em>a conversation.</em>
          </h2>

          <p className={styles.detailsIntro}>
            Tell us what kind of journey you have in mind. Whether you already
            know where you want to go or need some ideas, we&apos;re here to
            help shape the trip.
          </p>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <span>WHATSAPP</span>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation <span>→</span>
              </a>
            </div>

            <div className={styles.contactItem}>
              <span>EMAIL</span>
              <a href="mailto:hello@awesometour.id">
                hello@awesometour.id <span>→</span>
              </a>
            </div>

            <div className={styles.contactItem}>
              <span>SOCIAL</span>
              <div className={styles.socials}>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">TikTok</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span>LOCATION</span>
              <p>
                Lombok
                <br />
                West Nusa Tenggara
                <br />
                Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formWrap}>
          <div className={styles.formHeader}>
            <p className={styles.sectionLabel}>02 — SEND AN INQUIRY</p>

            <h2>
              Tell us
              <br />
              <em>about your trip.</em>
            </h2>
          </div>

          <form className={styles.form}>
            <div className={styles.formRow}>
              <label>
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className={styles.formRow}>
              <label>
                <span>WhatsApp</span>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="+62..."
                />
              </label>

              <label>
                <span>What are you interested in?</span>
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    Select an experience
                  </option>
                  <option value="lombok">Lombok Tour</option>
                  <option value="rinjani">Rinjani</option>
                  <option value="gili">Gili Islands</option>
                  <option value="mandalika">Mandalika</option>
                  <option value="private">Private Journey</option>
                  <option value="other">Something else</option>
                </select>
              </label>
            </div>

            <label>
              <span>Tell us about your trip</span>
              <textarea
                name="message"
                rows={7}
                placeholder="Travel dates, number of guests, places you want to visit..."
              />
            </label>

            <button type="submit" className={styles.submit}>
              Send inquiry <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <p className={styles.sectionLabel}>03 — LOMBOK IS WAITING</p>

        <h2>
          Not sure where
          <br />
          <em>to begin?</em>
        </h2>

        <Link href="/tours" className={styles.ctaLink}>
          Explore our journeys <span>↗</span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.logo}>
          AWESOME<span>TOUR</span>
        </Link>

        <span>LOMBOK · INDONESIA</span>
      </footer>
    </main>
  );
}
