"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://media.istockphoto.com/id/994318084/photo/dried-almonds-from-fields-without-pesticides.jpg?s=612x612&w=0&k=20&c=tgiSZnosYJp5P2BzOUwTn4lrgf00_ePzOvo-dhPkm2o=",
  "https://media.istockphoto.com/id/1194756954/photo/close-up-of-nuts.jpg?s=612x612&w=0&k=20&c=lO1wleIvXfCJJyy5ROUObdSqjEpqFOeThOuOesjDeGM=",
  "https://media.istockphoto.com/id/1067505384/photo/bowl-with-pistachio-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=fv8jg87XyvNDqRp6K9ZC9uoWp3PFE8kqodgG_kWc25Y=",
  "https://media.istockphoto.com/id/2195476089/photo/rich-variation-of-spices-legumes-and-seeds-at-spice-market-in-delhi.webp?a=1&b=1&s=612x612&w=0&k=20&c=47T9v1A6Axcw8IUXbmSoGQdkoNsXotFp5_jKxoWMZgA="
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-20 lg:py-28">

          {/* Text Section */}
          <div className="w-full lg:w-2/5 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-green-800 leading-tight drop-shadow-sm">
              Fresh Dry Fruits & Groceries <br />
              <span className="text-amber-700">At Wholesale Value</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-md">
              Supplying the best quality nuts, spices, and groceries in bulk. 
              Trusted by retailers, businesses, and families across India. 
              Pure, healthy, and affordable.
            </p>

            <div className="mt-8 flex space-x-4">
              <Link
                href="#"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Shop Wholesale
              </Link>
              <Link
                href="#"
                className="px-7 py-3 rounded-xl border-2 border-amber-600 text-amber-700 font-semibold hover:bg-amber-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative w-full lg:w-3/5 h-80 lg:h-[520px] mt-12 lg:mt-0 lg:pl-12 overflow-hidden rounded-2xl shadow-xl ring-2 ring-green-100">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="w-full flex-shrink-0 relative h-full">
                  <Image
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    current === idx
                      ? "bg-green-700 scale-110"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
