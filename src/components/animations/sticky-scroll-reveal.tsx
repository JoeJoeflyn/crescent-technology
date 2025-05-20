"use client";
import { ReactLenis } from "lenis/react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import { LinesEffect } from "./lines-effect";

// Image data for the first section
const firstSectionImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1718838541476-d04e71caa347?auto=format&fit=crop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?auto=format&fit=crop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1718601980986-0ce75101d52d?auto=format&fit=crop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1685904042960-66242a0ac352?auto=format&fit=crop",
  },
];

// Image data for the second section
const secondSectionImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1718183120769-ece47f31045b?auto=format&fit=crop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?auto=format&fit=crop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1685904042960-66242a0ac352?auto=format&fit=crop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1718838541476-d04e71caa347?auto=format&fit=crop",
  },
];

export function StickyScrollReveal(): React.JSX.Element {
  const containerRef = useRef(null);
  const targetSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const isInView = useInView(targetSectionRef);

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <ReactLenis root>
      <div ref={containerRef}>
        <motion.div
          className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
          animate={{ opacity: isInView ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <LinesEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />
        </motion.div>
        <div className="relative z-10">
          <section
            ref={targetSectionRef}
            className="text-white w-full sticky top-0 flex items-center justify-center py-32"
          >
            <h1 className="text-4xl lg:text-7xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Company History and Overview
            </h1>
          </section>
        </div>

        <section className="text-white w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="sticky top-0 h-screen grid place-content-center">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]"
              >
                At Crescent Technology, we offer a comprehensive range of
                digital solutions designed to meet the evolving needs of
                businesses. Our expertise spans across various domains, ensuring
                that we deliver transformative results that drive your success.
              </motion.h1>
            </div>
            <div className="flex flex-col gap-2">
              {firstSectionImages.map((img) => (
                <figure
                  key={img.id}
                  className="sticky top-0 h-screen grid place-content-center"
                >
                  <Image
                    src={img.src}
                    alt=""
                    className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                    width={320}
                    height={384}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="text-white w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="flex flex-col gap-2">
              {secondSectionImages.map((img) => (
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
                      alt=""
                      className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                      width={384}
                      height={384}
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
                className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]"
              >
                At Crescent Technology, we offer a comprehensive range of
                digital solutions designed to meet the evolving needs of
                businesses. Our expertise spans across various domains, ensuring
                that we deliver transformative results that drive your success.
              </motion.h1>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
