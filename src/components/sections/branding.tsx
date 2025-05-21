"use client";
import { SimpleMarquee } from "@/components/animations/marquee";
import { BRAND_LOGOS } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const firstRow = BRAND_LOGOS.slice(0, Math.floor(BRAND_LOGOS.length / 3));
const secondRow = BRAND_LOGOS.slice(
  Math.floor(BRAND_LOGOS.length / 3),
  Math.floor((2 * BRAND_LOGOS.length) / 3)
);
const thirdRow = BRAND_LOGOS.slice(Math.floor((2 * BRAND_LOGOS.length) / 3));

export function Branding() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <div
      className="relative py-20 bg-white overflow-hidden"
      ref={(node) => setContainer(node)}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl text-primary font-semibold mb-12">
          Our Customers
        </h1>
      </div>

      <div className="w-full space-y-4 sm:space-y-6 md:space-y-8">
        <SimpleMarquee
          className="w-full"
          baseVelocity={8}
          repeat={4}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          scrollContainer={container}
          useScrollVelocity={true}
          direction="left"
        >
          {firstRow.map((src, i) => (
            <div
              key={i}
              className="mx-2 sm:mx-3 md:mx-4 p-2 rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in-out"
            >
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                width={500}
                height={500}
                className="h-32 w-auto object-cover"
              />
            </div>
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={8}
          repeat={4}
          scrollAwareDirection={true}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowdownOnHover
          slowDownFactor={0.1}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          useScrollVelocity={true}
          scrollContainer={container}
          draggable={false}
          direction="right"
        >
          {secondRow.map((src, i) => (
            <div
              key={i}
              className="mx-2 sm:mx-3 md:mx-4 p-2 rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in-out"
            >
              <Image
                src={src}
                alt={`Image ${i + firstRow.length}`}
                width={500}
                height={500}
                className="h-32 w-auto object-cover"
              />
            </div>
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={8}
          repeat={4}
          scrollAwareDirection={true}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowdownOnHover
          slowDownFactor={0.1}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          useScrollVelocity={true}
          scrollContainer={container}
          draggable={false}
          direction="left"
        >
          {thirdRow.map((src, i) => (
            <div
              key={i}
              className="mx-2 sm:mx-3 md:mx-4 p-2 rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in-out"
            >
              <Image
                src={src}
                alt={`Image ${i + firstRow.length + secondRow.length}`}
                width={500}
                height={500}
                className="h-32 w-auto object-cover"
              />
            </div>
          ))}
        </SimpleMarquee>
      </div>
    </div>
  );
}
