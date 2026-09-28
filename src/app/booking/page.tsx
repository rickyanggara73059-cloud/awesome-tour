"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./booking.module.css";
import { tours, type Tour } from "../tours/tour-data";

function getPriceAmount(price: string) {
  const priceInThousands = price.match(/IDR\s*([\d.]+)\s*K\b/i);
  if (priceInThousands) {
    return Number(priceInThousands[1].replace(/\./g, "")) * 1000;
  }

  const priceInRupiah = price.match(/IDR\s*([\d.]+)/i);
  return priceInRupiah
    ? Number(priceInRupiah[1].replace(/\./g, ""))
    : 0;
}

function getMinimumTravelers(tour?: Tour) {
  const minimum = tour?.minimum?.match(/\d+/);
  return minimum ? Number(minimum[0]) : 1;
}

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
  const [travelers, setTravelers] = useState(2);

  const selectedTourData = useMemo(
    () => tours.find((tour) => tour.slug === selectedTour),
    [selectedTour]
  );

  const estimatedTotal = selectedTourData
    ? getPriceAmount(selectedTourData.price) * travelers
    : 0;

  function formatPrice(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const tourSlug = String(formData.get("tour") ?? "");
    const tour = tours.find((item) => item.slug === tourSlug);
    const travelerCount = Number(formData.get("travelers"));

    if (!tour || travelerCount < getMinimumTravelers(tour)) return;

    const message = [
      "Hello Awesome Tour,",
      "",
      "I would like to make a booking request:",
      "",
      `Tour: ${tour.title}`,
      `Travelers: ${travelerCount}`,
      `Full Name: ${String(formData.get("name") ?? "")}`,
      `Email: ${String(formData.get("email") ?? "")}`,
      `WhatsApp: ${String(formData.get("whatsapp") ?? "")}`,
      "",
      "Message:",
      String(formData.get("message") ?? ""),
      "",
      "Please let me know the availability and next steps for this tour.",
      "",
      "Thank you.",
    ].join("\n");

    setSubmitted(true);
    window.location.href =
      `https://wa.me/6282147314910?text=${encodeURIComponent(message)}`;
  }

  function handleTourChange(slug: string) {
    const tour = tours.find((item) => item.slug === slug);
    setSelectedTour(slug);
    setTravelers((current) =>
      Math.max(current, getMinimumTravelers(tour))
    );
  }

  function handleReset() {
    setSubmitted(false);
    setSelectedTour("");
    setTravelers(2);
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>PLAN YOUR JOURNEY</p>

          <h1>
            Let&apos;s make
            <br />
            it happen.
          </h1>

          <p className={styles.heroCopy}>
            Tell us a little about your trip and our team will help arrange the
            next steps.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <aside className={styles.intro}>
          <p className={styles.eyebrow}>BOOKING REQUEST</p>

          <h2>Start with the details.</h2>

          <p>
            This is a request, not a final payment. We&apos;ll confirm
            availability and the next steps with you.
          </p>

          <Link href="/tours" className={styles.backLink}>
            ← BROWSE TOURS
          </Link>

          {!submitted && (
            <div className={styles.steps}>
              <div>
                <span>01</span>
                <strong>Your journey</strong>
                <small>Tour, date &amp; travelers</small>
              </div>

              <div>
                <span>02</span>
                <strong>About you</strong>
                <small>Your contact details</small>
              </div>

              <div>
                <span>03</span>
                <strong>Tell us more</strong>
                <small>Preferences &amp; questions</small>
              </div>
            </div>
          )}
        </aside>

        <div className={styles.formColumn}>
          {submitted ? (
            <div className={styles.success}>
              <p className={styles.eyebrow}>REQUEST RECEIVED</p>

              <h2>Thank you.</h2>

              <p>
                Your booking request has been received. Our team will contact
                you via WhatsApp or email to confirm availability and arrange
                the next steps.
              </p>

              <div className={styles.successActions}>
                <Link href="/tours" className={styles.primaryLink}>
                  EXPLORE MORE JOURNEYS <span>↗</span>
                </Link>

                <button
                  type="button"
                  className={styles.textButton}
                  onClick={handleReset}
                >
                  MAKE ANOTHER REQUEST
                </button>
              </div>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <section className={styles.formSection}>
                <div className={styles.sectionNumber}>01</div>

                <div className={styles.sectionBody}>
                  <h3>Your journey</h3>

                  <div className={styles.grid}>
                    <div className={`${styles.formGroup} ${styles.full}`}>
                      <label htmlFor="tour">Which journey?</label>

                      <select
                        id="tour"
                        name="tour"
                        value={selectedTour}
                        onChange={(event) =>
                          handleTourChange(event.target.value)
                        }
                        required
                      >
                        <option value="" disabled>
                          Select a tour
                        </option>

                        {tours.map((tour) => (
                          <option key={tour.slug} value={tour.slug}>
                            {tour.title} — {tour.duration}
                            {tour.minimum ? ` · Min. ${tour.minimum}` : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="date">Preferred date</label>

                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="travelers">Travelers</label>

                      <select
                        id="travelers"
                        name="travelers"
                        value={travelers}
                        onChange={(event) =>
                          setTravelers(Number(event.target.value))
                        }
                      >
                        {Array.from(
                          { length: 11 - getMinimumTravelers(selectedTourData) },
                          (_, index) =>
                            getMinimumTravelers(selectedTourData) + index
                        ).map((number) => (
                          <option key={number} value={number}>
                            {number}{" "}
                            {number === 1 ? "traveler" : "travelers"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionNumber}>02</div>

                <div className={styles.sectionBody}>
                  <h3>About you</h3>

                  <div className={styles.grid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full name</label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className={`${styles.formGroup} ${styles.full}`}>
                      <label htmlFor="whatsapp">WhatsApp</label>

                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="+62 812..."
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionNumber}>03</div>

                <div className={styles.sectionBody}>
                  <h3>Tell us more</h3>

                  <div className={styles.grid}>
                    <div className={`${styles.formGroup} ${styles.full}`}>
                      <label htmlFor="message">
                        Anything we should know?
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your plans, preferences or questions..."
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className={styles.submitArea}>
                <p>
                  By submitting this form, you are sending a booking request.
                  Availability and final arrangements will be confirmed by our
                  team.
                </p>

                <button type="submit" className={styles.submitButton}>
                  SEND BOOKING REQUEST <span>↗</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {!submitted && (
          <aside className={styles.summary}>
            <div className={styles.summarySticky}>
              <p className={styles.eyebrow}>TRIP SUMMARY</p>

              <h3>Your journey at a glance.</h3>

              <div className={styles.summaryRule} />

              {selectedTourData ? (
                <>
                  <div className={styles.summaryRow}>
                    <span>Journey</span>
                    <strong>{selectedTourData.title}</strong>
                  </div>

                  <div className={styles.summaryRow}>
                    <span>Duration</span>
                    <strong>{selectedTourData.duration}</strong>
                  </div>

                  <div className={styles.summaryRow}>
                    <span>Travelers</span>
                    <strong>{travelers}</strong>
                  </div>

                  <div className={styles.summaryRow}>
                    <span>From / person</span>
                    <strong>
                      {formatPrice(getPriceAmount(selectedTourData.price))}
                    </strong>
                  </div>

                  <div className={styles.totalRow}>
                    <span>Estimated total</span>
                    <strong>{formatPrice(estimatedTotal)}</strong>
                  </div>
                </>
              ) : (
                <p className={styles.summaryEmpty}>
                  Select a journey above to see the duration, starting price and
                  estimated total.
                </p>
              )}

              <p className={styles.summaryNote}>
                This estimate is for guidance only. Your request is not
                confirmed until our team checks availability and sends the
                final arrangements.
              </p>

              <div className={styles.directHelp}>
                <span>Prefer to talk directly?</span>
                <a href="https://wa.me/" target="_blank" rel="noreferrer">
                  WhatsApp us →
                </a>
              </div>
            </div>
          </aside>
        )}
      </section>
    </main>
  );
}
