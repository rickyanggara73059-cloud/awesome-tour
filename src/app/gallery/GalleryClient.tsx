"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./gallery.module.css";

type Category = "RINJANI" | "GILI" | "BEACHES" | "WATERFALLS" | "CULTURE" | "LOCAL LIFE" | "WILDLIFE" | "NATURE";

type GalleryPhoto = {
  src: string;
  title: string;
  location: string;
  category: Category;
  alt: string;
  shape: "wide" | "tall" | "standard";
};

const photos: GalleryPhoto[] = [
  {
    src: "/images/gallery/foto1.jpeg",
    title: "A forest encounter",
    location: "Forest setting",
    category: "WILDLIFE",
    alt: "Visitors meeting a monkey in a forest clearing",
    shape: "tall",
  },
  {
    src: "/images/gallery/foto2.jpeg",
    title: "A close forest visitor",
    location: "Forest setting",
    category: "WILDLIFE",
    alt: "Close view of a monkey holding a bottle among forest plants",
    shape: "standard",
  },
  {
    src: "/images/gallery/foto3.jpeg",
    title: "Bale Adat Desa Beleq",
    location: "Sembalun Lawang",
    category: "RINJANI",
    alt: "Visitors at Bale Adat Desa Beleq in Sembalun Lawang, with the place name visible on a sign",
    shape: "wide",
  },
  {
    src: "/images/gallery/foto4.jpeg",
    title: "Highland fields",
    location: "Mountain farm landscape",
    category: "NATURE",
    alt: "Visitors in cultivated fields with a mountain ridge in the background",
    shape: "tall",
  },
  {
    src: "/images/gallery/foto5.jpeg",
    title: "A traditional village visit",
    location: "Traditional Sasak house",
    category: "CULTURE",
    alt: "Visitors gathered in front of a traditional thatched Sasak house",
    shape: "wide",
  },
  {
    src: "/images/gallery/foto6.jpeg",
    title: "Among the cascades",
    location: "Waterfalls of Lombok",
    category: "WATERFALLS",
    alt: "Visitors standing in front of a tall waterfall surrounded by tropical forest",
    shape: "tall",
  },
  {
    src: "/images/gallery/foto7.jpeg",
    title: "A waterfall pause",
    location: "Waterfalls of Lombok",
    category: "WATERFALLS",
    alt: "Visitors gathered on a forest trail with a waterfall behind them",
    shape: "tall",
  },
  {
    src: "/images/gallery/foto8.jpeg",
    title: "Welcome to Sade",
    location: "Sade, Central Lombok",
    category: "CULTURE",
    alt: "Visitors at a roadside sign identifying Sasak Village Sade",
    shape: "tall",
  },
  {
    src: "/images/gallery/rinjani-sembalun-valley.jpg",
    title: "Under Rinjani",
    location: "Sembalun, East Lombok",
    category: "RINJANI",
    alt: "Mount Rinjani rising over the Sembalun valley and fields",
    shape: "wide",
  },
  {
    src: "/images/gallery/gili-trawangan-aerial.jpg",
    title: "Turquoise tides",
    location: "Gili Trawangan, North Lombok",
    category: "GILI",
    alt: "Aerial view of boats and clear turquoise water at Gili Trawangan",
    shape: "tall",
  },
  {
    src: "/images/gallery/kuta-lombok-coast.jpg",
    title: "The southern curve",
    location: "Kuta Lombok, Central Lombok",
    category: "BEACHES",
    alt: "Coastline and ocean seen from the hills above Kuta Lombok",
    shape: "standard",
  },
  {
    src: "/images/gallery/pink-beach-lombok.jpg",
    title: "A quieter shore",
    location: "Pink Beach, East Lombok",
    category: "BEACHES",
    alt: "Visitors beside the pale pink shore and blue water at Pink Beach Lombok",
    shape: "standard",
  },
  {
    src: "/images/gallery/lombok-waterfall.jpg",
    title: "Water in the forest",
    location: "Lombok, West Nusa Tenggara",
    category: "WATERFALLS",
    alt: "Waterfall descending through dense tropical forest in Lombok",
    shape: "tall",
  },
  {
    // Photo by RaiyaniM, Wikimedia Commons, CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:Rumah_adat_desa_Senaru_Lombok.jpg
    src: "/images/gallery/senaru-village.jpg",
    title: "Senaru Village",
    location: "Senaru, North Lombok",
    category: "LOCAL LIFE",
    alt: "Traditional thatched village house and residents in Senaru, North Lombok",
    shape: "wide",
  },
];

