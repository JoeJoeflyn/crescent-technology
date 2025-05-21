"use client";

import { CARDS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import StackingCards, { StackingCardItem } from "../animations/stacking-card";

export function Service() {
  return (
    <section className="bg-white text-white mx-auto w-full max-w-7xl px-4 py-2">
      <div style={{ height: `${CARDS.length * 63}vh` }}>
        <StackingCards totalCards={CARDS.length} scaleMultiplier={0.05}>
          {CARDS.map(({ bgColor, description, image, title }, index) => (
            <StackingCardItem
              key={index}
              index={index}
              className="h-[60vh]"
              topPosition={`${index * 5}%`}
            >
              <div
                className={cn(
                  bgColor,
                  "h-full flex-col sm:flex-row px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative"
                )}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl mb-5">{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="hidden sm:block sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
}
