"use client";
import dynamic from "next/dynamic";
import ContactCard from "../ui/contact-card";

// Lazy load the WorldMap component
const WorldMap = dynamic(
  () => import("@/components/animations/world-map").then((mod) => mod.WorldMap),
  {
    ssr: false,
  }
);

const mapDots = [
  {
    start: { lat: 24.7136, lng: 46.6753, label: "Riyadh, KSA" },
    end: { lat: 24.5247, lng: 39.5692, label: "Madinah, KSA" },
  },
  {
    start: { lat: 24.7136, lng: 46.6753, label: "Riyadh, KSA" },
    end: { lat: 17.385, lng: 78.4867, label: "Hyderabad, India" },
  },
  {
    start: { lat: 17.385, lng: 78.4867, label: "Hyderabad, India" },
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai, UAE" },
  },
  {
    start: { lat: 25.2048, lng: 55.2708, label: "Dubai, UAE" },
    end: { lat: 33.749, lng: -84.388, label: "Atlanta, GA, USA" },
  },
  {
    start: { lat: 24.5247, lng: 39.5692, label: "Madinah, KSA" },
    end: { lat: 33.749, lng: -84.388, label: "Atlanta, GA, USA" },
  },
];

export function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-2">
      <p className="text-center text-4xl sm:text-5xl md:text-6xl text-primary font-semibold mb-12">
        Contact Us
      </p>
      <WorldMap dots={mapDots} />
      <ContactCard />
    </div>
  );
}
