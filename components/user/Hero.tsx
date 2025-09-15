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
    <section className="bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-2/5 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Premium Dry Fruits & Groceries at Wholesale Prices
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Explore our wide collection of fresh dry fruits, nuts, and groceries. 
              Perfect for homes, retailers, and bulk buyers. Healthy, natural, and delivered fast.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link
                href="#"
                className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-3/5 h-80 lg:h-[500px] mt-10 lg:mt-0 lg:pl-12 overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="w-full flex-shrink-0 relative h-full">
                  <Image
                    src={img}
                    alt={`Dry Fruits Slide ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-800"
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
                      ? "bg-green-600 scale-110"
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
