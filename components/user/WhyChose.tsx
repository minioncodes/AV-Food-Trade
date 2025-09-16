export default function WhyChooseUsSection() {
  const usps = [
    { title: "100% Organic", desc: "Fresh and natural products directly from farms." },
    { title: "Bulk Discounts", desc: "Special prices for wholesale buyers." },
    { title: "Trusted Suppliers", desc: "We partner with verified suppliers." },
    { title: "Fast Delivery", desc: "Quick delivery across all major cities." },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">Why Choose AV-TRADE?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((u, i) => (
            <div key={i} className="p-6 rounded-2xl border hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-green-700">{u.title}</h3>
              <p className="mt-2 text-gray-600">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
