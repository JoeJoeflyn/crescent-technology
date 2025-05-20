"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center space-x-1 my-6 justify-center md:justify-start", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
        onAnimationComplete={() => {
          setIsTypingComplete(true);
        }}
      >
        <div
          className="text-xl md:text-5xl xl:text-7xl font-bold flex items-center"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,

              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={cn(
              "block rounded-sm w-[4px]  h-4 sm:h-6 md:h-12 xl:h-16 bg-blue-500",
              cursorClassName
            )}
          ></motion.span>
        </div>{" "}
      </motion.div>
      {!isTypingComplete && <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 md:h-12 xl:h-16 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>}
    </div>
  );
};
