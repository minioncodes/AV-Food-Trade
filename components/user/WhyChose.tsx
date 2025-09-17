"use client";

export default function WhyChooseUsSection() {
  const usps = [
    { title: "100% Organic", desc: "Fresh and natural products directly from farms." },
    { title: "Bulk Discounts", desc: "Special prices for wholesale buyers." },
    { title: "Trusted Suppliers", desc: "We partner with verified suppliers." },
    { title: "Fast Delivery", desc: "Quick delivery across all major cities." },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-9xl mx-auto px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-700 tracking-wide">
          Why Choose AV-TRADE?
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-16">
          {[...usps, ...usps].map((u, i) => (
            <div
              key={i}
              className="min-w-[400px] px-8 py-6 bg-white/70 backdrop-blur-md rounded-xl  flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl font-bold text-green-800">{u.title}</h3>
              <p className="mt-2 text-lg text-gray-600">{u.desc}</p>
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
          display: flex;
          animation: marquee 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
