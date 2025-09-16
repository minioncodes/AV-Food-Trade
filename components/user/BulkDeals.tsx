"use client";

export default function BulkDealsSection() {
  const deals = [
    { name: "Almonds Bulk Pack", price: "₹400/kg", img: "https://images.unsplash.com/photo-1598514982832-2e1d92c0d1f6?auto=format&fit=crop&w=600&q=80" },
    { name: "Cashews Bulk Pack", price: "₹500/kg", img: "https://images.unsplash.com/photo-1598514982845-d9ecb0d7a1c0?auto=format&fit=crop&w=600&q=80" },
    { name: "Pistachios Bulk Pack", price: "₹600/kg", img: "https://images.unsplash.com/photo-1606312618283-2f60ebf0e2f6?auto=format&fit=crop&w=600&q=80" },
    { name: "Raisins Bulk Pack", price: "₹170/kg", img: "https://images.unsplash.com/photo-1622182487667-fbfcf89f02c7?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 drop-shadow-sm">Bulk Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
              <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">{d.name}</h3>
                <p className="text-gray-700 mt-1">{d.price}</p>
                <button className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
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
