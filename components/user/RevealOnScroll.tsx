"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
}: RevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const dirMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
