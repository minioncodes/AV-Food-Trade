"use client";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Rahul Kumar", role: "Retailer, Mumbai", feedback: "AV-TRADE delivers fresh and high-quality products every time.", img: "https://images.unsplash.com/photo-1603415526960-f1e7a80c5d5a?auto=format&fit=crop&w=100&q=80" },
    { name: "Sita Sharma", role: "Restaurant Owner, Delhi", feedback: "Amazing pricing and super-fast delivery! Highly recommend.", img: "https://images.unsplash.com/photo-1623415526961-7e7c6d8f5d5a?auto=format&fit=crop&w=100&q=80" },
    { name: "Amit Patel", role: "Shop Owner, Bangalore", feedback: "Reliable suppliers, consistent quality, and excellent support.", img: "https://images.unsplash.com/photo-1603415526960-f1e7a80c5d5a?auto=format&fit=crop&w=100&q=80" },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12 drop-shadow-sm">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-green-50 shadow hover:shadow-lg transition transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-green-600"/>
              </div>
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <h3 className="mt-4 text-green-800 font-semibold">{t.name}</h3>
              <p className="text-gray-600 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