const filters = ["ALL", "RINJANI", "GILI", "BEACHES", "WATERFALLS", "CULTURE"] as const;
type Filter = (typeof filters)[number];

const marqueeText =
  "LOMBOK • RINJANI • GILI ISLANDS • MANDALIKA • WATERFALLS • SASAK CULTURE • EXPLORE LOMBOK •";

export default function GalleryClient() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const visiblePhotos = useMemo(
    () =>
      photos.filter(
        (photo) =>
          filter === "ALL" ||
          photo.category === filter ||
          (filter === "CULTURE" && photo.category === "LOCAL LIFE"),
      ),
    [filter],
  );
  const activePhoto = activeIndex === null ? null : visiblePhotos[activeIndex];

  useEffect(() => {
    if (activeIndex === null || !isPlaying || visiblePhotos.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === null ? null : (current + 1) % visiblePhotos.length,
      );
    }, 4000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPlaying, visiblePhotos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex !== null]);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + visiblePhotos.length) % visiblePhotos.length,
        );
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % visiblePhotos.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, visiblePhotos.length]);

  function openPhoto(index: number) {
    setIsPlaying(true);
    setActiveIndex(index);
  }

  function movePhoto(direction: -1 | 1) {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + direction + visiblePhotos.length) % visiblePhotos.length,
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>LOMBOK · THROUGH OUR LENS</p>
        <div className={styles.titleRow}>
          <h1>
            The island,
            <br />
            <em>in moments.</em>
          </h1>
          <p className={styles.intro}>
            A collection of places, people and small details that make every
            journey across Lombok feel like its own story.
          </p>
        </div>
        <div className={styles.headerBottom}>
          <span>FIELD NOTES — LOMBOK, INDONESIA</span>
          <span>{String(photos.length).padStart(2, "0")} PHOTOGRAPHS</span>
        </div>
      </header>

      <div className={styles.marquee} aria-label={marqueeText}>
        <div className={styles.marqueeTrack} aria-hidden="true">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      <section className={styles.collection} aria-label="Lombok photo gallery">
        <div className={styles.filters} aria-label="Filter photographs by category">
          {filters.map((option) => (
            <button
              className={filter === option ? styles.filterActive : ""}
              type="button"
              key={option}
              aria-pressed={filter === option}
              onClick={() => {
                setFilter(option);
                setActiveIndex(null);
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visiblePhotos.map((photo, index) => (
            <button
              type="button"
              className={`${styles.photo} ${styles[photo.shape]}`}
              key={photo.src}
              onClick={() => openPhoto(index)}
              aria-label={`View ${photo.title}, ${photo.location}`}
            >
              <img src={photo.src} alt={photo.alt} loading={index > 1 ? "lazy" : "eager"} />
              <span className={styles.photoShade} />
              <span className={styles.photoMeta}>
                <span>{photo.category}</span>
                <strong>{photo.title}</strong>
                <small>{photo.location}</small>
              </span>
              <span className={styles.openIcon} aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <p className={styles.endNote}>MORE OF LOMBOK, ONE FRAME AT A TIME.</p>
      </section>

      {activePhoto && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen photo viewer"
          onClick={() => setActiveIndex(null)}
        >
          <div className={styles.viewer} onClick={(event) => event.stopPropagation()}>
            <div className={styles.viewerTop}>
              <span aria-live="polite">
                {String(activeIndex! + 1).padStart(2, "0")} / {String(visiblePhotos.length).padStart(2, "0")}
              </span>
              <button
                className={styles.closeButton}
                type="button"
                aria-label="Close photo viewer"
                onClick={() => setActiveIndex(null)}
              >
                <span>Close</span><b aria-hidden="true">×</b>
              </button>
            </div>

            <div className={styles.viewerStage}>
              <button
                className={styles.viewerArrow}
                type="button"
                aria-label="Previous photo"
                onClick={() => movePhoto(-1)}
              >
                <span aria-hidden="true">←</span><small>Previous</small>
              </button>
              <img
                className={styles.viewerImage}
                key={activePhoto.src}
                src={activePhoto.src}
                alt={activePhoto.alt}
              />
              <button
                className={styles.viewerArrow}
                type="button"
                aria-label="Next photo"
                onClick={() => movePhoto(1)}
              >
                <small>Next</small><span aria-hidden="true">→</span>
              </button>
            </div>

            <div className={styles.viewerBottom}>
              <div>
                <span>{activePhoto.category} · {activePhoto.location}</span>
                <h2>{activePhoto.title}</h2>
              </div>
              <button
                className={styles.playButton}
                type="button"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                aria-pressed={isPlaying}
                onClick={() => setIsPlaying((playing) => !playing)}
              >
                <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
