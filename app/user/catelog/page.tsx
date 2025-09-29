"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/user-slice/cartSlice";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import { dummyProducts } from "@/app/data/DummyProducts";
import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";



// const dummyProducts = [
//   // --- Dry Fruits (10) ---
//   {
//     _id: "df1",
//     name: "Premium Almonds (250g)",
//     description: "Crunchy California almonds packed with protein and nutrients.",
//     price: 350,
//     stock: 100,
//     images: ["/images/almonds.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df2",
//     name: "Organic Cashews (250g)",
//     description: "Whole, creamy cashews for snacking or cooking.",
//     price: 420,
//     stock: 80,
//     images: ["/images/cashews.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df3",
//     name: "Medjool Dates (500g)",
//     description: "Naturally sweet premium dates, energy booster.",
//     price: 280,
//     stock: 60,
//     images: ["/images/dates.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df4",
//     name: "Raisins (250g)",
//     description: "Golden raisins full of natural sweetness and energy.",
//     price: 120,
//     stock: 150,
//     images: ["/images/raisins.jpg"],
//     averageRating: 4.2,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df5",
//     name: "Pistachios (250g)",
//     description: "Roasted pistachios with shell, lightly salted.",
//     price: 480,
//     stock: 90,
//     images: ["/images/pistachios.jpg"],
//     averageRating: 4.6,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df6",
//     name: "Walnuts (250g)",
//     description: "Premium walnut kernels rich in omega-3.",
//     price: 400,
//     stock: 70,
//     images: ["/images/walnuts.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df7",
//     name: "Hazelnuts (200g)",
//     description: "Crunchy hazelnuts for snacking and desserts.",
//     price: 360,
//     stock: 50,
//     images: ["/images/hazelnuts.jpg"],
//     averageRating: 4.1,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df8",
//     name: "Apricots (250g)",
//     description: "Sun-dried apricots with a natural tangy taste.",
//     price: 210,
//     stock: 65,
//     images: ["/images/apricots.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df9",
//     name: "Brazil Nuts (200g)",
//     description: "Rare, selenium-rich Brazil nuts for immunity.",
//     price: 500,
//     stock: 40,
//     images: ["/images/brazilnuts.jpg"],
//     averageRating: 4.6,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "df10",
//     name: "Mixed Dry Fruits (500g)",
//     description: "Assorted mix of almonds, cashews, raisins, and walnuts.",
//     price: 550,
//     stock: 75,
//     images: ["/images/mixdry.jpg"],
//     averageRating: 4.7,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },

//   // --- Grains & Pulses (10) ---
//   {
//     _id: "gr1",
//     name: "Basmati Rice (1kg)",
//     description: "Long grain aromatic Basmati rice.",
//     price: 150,
//     stock: 200,
//     images: ["/images/rice.jpg"],
//     averageRating: 4.8,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr2",
//     name: "Organic Wheat Flour (5kg)",
//     description: "Stone-ground organic wheat flour for soft chapatis.",
//     price: 280,
//     stock: 90,
//     images: ["/images/wheat.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr3",
//     name: "Yellow Moong Dal (1kg)",
//     description: "Protein-rich yellow moong dal, easy to digest.",
//     price: 120,
//     stock: 150,
//     images: ["/images/moongdal.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr4",
//     name: "Chana Dal (1kg)",
//     description: "Polished split chickpeas, rich in protein.",
//     price: 110,
//     stock: 180,
//     images: ["/images/chanadal.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr5",
//     name: "Masoor Dal (1kg)",
//     description: "Red lentils, quick to cook and highly nutritious.",
//     price: 105,
//     stock: 160,
//     images: ["/images/masoordal.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr6",
//     name: "Rolled Oats (500g)",
//     description: "Healthy rolled oats for a wholesome breakfast.",
//     price: 130,
//     stock: 120,
//     images: ["/images/oats.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr7",
//     name: "Quinoa (500g)",
//     description: "Gluten-free quinoa packed with protein and fiber.",
//     price: 220,
//     stock: 95,
//     images: ["/images/quinoa.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr8",
//     name: "Barley (1kg)",
//     description: "Pearled barley ideal for soups and salads.",
//     price: 140,
//     stock: 110,
//     images: ["/images/barley.jpg"],
//     averageRating: 4.2,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr9",
//     name: "Toor Dal (1kg)",
//     description: "Arhar dal with mild flavor, staple in Indian households.",
//     price: 125,
//     stock: 140,
//     images: ["/images/toordal.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "gr10",
//     name: "Kabuli Chana (1kg)",
//     description: "White chickpeas, great for chole and salads.",
//     price: 145,
//     stock: 130,
//     images: ["/images/chickpeas.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },

