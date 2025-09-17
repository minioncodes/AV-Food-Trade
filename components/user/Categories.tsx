"use client";

export default function ShopByCategorySection() {
  const categories = [
    { name: "Dry Fruits", img: "https://media.istockphoto.com/id/1218693828/photo/wooden-bowl-with-mixed-nuts-on-rustic-table-top-view-healthy-food-and-snack.webp?a=1&b=1&s=612x612&w=0&k=20&c=un8-1rnSbeydD36u6g5Jp4MLrzX2GWOGYuxZJeYQrXU=" },
    { name: "Spices", img: "https://media.istockphoto.com/id/515853684/photo/indian-spices-in-terracotta-pots-colourful-spices-group-of-spices.webp?a=1&b=1&s=612x612&w=0&k=20&c=1WMA8kIUFyScKFFOAUIgj_EdfhPnFczuI3o97L8POAU=" },
    { name: "Grains", img: "https://plus.unsplash.com/premium_photo-1722945635992-8eda6a907978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhaW5zfGVufDB8fDB8fHww" },
    { name: "Oils", img: "https://images.unsplash.com/photo-1654245201134-49f7e8115817?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2luZyUyMG9pbHN8ZW58MHx8MHx8fDA%3D" },
    { name: "Snacks", img: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25hY2tzfGVufDB8fDB8fHww" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-8xl mx-auto px-9  lg:px-8 text-center">
        {/* <h2 className="text-4xl font-bold text-green-900 mb-12 drop-shadow-sm">Shop by Category</h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform">
              <img src={cat.img} alt={cat.name} className="w-full h-40 sm:h-48 lg:h-96 object-cover" />
              <div className="absolute inset-0  flex items-center justify-center">
                <h3 className="text-white shadow-2xl shadow-amber-100 text-lg sm:text-3xl font-semibold drop-shadow-lg">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
