"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/user-slice/cartSlice";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import CheckoutButton from "../checkout/CheckoutButton";
import { useRouter } from "next/navigation";

// Import dummy products
import { dummyProducts } from "@/app/data/DummyProducts";

export default function ProductsList() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="p-6 max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-extrabold text-green-600 mb-6 text-center">
        Featured Products
      </h1>

      {/* --- Two Product Rows (Horizontal Scroll like Flipkart/Amazon) --- */}
      {[0, 1].map((rowIndex) => (
        <div
          key={rowIndex}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 mb-6"
        >
          {dummyProducts
            .slice(rowIndex * 6, rowIndex * 6 + 6) // 6 products per row
            .map((product) => (
              <div
                key={product._id}
                className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative w-full h-40 bg-gray-50">
                  <Image
                    src={product.images?.[0] || "/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isFeatured && (
                    <span className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-3 flex flex-col flex-grow space-y-2">
                  <h2 className="text-sm font-semibold text-gray-900 truncate">
                    {product.name}
                  </h2>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Ratings */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={12}
                        className={
                          i < Math.round(product.averageRating || 0)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.ratings?.length || 0})
                    </span>
                  </div>

                  {/* Price & Stock */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">
                      ₹{product.price}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        product.stock > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-1 mt-auto pt-1">
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
                      className={`p-1 text-xs rounded-lg text-white font-semibold transition ${
                        product.stock > 0
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {product.stock > 0 ? "Add" : "Sold"}
                    </button>

                    {product.stock > 0 && (
                      <CheckoutButton amount={product.price} />
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}

      {/* --- View All Products Button --- */}
      <div className="text-center mt-6">
        <button
          onClick={() => router.push("/user/catelog")}
          className="px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-full shadow hover:bg-green-700 transition"
        >
          View All Products
        </button>
      </div>
    </div>
  );
}
