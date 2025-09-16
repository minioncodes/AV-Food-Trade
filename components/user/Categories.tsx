"use client";

export default function ShopByCategorySection() {
  const categories = [
    { name: "Dry Fruits", img: "https://images.unsplash.com/photo-1598514982832-2e1d92c0d1f6?auto=format&fit=crop&w=600&q=80" },
    { name: "Spices", img: "https://images.unsplash.com/photo-1622182487667-fbfcf89f02c7?auto=format&fit=crop&w=600&q=80" },
    { name: "Grains", img: "https://images.unsplash.com/photo-1606312618283-2f60ebf0e2f6?auto=format&fit=crop&w=600&q=80" },
    { name: "Oils", img: "https://images.unsplash.com/photo-1618879952618-7df6d8309b43?auto=format&fit=crop&w=600&q=80" },
    { name: "Snacks", img: "https://images.unsplash.com/photo-1600180758895-7dc7c1f4c9f7?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12 drop-shadow-sm">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform">
              <img src={cat.img} alt={cat.name} className="w-full h-40 sm:h-48 lg:h-56 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-lg sm:text-xl font-semibold drop-shadow-lg">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
