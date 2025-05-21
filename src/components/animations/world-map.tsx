"use client";

import { useRef, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Memoize the SVG map generation
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#00000040",
      shape: "circle",
      backgroundColor: "white",
    });
  }, []);

  const projectPoint = useCallback((lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  const createCurvedPath = useCallback((
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }, []);

  // Memoize the rendered dots and paths
  const renderedPaths = useMemo(() => {
    return dots.map((dot, i) => {
      const startPoint = projectPoint(dot.start.lat, dot.start.lng);
      const endPoint = projectPoint(dot.end.lat, dot.end.lng);

      return (
        <g key={`path-group-${i}`}>
          <motion.path
            d={createCurvedPath(startPoint, endPoint)}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              delay: 0.5 * i,
              ease: "easeOut",
            }}
          />
        </g>
      );
    });
  }, [dots, projectPoint, createCurvedPath]);

  const renderedDots = useMemo(() => {
    return dots.flatMap((dot) => [
      {
        ...dot.start,
        x: projectPoint(dot.start.lat, dot.start.lng).x,
        y: projectPoint(dot.start.lat, dot.start.lng).y,
      },
      {
        ...dot.end,
        x: projectPoint(dot.end.lat, dot.end.lng).x,
        y: projectPoint(dot.end.lat, dot.end.lng).y,
      },
    ]);
  }, [dots, projectPoint]);

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
        priority={false}
        loading="lazy"
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {renderedPaths}
        {renderedDots.map((dot, i) => (
          <circle
            key={`dot-${i}`}
            cx={dot.x}
            cy={dot.y}
            r={4}
            fill={lineColor}
          >
            <title>{dot.label || `${dot.lat}, ${dot.lng}`}</title>
          </circle>
        ))}
      </svg>
    </div>
  );
}
