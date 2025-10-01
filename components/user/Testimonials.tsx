"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Rahul Kumar", role: "Retailer, Mumbai", feedback: "AV-TRADE delivers fresh and high-quality products every time.", img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60", rating: 5, bulkWeight: "500kg" },
    { name: "Sita Sharma", role: "Restaurant Owner, Delhi", feedback: "Amazing pricing and super-fast delivery! Highly recommend.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60", rating: 4, bulkWeight: "200kg" },
    { name: "Neha Verma", role: "Shop Owner, Bangalore", feedback: "Reliable suppliers, consistent quality, and excellent support.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80", rating: 5, bulkWeight: "350kg" },
    { name: "Amit Patel", role: "Café Owner, Pune", feedback: "Top-notch products and timely delivery every single time.", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80", rating: 5, bulkWeight: "150kg" },
    { name: "Arjun Mehta", role: "Wholesaler, Jaipur", feedback: "Great bulk deals that help my business grow.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80", rating: 4, bulkWeight: "1 Ton" },
    { name: "Priya Singh", role: "Bakery Owner, Lucknow", feedback: "The quality is unmatched, my customers love it.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", rating: 5, bulkWeight: "250kg" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3s on phones
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16">
      <div className="block sm:hidden relative w-full overflow-hidden">
        {/* Mobile Carousel */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 flex flex-col items-center text-center px-6">
              <Image
                src={t.img}
                alt={t.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-green-800">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
              <p className="mt-1 text-green-700 font-medium">Bulk Order: {t.bulkWeight}</p>
              <p className="mt-2 text-base italic text-gray-800 max-w-xs">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Marquee */}
      <div className="hidden sm:block relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-16">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center min-w-[320px] md:min-w-[400px] lg:min-w-[500px] px-6">
              <Image
                src={t.img}
                alt={t.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-green-800">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
              <p className="mt-1 text-green-700 font-medium">Bulk Order: {t.bulkWeight}</p>
              <p className="mt-2 text-base italic text-gray-800 max-w-xs">“{t.feedback}”</p>
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
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
