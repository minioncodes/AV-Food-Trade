import React from "react";
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
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex testimonial-scroll gap-x-20">
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
    </div>
  );
};

export default TestimonialsSection;
