"use client";

export default function TestimonialsSection() {
  const testimonials = [
    { 
      name: "Rahul Kumar", 
      role: "Retailer, Mumbai", 
      feedback: "AV-TRADE delivers fresh and high-quality products every time.", 
      img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww", 
      rating: 5,
      bulkWeight: "500kg"
    },
    { 
      name: "Sita Sharma", 
      role: "Restaurant Owner, Delhi", 
      feedback: "Amazing pricing and super-fast delivery! Highly recommend.", 
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D", 
      rating: 4,
      bulkWeight: "200kg"
    },
    { 
      name: "Amit Patel", 
      role: "Shop Owner, Bangalore", 
      feedback: "Reliable suppliers, consistent quality, and excellent support.", 
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80", 
      rating: 5,
      bulkWeight: "350kg"
    },
    { 
      name: "Neha Verma", 
      role: "Café Owner, Pune", 
      feedback: "Top-notch products and timely delivery every single time.", 
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80", 
      rating: 5,
      bulkWeight: "150kg"
    },
    { 
      name: "Arjun Mehta", 
      role: "Wholesaler, Jaipur", 
      feedback: "Great bulk deals that help my business grow.", 
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80", 
      rating: 4,
      bulkWeight: "1 Ton"
    },
    { 
      name: "Priya Singh", 
      role: "Bakery Owner, Lucknow", 
      feedback: "The quality is unmatched, my customers love it.", 
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", 
      rating: 5,
      bulkWeight: "250kg"
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-20">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center min-w-[500px] px-8"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover mb-6 shadow-lg"
              />
             

              <div className="flex mt-4 mb-2">
                {Array.from({ length: 5 }).map((_, star) => (
                  <span 
                    key={star} 
                    className={star < t.rating ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <h3 className="mt-2 text-xl font-semibold text-green-800">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
              <p className="mt-1 text-green-700 font-medium">Bulk Order: {t.bulkWeight}</p>
               <p className="text-2xl font-light italic text-gray-800 leading-relaxed max-w-md overflow-hidden text-ellipsis line-clamp-2">
                “{t.feedback}”
              </p>
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
          animation: marquee 10s linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </section>
  );
}
