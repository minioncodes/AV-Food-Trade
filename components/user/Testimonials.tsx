"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/app/globals.css";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Retailer, Mumbai",
    feedback: "AV-TRADE delivers fresh and high-quality products every time.",
    img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60",
    bulkWeight: "500kg",
  },
  {
    name: "Sita Sharma",
    role: "Restaurant Owner, Delhi",
    feedback: "Amazing pricing and super-fast delivery! Highly recommend.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60",
    bulkWeight: "200kg",
  },
  {
    name: "Neha Verma",
    role: "Shop Owner, Bangalore",
    feedback: "Reliable suppliers, consistent quality, and excellent support.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bulkWeight: "350kg",
  },
  {
    name: "Amit Patel",
    role: "Café Owner, Pune",
    feedback: "Top-notch products and timely delivery every single time.",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    bulkWeight: "150kg",
  },
  {
    name: "Arjun Mehta",
    role: "Wholesaler, Jaipur",
    feedback: "Great bulk deals that help my business grow.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    bulkWeight: "1 Ton",
  },
  {
    name: "Priya Singh",
    role: "Bakery Owner, Lucknow",
    feedback: "The quality is unmatched, my customers love it.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    bulkWeight: "250kg",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // change slide every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden py-10">
      {/* Desktop auto-scroll */}
      <div className="hidden md:flex testimonial-scroll gap-x-8">
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] text-center"
          >
            <Image
              width={100}
              height={100}
              src={t.img}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-green-700">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.role}</p>
            <p className="text-green-700 font-semibold mt-1">
              Bulk Order: {t.bulkWeight}
            </p>
            <p className="italic text-gray-700 mt-3">“{t.feedback}”</p>
          </div>
        ))}
      </div>

      {/* Mobile one-by-one carousel with auto-change + dots */}
      <div className="md:hidden flex flex-col items-center transition-all duration-500">
        <div className="w-[90%] text-center">
          <Image
            width={100}
            height={100}
            src={testimonials[activeIndex].img}
            alt={testimonials[activeIndex].name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-green-700">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-sm text-gray-600">
            {testimonials[activeIndex].role}
          </p>
          <p className="text-green-700 font-semibold mt-1">
            Bulk Order: {testimonials[activeIndex].bulkWeight}
          </p>
          <p className="italic text-gray-700 mt-3">
            “{testimonials[activeIndex].feedback}”
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === activeIndex ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
