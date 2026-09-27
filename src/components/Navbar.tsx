"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="nav">
      <Link href="/" className="logo">
        AWESOME<span>TOUR</span>
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

      <button className="menuButton" aria-label="Open menu">
        <span />
        <span />
      </button>
    </nav>
  );
}