//   // --- Spices (12) ---
//   {
//     _id: "sp1",
//     name: "Turmeric Powder (200g)",
//     description: "Bright yellow turmeric powder with earthy aroma.",
//     price: 90,
//     stock: 200,
//     images: ["/images/turmeric.jpg"],
//     averageRating: 4.6,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp2",
//     name: "Black Pepper (100g)",
//     description: "Bold and aromatic black peppercorns.",
//     price: 120,
//     stock: 70,
//     images: ["/images/pepper.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp3",
//     name: "Cardamom (50g)",
//     description: "Premium green cardamom pods for rich flavor.",
//     price: 250,
//     stock: 50,
//     images: ["/images/cardamom.jpg"],
//     averageRating: 4.7,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp4",
//     name: "Cinnamon Sticks (100g)",
//     description: "Sweet and aromatic cinnamon sticks.",
//     price: 85,
//     stock: 90,
//     images: ["/images/cinnamon.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp5",
//     name: "Cumin Seeds (200g)",
//     description: "Earthy flavored cumin seeds for curries.",
//     price: 95,
//     stock: 140,
//     images: ["/images/cumin.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp6",
//     name: "Red Chili Powder (200g)",
//     description: "Fiery red chili powder for extra heat.",
//     price: 110,
//     stock: 130,
//     images: ["/images/chili.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp7",
//     name: "Cloves (50g)",
//     description: "Strongly aromatic cloves for seasoning.",
//     price: 150,
//     stock: 70,
//     images: ["/images/cloves.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp8",
//     name: "Mustard Seeds (200g)",
//     description: "Black mustard seeds for tempering and curries.",
//     price: 80,
//     stock: 90,
//     images: ["/images/mustard.jpg"],
//     averageRating: 4.2,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp9",
//     name: "Fenugreek Seeds (200g)",
//     description: "Bitter aromatic seeds for spice blends.",
//     price: 70,
//     stock: 100,
//     images: ["/images/fenugreek.jpg"],
//     averageRating: 4.1,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp10",
//     name: "Fennel Seeds (200g)",
//     description: "Sweet fennel seeds, perfect as a mouth freshener.",
//     price: 95,
//     stock: 110,
//     images: ["/images/fennel.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp11",
//     name: "Bay Leaves (50g)",
//     description: "Aromatic bay leaves for slow-cooked dishes.",
//     price: 60,
//     stock: 80,
//     images: ["/images/bayleaf.jpg"],
//     averageRating: 4.2,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sp12",
//     name: "Asafoetida (50g)",
//     description: "Strong aromatic hing, essential in Indian dals.",
//     price: 180,
//     stock: 60,
//     images: ["/images/hing.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },

//   // --- Seeds (4) ---
//   {
//     _id: "se1",
//     name: "Chia Seeds (250g)",
//     description: "Omega-3 rich chia seeds for smoothies.",
//     price: 180,
//     stock: 120,
//     images: ["/images/chia.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "se2",
//     name: "Flax Seeds (250g)",
//     description: "Nutty flax seeds high in fiber and omega-3.",
//     price: 120,
//     stock: 100,
//     images: ["/images/flax.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "se3",
//     name: "Pumpkin Seeds (250g)",
//     description: "Protein-packed pumpkin seeds for snacking.",
//     price: 220,
//     stock: 90,
//     images: ["/images/pumpkin.jpg"],
//     averageRating: 4.6,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },
//   {
//     _id: "se4",
//     name: "Sunflower Seeds (250g)",
//     description: "Lightly roasted sunflower seeds, healthy snack.",
//     price: 150,
//     stock: 100,
//     images: ["/images/sunflower.jpg"],
//     averageRating: 4.4,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },

//   // --- Sweeteners (4) ---
//   {
//     _id: "sw1",
//     name: "Organic Jaggery (1kg)",
//     description: "Traditional jaggery blocks made from sugarcane juice.",
//     price: 140,
//     stock: 90,
//     images: ["/images/jaggery.jpg"],
//     averageRating: 4.5,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sw2",
//     name: "Rock Sugar (500g)",
//     description: "Crystalline rock sugar for desserts and remedies.",
//     price: 100,
//     stock: 85,
//     images: ["/images/mishri.jpg"],
//     averageRating: 4.2,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sw3",
//     name: "Organic Honey (500ml)",
//     description: "Pure forest honey with no additives.",
//     price: 250,
//     stock: 60,
//     images: ["/images/honey.jpg"],
//     averageRating: 4.7,
//     ratings: [],
//     isFeatured: true,
//     brand: "AV Trade",
//   },
//   {
//     _id: "sw4",
//     name: "Brown Sugar (1kg)",
//     description: "Soft brown sugar for baking and beverages.",
//     price: 130,
//     stock: 70,
//     images: ["/images/brownsugar.jpg"],
//     averageRating: 4.3,
//     ratings: [],
//     isFeatured: false,
//     brand: "AV Trade",
//   },
// ];


export default function ProductsList() {
  const dispatch = useDispatch();

  return (
    <>
    <Header />
    
    <div className="p-6 max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-green-600 mb-10 text-center">
        Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {dummyProducts.map((product) => (
          <div
            key={product._id}
            className="rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-64 bg-gray-50">
              <Image
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.isFeatured && (
                <span className="absolute top-2 left-2 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 shadow-md">
                  Featured
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-grow space-y-3">
              <h2 className="text-lg font-semibold text-gray-900 truncate">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>

              {/* Ratings */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.averageRating || 0)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  ({product.ratings?.length || 0})
                </span>
              </div>

              {/* Price & Stock */}
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-600">
                  ₹{product.price}
                </span>
                <span
                  className={`text-sm font-medium ${
                    product.stock > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {product.brand && (
                <div className="text-xs text-gray-500">{product.brand}</div>
              )}

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-auto pt-1">
                <button
                  disabled={product.stock === 0}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: String(product._id),
                        name: product.name,
                        price: product.price,
                        images: product.images ?? [],
                        quantity: 1,
                      })
                    )
                  }
                  className={`p-2 rounded-xl text-white font-semibold transition ${
                    product.stock > 0
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {product.stock > 0 ? "Add to Cart" : "Sold Out"}
                </button>

                {product.stock > 0 && (
                  <div>
                    <CheckoutButton amount={product.price} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
  );
}
