"use client";
import {
  motion,
  useScroll,
  useTransform,
  type UseScrollOptions,
} from "motion/react";
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
          className="text-primary w-full sticky top-0 flex items-center justify-center py-20"
        >
          <h1 className="text-4xl lg:text-7xl px-4 font-semibold text-center tracking-tight leading-[120%]">
            Overview
          </h1>
        </section>
      </div>

      <section className="text-primary w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[30rem] grid place-content-center z-20">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl px-8 font-medium text-right tracking-tight leading-[120%]"
            >
              Experts in IoT, AI, analytics, and cloud-76+ clients over 15
              years, with offices in the USA, KSA, and India.
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="text-primary w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div />
          <div className="h-[30rem] grid place-content-center z-20">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl px-8 font-medium text-left tracking-tight leading-[120%]"
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
