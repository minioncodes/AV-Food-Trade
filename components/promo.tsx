"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PromoStrip() {
  const [messages] = useState([
    "🚚 Free Delivery on Orders Above ₹999",
    "🌿 100% Organic & Fresh from Farms",
    "💰 Bulk Discounts for Wholesale Buyers",
  ]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="w-full bg-green-700 text-white text-sm font-medium py-2 text-center overflow-hidden">
      <motion.p
        key={index}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4"
      >
        {messages[index]}
      </motion.p>
    </div>
  );
}
