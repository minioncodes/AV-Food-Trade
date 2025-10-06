"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const carousels = [
  ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  ["/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg"],
  ["/10.jpg", "/11.jpg", "/12.jpg", "/13.jpg"],
  ["/14.jpg", "/15.jpg", "/16.jpg", "/17.jpg"],
 
];

function AutoCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md ring-1 ring-green-200">
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
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-10 lg:py-28">
          <div className="w-full lg:w-2/5 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-green-800 leading-tight drop-shadow-sm">
              Fresh Dry Fruits & Groceries <br />
              <span className="text-amber-700">At Wholesale Value</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed max-w-md">
              Supplying the best quality nuts, spices, and groceries in bulk.
              Trusted by retailers, businesses, and families across India.
              Pure, healthy, and affordable.
            </p>

            <div className="mt-5 flex space-x-4">
              <Link
                href="#"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Shop Wholesale
              </Link>
              <Link
                href="#"
                className="px-5 py-3 rounded-xl border-2 border-amber-600 text-amber-700 font-semibold hover:bg-amber-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* 4 Auto Carousels */}
          <div className="w-full lg:w-3/5 grid grid-cols-2 lg:grid-cols-2 gap-4 mt-8 lg:mt-0 lg:pl-12">
            {carousels.map((imgs, idx) => (
              <AutoCarousel key={idx} images={imgs} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
