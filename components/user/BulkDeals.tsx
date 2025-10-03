"use client";

import Image from "next/image";

export default function BulkDealsSection() {
  const deals = [
    { name: "Almonds Bulk Pack", price: "₹400/kg", img: "https://media.istockphoto.com/id/171292794/photo/almond.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gd8KgXRN1hw4RZNLgdBqu2l0HrAfqjZJdOnAXaPf2rA=" },
    { name: "Cashews Bulk Pack", price: "₹500/kg", img: "https://media.istockphoto.com/id/2228212747/photo/large-plastic-vacuum-packs-of-wholesale-cashew-nuts-in-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xsa50M9pznYSFQtQFPgZ7g5v3zxt6fHISRmlbH5oOQ4=" },
    { name: "Pistachios Bulk Pack", price: "₹600/kg", img: "https://media.istockphoto.com/id/2197425461/photo/colorful-display-of-spices-and-nuts-at-a-market-in-old-delhi.webp?a=1&b=1&s=612x612&w=0&k=20&c=dpTka-A6obmyJmioxGM_sskog8Z5e2qdrtavSpZDgWg=" },
    { name: "Raisins Bulk Pack", price: "₹170/kg", img: "https://images.unsplash.com/photo-1598111388756-b2285cca0458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpc2lufGVufDB8fDB8fHww" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center justify-evenly">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 drop-shadow-sm">
            Bulk Deals for Smart Shoppers
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Stock up on premium dry fruits at unbeatable bulk prices. Perfect for
            households, retailers, and businesses. Enjoy freshness and quality
            delivered right to your doorstep.
          </p>
          <button className="px-8 py-4 bg-green-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-green-800 hover:shadow-xl transition">
            Explore All Deals
          </button>
        </div>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-end">
          {deals.map((d, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Best Deal
              </span>
              <Image
                src={d.img}
                alt={d.name}
                width={400}
                height={300}
                quality={100}


                className="w-full lg:h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900">{d.name}</h3>
                <p className="text-lg text-gray-700 mt-2">{d.price}</p>
                <button className="mt-6 w-full py-3 bg-green-600 text-white text-lg rounded-lg font-semibold hover:bg-green-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
