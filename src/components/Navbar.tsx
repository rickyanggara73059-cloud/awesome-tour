"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className="nav">
      <Link href="/" className="logo">
        LOMBOK AWESOME<span>TOUR</span>
      </Link>

      <div className="navLinks">
        <Link
          href="/destinations"
          className={isActive("/destinations") ? "active" : ""}
        >
          Destinations
        </Link>

        <Link
          href="/tours"
          className={isActive("/tours") ? "active" : ""}
        >
          Tours
        </Link>

        <Link
          href="/experiences"
          className={isActive("/experiences") ? "active" : ""}
        >
          Experiences
        </Link>

        <Link
          href="/journal"
          className={isActive("/journal") ? "active" : ""}
        >
          Journal
        </Link>

        <Link
          href="/gallery"
          className={isActive("/gallery") ? "active" : ""}
          aria-current={isActive("/gallery") ? "page" : undefined}
        >
          Gallery
        </Link>

        <Link
          href="/about"
          className={isActive("/about") ? "active" : ""}
        >
          About
        </Link>

        <Link
          href="/contact"
          className={isActive("/contact") ? "active" : ""}
        >
          Contact
        </Link>
      </div>

      <Link href="/booking" className="navButton">
        Book a trip
      </Link>

      <button
        className="menuButton"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="mobileNav" id="mobile-navigation">
          <Link href="/destinations" className={isActive("/destinations") ? "active" : ""}>Destinations</Link>
          <Link href="/tours" className={isActive("/tours") ? "active" : ""}>Tours</Link>
          <Link href="/experiences" className={isActive("/experiences") ? "active" : ""}>Experiences</Link>
          <Link href="/journal" className={isActive("/journal") ? "active" : ""}>Journal</Link>
          <Link href="/gallery" className={isActive("/gallery") ? "active" : ""} aria-current={isActive("/gallery") ? "page" : undefined}>Gallery</Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>About</Link>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
          <Link href="/booking" className="mobileNavBooking">Book a trip <span>↗</span></Link>
        </div>
      )}
    </nav>
  );
}
