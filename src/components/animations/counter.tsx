import { Formatter } from "@/lib/currency-formatter";
import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = {
  format?: (value: number) => string;
  targetValue: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
};

export default function Counter({
  format = Formatter.number,
  targetValue,
  direction = "up",
  delay = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isGoingUp = direction === "up";
  const motionValue = useMotionValue(isGoingUp ? 0 : targetValue);

  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 80,
  });
  const isInView = useInView(ref, { margin: "0px", once: true });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const timer = setTimeout(() => {
      motionValue.set(isGoingUp ? targetValue : 0);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, delay, isGoingUp, targetValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (value) => {
      if (ref.current) {
        ref.current.textContent = format ? format(value) : String(value);
      }
    });
  }, [springValue, format]);

  return (
    <span
      ref={ref}
      className={cn("text-4xl font-bold text-foreground", className)}
    />
  );
}
