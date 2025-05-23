"use client";
import { CONTACT_INFO } from "@/constants";
import { cn } from "@/lib/utils";
import { IconMapPin } from "@tabler/icons-react";
import { useInView } from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const World = dynamic(
  () => import("../animations/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

const sampleArcs = [
  {
    order: 1,
    startLat: 24.7136,
    startLng: 46.6753,
    endLat: 24.5247,
    endLng: 39.5692,
    arcAlt: 0.1,
    color: colors[0],
  },
  {
    order: 1,
    startLat: 24.7136,
    startLng: 46.6753,
    endLat: 17.385,
    endLng: 78.4867,
    arcAlt: 0.2,
    color: colors[1],
  },
  {
    order: 2,
    startLat: 17.385,
    startLng: 78.4867,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.2,
    color: colors[2],
  },
  {
    order: 2,
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 33.749,
    endLng: -84.388,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 3,
    startLat: 24.5247,
    startLng: 39.5692,
    endLat: 33.749,
    endLng: -84.388,
    arcAlt: 0.3,
    color: colors[1],
  },
];

export function ContactComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(globeRef, {
    once: true,
    margin: "0px 0px -50% 0px",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center py-12 md:py-20 w-full">
        <div className="w-full mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-primary mt-4 max-w-2xl">
            &quot;Our offices are strategically located to serve our clients
            globally&quot;
          </p>
        </div>

        <div
          ref={globeRef}
          className="relative w-full aspect-video max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 w-full h-full">
            {isInView && isMounted && (
              <World data={sampleArcs} globeConfig={globeConfig} />
            )}
          </div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10">
        {CONTACT_INFO.map((info, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col lg:border-r py-10 relative group/feature border-primary",
              (index === 0 || index === 3) && "lg:border-l",
              index < 3 && "lg:border-b"
            )}
          >
            {index < 3 ? (
              <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            ) : (
              <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-primary">
              <IconMapPin aria-hidden="true" />
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-primary group-hover/feature:bg-cyan-blue transition-all duration-200 origin-center" />
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary">
                {info.title}
              </span>
            </div>
            <p className="text-sm text-primary max-w-xs relative z-10 px-10">
              <span className="font-semibold">Email:</span> {info.email}
            </p>
            <p className="text-sm text-primary max-w-xs relative z-10 px-10">
              <span className="font-semibold">Phone:</span> {info.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
