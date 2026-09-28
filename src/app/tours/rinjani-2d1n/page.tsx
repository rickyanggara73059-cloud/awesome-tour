import Link from "next/link";

export const metadata = {
  title: "Rinjani Mountain Journey — 2 Days / 1 Night | Lombok Awesome Tour",
  description:
    "A two-day Rinjani mountain journey through Lombok's dramatic highlands, viewpoints and volcanic landscapes.",
};

const itinerary = [
  {
    day: "01",
    title: "Into the Rinjani Highlands",
    description:
      "Begin early and make your way toward the Rinjani foothills. The trail gradually moves through forest and changing mountain landscapes before reaching the overnight camp.",
    places: ["Senaru", "Rinjani trail", "Mountain camp"],
  },
  {
    day: "02",
    title: "Sunrise & The Mountain",
    description:
      "Wake before sunrise and experience the changing light across Lombok. After breakfast, descend through the mountain landscape and return toward the village.",
    places: ["Sunrise viewpoint", "Mountain ridge", "Senaru"],
  },
];

const included = [
  "Private transportation",
  "Local trekking guide",
  "Trekking permits",
  "Camping equipment",
  "Meals during trekking",
  "Mineral water",
];

const excluded = [
  "Personal expenses",
  "Travel insurance",
  "Personal trekking equipment",
  "Tips for guide and porter",
  "Expenses outside the itinerary",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1600&q=85",
    alt: "Mountain trail",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1600&q=85",
    alt: "Mountain sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=85",
    alt: "Mountain landscape at sunrise",
  },
];

export default function RinjaniPage() {
  return (
    <main className="tourDetailPage">
      <section className="tourDetailHero">
        <div className="tourDetailHeroOverlay" />

        <div className="tourDetailHeroContent">
          <Link href="/tours" className="tourBackLink">
            ← ALL JOURNEYS
          </Link>

          <p className="eyebrow">MOUNTAIN JOURNEY · RINJANI</p>

          <h1>
            Rinjani
            <br />
            Mountain Journey.
          </h1>

          <div className="tourHeroMeta">
            <span>2 DAYS / 1 NIGHT</span>
            <span>FROM RP 1.850.000</span>
          </div>
        </div>
      </section>

      <section className="tourStory">
        <div className="tourStoryLabel">
          <p className="eyebrow">THE JOURNEY</p>
          <span>01 — 02</span>
        </div>

        <div className="tourStoryContent">
          <h2>
            Into the heart
            <br />
            of Rinjani.
          </h2>

          <p>
            Mount Rinjani is more than a summit. It is a changing landscape of
            forest, open ridges, volcanic terrain and wide views across Lombok.
          </p>

          <p>
            This two-day journey is designed around the experience of being in
            the mountains, with time to walk, pause and take in the landscape.
          </p>
        </div>
      </section>

      <section className="tourFacts">
        <div>
          <span>01</span>
          <strong>Duration</strong>
          <p>2 Days / 1 Night</p>
        </div>

        <div>
          <span>02</span>
          <strong>Destination</strong>
          <p>Mount Rinjani, Lombok</p>
        </div>

        <div>
          <span>03</span>
          <strong>Travel style</strong>
          <p>Trekking · Nature · Adventure</p>
        </div>

        <div>
          <span>04</span>
          <strong>Starting from</strong>
          <p>Rp 1.850.000</p>
        </div>
      </section>

      <section className="itinerarySection">
        <div className="detailSectionHeader">
          <p className="eyebrow">THE ITINERARY</p>
          <h2>Two days in the mountains.</h2>
        </div>

        <div className="itineraryList">
          {itinerary.map((item) => (
            <article className="itineraryItem" key={item.day}>
              <div className="itineraryDay">{item.day}</div>

              <div className="itineraryMain">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="itineraryPlaces">
                  {item.places.map((place) => (
                    <span key={place}>{place}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detailGallery">
        <div className="detailGalleryIntro">
          <p className="eyebrow">THE MOUNTAIN</p>
          <h2>Follow the landscape.</h2>
        </div>

        <div className="detailGalleryGrid">
          {gallery.map((image, index) => (
            <figure
              className={`detailGalleryImage galleryImage${index + 1}`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="includedSection">
        <div className="includedColumn">
          <p className="eyebrow">INCLUDED</p>
          <h2>Everything prepared for the trail.</h2>

          <ul>
            {included.map((item) => (
              <li key={item}>
                <span>+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="excludedColumn">
          <p className="eyebrow">NOT INCLUDED</p>

          <ul>
            {excluded.map((item) => (
              <li key={item}>
                <span>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="importantSection">
        <div>
          <p className="eyebrow">GOOD TO KNOW</p>
          <h2>Before you climb.</h2>
        </div>

        <div className="importantList">
          <div>
            <strong>Physical preparation</strong>
            <p>
              Trekking involves sustained walking and elevation gain. Prepare
              according to your experience and physical condition.
            </p>
          </div>

          <div>
            <strong>Weather matters</strong>
            <p>
              Mountain conditions can change quickly. The itinerary may be
              adjusted for safety and local conditions.
            </p>
          </div>

          <div>
            <strong>Respect the mountain</strong>
            <p>
              Keep the trail clean, follow local guidance and carry personal
              waste until it can be disposed of properly.
            </p>
          </div>
        </div>
      </section>

      <section className="tourBookingCta">
        <p className="eyebrow">READY FOR THE MOUNTAIN</p>

        <h2>
          Meet Rinjani
          <br />
          on foot.
        </h2>

        <p>
          Tell us your preferred dates and group size. Our team will help
          arrange the next steps.
        </p>

        <Link href="/booking" className="tourBookingButton">
          BOOK THIS TOUR <span>↗</span>
        </Link>
      </section>

      <section className="relatedTours">
        <div>
          <p className="eyebrow">KEEP EXPLORING</p>
          <h2>More journeys.</h2>
        </div>

        <div className="relatedTourLinks">
          <Link href="/tours/lombok-3d2n">
            <span>01</span>
            Lombok Island Escape
            <b>↗</b>
          </Link>

          <Link href="/tours/gili-island-day-trip">
            <span>02</span>
            Gili Island Experience
            <b>↗</b>
          </Link>
        </div>
      </section>
    </main>
  );
}
