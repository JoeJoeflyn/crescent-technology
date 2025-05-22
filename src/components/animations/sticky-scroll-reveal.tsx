"use client";
import { FIRST_SECTION_IMAGES, SECOND_SECTION_IMAGES } from "@/constants";
import {
  motion,
  useScroll,
  useTransform,
  type UseScrollOptions,
} from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import { LinesEffect } from "./lines-effect";

export function StickyScrollReveal(): React.JSX.Element {
  const containerRef = useRef(null);
  const targetSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  } as UseScrollOptions);

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div ref={containerRef}>
      <LinesEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
      <div className="relative z-10">
        <section
          ref={targetSectionRef}
          className="text-primary w-full sticky top-0 flex items-center justify-center py-28"
        >
          <h1 className="text-4xl lg:text-7xl px-4 font-semibold text-center tracking-tight leading-[120%]">
            Overview
          </h1>
        </section>
      </div>

      <section className="text-primary w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="sticky top-0 h-screen grid place-content-center z-20">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl px-8 py-4 font-medium text-left tracking-tight leading-[120%] text-white md:text-inherit mx-14 md:mx-0 bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none rounded"
            >
              Experts in IoT, AI, analytics, and cloud—76+ clients over 15
              years, with offices in the USA, KSA, and India.
            </motion.h1>
          </div>
          <div className="flex flex-col gap-2">
            {FIRST_SECTION_IMAGES.map((img) => (
              <figure
                key={img.id}
                className="sticky top-0 h-screen grid place-content-center"
              >
                <Image
                  src={img.src}
                  alt={img.id.toString()}
                  className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                  width={320}
                  height={384}
                  loading="lazy"
                  quality={75}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="text-primary w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
          <div className="flex flex-col gap-2">
            {SECOND_SECTION_IMAGES.map((img) => (
              <figure
                key={img.id}
                className="sticky top-0 h-screen grid place-content-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={img.src}
                    alt={img.id.toString()}
                    className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                    width={384}
                    height={384}
                    loading="lazy"
                    quality={75}
                  />
                </motion.div>
              </figure>
            ))}
          </div>
          <div className="sticky top-0 h-screen grid place-content-center">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl px-8 font-medium text-right tracking-tight leading-[120%]"
            >
              Crescent Technology delivers digital solutions tailored to
              evolving business needs, driving results through cross-domain
              expertise.
            </motion.h1>
          </div>
        </div>
      </section>
    </div>
  );
}
