"use client";
import { FIRST_SECTION_IMAGES, SECOND_SECTION_IMAGES } from "@/constants";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import { LinesEffect } from "./lines-effect";

export function StickyScrollReveal(): React.JSX.Element {
  const containerRef = useRef(null);
  const targetSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <ReactLenis root>
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
            <h1 className="text-4xl lg:text-7xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Company History and Overview
            </h1>
          </section>
        </div>

        <section className="text-primary w-full relative z-10">
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
