"use client";
import { useState, useEffect } from "react";

export default function WhyChooseUsSection() {
  const usps = [
    { title: "100% Organic", desc: "Fresh and natural products directly from farms." },
    { title: "Bulk Discounts", desc: "Special prices for wholesale buyers." },
    { title: "Trusted Suppliers", desc: "We partner with verified suppliers." },
    { title: "Fast Delivery", desc: "Quick delivery across all major cities." },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3s on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % usps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [usps.length]);

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-700 tracking-wide">
          Why Choose AV Trade Corporation?
        </h2>
      </div>

      {/* ✅ Mobile Carousel */}
      <div className="block sm:hidden relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {usps.map((u, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 px-6"
            >
              <div className="px-8 py-10 bg-white/80 backdrop-blur-md rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-bold text-green-800">{u.title}</h3>
                <p className="mt-2 text-lg text-gray-600">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Desktop Marquee */}
      <div className="hidden sm:block relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-16 m-5">
          {[...usps, ...usps].map((u, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] px-6 py-8 bg-white/70 backdrop-blur-md rounded-xl shadow-md flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-800">{u.title}</h3>
              <p className="mt-2 text-base md:text-lg text-gray-600">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
