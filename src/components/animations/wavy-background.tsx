"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ctx: CanvasRenderingContext2D | any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvas: HTMLCanvasElement | any;
  let animationId: number;

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas?.getContext("2d") || null;
    if (!canvas || !ctx) return;

    // Use container dimensions instead of window.innerWidth
    const container = containerRef.current;
    if (container) {
      w = canvas.width = container.offsetWidth;
      h = canvas.height = container.offsetHeight;
    } else {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = () => {
      if (container) {
        w = canvas.width = container.offsetWidth;
        h = canvas.height = container.offsetHeight;
      } else {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      }
      ctx.filter = `blur(${blur}px)`;
    };

    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n: number) => {
    if (!ctx) return;
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    if (!ctx || !canvas) return;
    ctx.fillStyle = backgroundFill || "#0f2b4d";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [blur, waveWidth, backgroundFill, waveOpacity, speed]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "py-20 md:py-52 flex flex-col items-center justify-center bg-primary overflow-x-hidden",
        containerClassName
      )}
      style={{ position: "relative" }}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 z-0"
        style={{
          width: "100%",
          height: "100%",
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};