import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Awesome Tour — Discover Lombok Beyond the Ordinary",
  description:
    "Thoughtful journeys across Lombok and West Nusa Tenggara. Explore Rinjani, Gili Islands, Mandalika and authentic local experiences.",
  keywords: [
    "Lombok tour",
    "Lombok travel",
    "Rinjani tour",
    "Gili Islands",
    "Mandalika",
    "West Nusa Tenggara",
    "Indonesia travel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Navbar />{children}</body>
    </html>
  );
}

