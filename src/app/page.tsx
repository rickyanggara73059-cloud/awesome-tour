const destinations = [
  {
    name: "Rinjani",
    location: "North Lombok",
    image:
      "https://images.unsplash.com/photo-1710183758420-707ed8801b01?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Gili Islands",
    location: "West Lombok",
    image:
      "https://images.unsplash.com/photo-1676938007570-cdff052a9841?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Mandalika",
    location: "South Lombok",
    image:
      "https://images.unsplash.com/photo-1735636134481-1c6ef7f8df49?auto=format&fit=crop&w=1200&q=85",
  },
];

const tours = [
  {
    number: "01",
    title: "Lombok Island 5D4N",
    meta: "5 Days / 4 Nights",
    price: "From Rp 5.500.000",
    href: "/tours/lombok-island-5d4n",
  },
  {
    number: "02",
    title: "Lombok Island 4D3N",
    meta: "4 Days / 3 Nights",
    price: "From Rp 4.500.000",
    href: "/tours/lombok-island-4d3n",
  },
  {
    number: "03",
    title: "North Lombok 3D2N",
    meta: "3 Days / 2 Nights · Min. 4 persons",
    price: "From Rp 1.850.000",
    href: "/tours/north-lombok-3d2n",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">LOMBOK · WEST NUSA TENGGARA</p>

          <h1>
            Discover Lombok
            <br />
            <em>beyond the ordinary.</em>
          </h1>

          <p className="heroDescription">
            Mountains above the clouds, quiet islands, hidden beaches and
            journeys shaped by the people who call Lombok home.
          </p>

          <div className="heroActions">
            <a href="/tours" className="primaryButton">
              Explore journeys
              <span>↗</span>
            </a>
            <a href="#destinations" className="textButton">
              Explore destinations
            </a>
          </div>
        </div>

        <div className="heroFooter">
          <span>08° 39′ S · 116° 20′ E</span>
          <span>TRAVEL SLOW · TRAVEL DEEP</span>
        </div>
      </section>

      <section className="intro section">
        <div className="sectionLabel">01 — THE ISLAND</div>

        <div className="introGrid">
          <h2>
            An island of
            <br />
            <em>contrasts.</em>
          </h2>

          <div>
            <p className="largeText">
              Lombok is not a place to rush through. It is an island of
              volcanic landscapes, turquoise water, traditional villages and
              long roads where the best moments are often found between the
              destinations.
            </p>

            <p className="bodyText">
              Lombok Awesome Tour creates thoughtful journeys across Lombok and
              beyond — combining local knowledge, carefully selected
              experiences and the freedom to explore at your own pace.
            </p>

            <a href="/about" className="underlinedLink">
              Our story <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="destinations" className="destinations section">
        <div className="sectionHeader">
  <div>
    <div className="sectionLabel">02 — DESTINATIONS</div>

    <h2>
      Places worth
      <br />
      <em>taking the long way to.</em>
    </h2>
  </div>
</div>

        <div className="destinationGrid">
          {destinations.map((destination, index) => (
            <a
              href="#"
              className={`destinationCard destinationCard${index + 1}`}
              key={destination.name}
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="cardOverlay" />
              <div className="destinationInfo">
                <span>{destination.location}</span>
                <h3>{destination.name}</h3>
                <b>Explore →</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="tours" className="journeys section">
        <div className="sectionHeader">
          <div>
            <div className="sectionLabel">03 — JOURNEYS</div>
            <h2>
              Go somewhere
              <br />
              <em>meaningful.</em>
            </h2>
          </div>

          <p>
            Carefully arranged journeys for travellers who want to experience
            Lombok rather than simply visit it.
          </p>
        </div>

        <div className="tourList">
          {tours.map((tour) => (
            <a href={tour.href} className="tourRow" key={tour.number}>
              <span className="tourNumber">{tour.number}</span>

              <div className="tourTitle">
                <h3>{tour.title}</h3>
                <span>{tour.meta}</span>
              </div>

              <span className="tourPrice">{tour.price}</span>

              <span className="tourArrow">↗</span>
            </a>
          ))}
        </div>

        <a href="#" className="underlinedLink">
          View all journeys <span>→</span>
        </a>
      </section>

      <section id="experiences" className="experience section">
        <div className="experienceImage">
          <div className="experienceCaption">
            <span>FIELD NOTE  /  04</span>
            <strong>Travel is about what happens along the way.</strong>
          </div>
        </div>

        <div className="experienceCopy">
          <div className="sectionLabel">04 — EXPERIENCES</div>

          <h2>
            Made for
            <br />
            <em>curious travellers.</em>
          </h2>

          <div className="experienceList">
            <span>Trekking</span>
            <span>Island hopping</span>
            <span>Snorkeling</span>
            <span>Surfing</span>
            <span>Culture</span>
            <span>Fishing</span>
            <span>Waterfalls</span>
            <span>Local food</span>
          </div>
        </div>
      </section>

      <section id="journal" className="journal section">
        <div className="sectionHeader">
          <div className="sectionLabel">05 — JOURNAL</div>
          <p>Stories, guides and notes from the island.</p>
        </div>

        <div className="journalGrid">
          <article className="journalFeature">
            <div className="journalImage journalImageOne" />
            <span>TRAVEL GUIDE</span>
            <h3>The complete guide to exploring Lombok</h3>
            <a href="#">Read story →</a>
          </article>

          <article className="journalSmall">
            <span>RINJANI</span>
            <h3>Choosing your route to Mount Rinjani</h3>
            <a href="#">Read story →</a>
          </article>

          <article className="journalSmall">
            <span>ISLANDS</span>
            <h3>A slower day around the Gili Islands</h3>
            <a href="#">Read story →</a>
          </article>
        </div>
      </section>

      <section id="booking" className="booking">
        <div className="bookingInner">
          <span className="sectionLabel">06 — YOUR JOURNEY</span>

          <h2>
            Ready to see
            <br />
            <em>Lombok differently?</em>
          </h2>

          <p>
            Tell us when you are coming and what kind of experience you are
            looking for. We&apos;ll help shape the journey.
          </p>

          <a href="/booking" className="primaryButton lightButton">
            Start planning
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerTop">
          <div>
            <a href="/" className="logo footerLogo">
              LOMBOK AWESOME<span>TOUR</span>
            </a>
            <p>
              Thoughtful journeys across
              <br />
              Lombok &amp; West Nusa Tenggara.
            </p>
          </div>

          <div className="footerLinks">
            <div>
              <span>EXPLORE</span>
              <a href="#destinations">Destinations</a>
              <a href="/tours">Tours</a>
              <a href="#experiences">Experiences</a>
            </div>

            <div>
              <span>COMPANY</span>
              <a href="/about">About</a>
              <a href="#journal">Journal</a>
              <a href="/contact">Contact</a>
            </div>

            <div>
              <span>FOLLOW</span>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Lombok Awesome Tour</span>
          <span>LOMBOK · INDONESIA</span>
        </div>
      </footer>
    </main>
  );
}




