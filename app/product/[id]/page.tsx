"use client";

import { useParams } from "next/navigation";
import { dummyProducts } from "@/app/data/DummyProducts";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/user-slice/cartSlice";
import { useState, useMemo } from "react";
import TestimonialsSection from "@/components/user/Testimonials";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // 🧩 Find product first (not conditionally)
  const product = dummyProducts.find((p) => p._id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");

  // 🧮 Weight-based dynamic pricing logic
  const weightMultipliers: Record<string, number> = {
    "500g": 1,
    "1kg": 2,
    "2kg": 3.5,
    "5kg": 7,
  };

  const updatedPrice = useMemo(() => {
    if (!product) return 0;
    const multiplier = weightMultipliers[selectedWeight] || 1;
    return Math.round(product.price * multiplier);
  }, [selectedWeight, product?.price]);

  // 🟢 WhatsApp Buy Now Handler
  const handleBuyNow = () => {
    if (!product) return;
    const phoneNumber = "917880561870";
    const message = `Hi! I’m interested in *${product.name} (${selectedWeight})* - ₹${updatedPrice}.%0A%0ALink: https://avtradecorp.com/product/${product._id}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // 🧱 Handle missing product
  if (!product) {
    return (
      <div className="text-center py-20 text-gray-700">
        <h1 className="text-3xl font-semibold">Product not found 😢</h1>
      </div>
    );
  }

  // 🛍️ UI Render
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Product Images */}
        <div>
          <div className="relative w-full h-[400px] bg-gray-50 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-4 mt-4 justify-center">
            {(product.images || []).slice(0, 3).map((img, i) => (
              <div
                key={i}
                className="relative w-20 h-20 rounded-lg overflow-hidden border hover:border-green-500 cursor-pointer"
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <h2 className="text-gray-500 text-sm font-medium mb-1">
            {product._id.startsWith("df")
              ? "Dry Fruits"
              : product._id.startsWith("gr")
              ? "Grains & Pulses"
              : product._id.startsWith("sp")
              ? "Spices"
              : product._id.startsWith("se")
              ? "Seeds"
              : "Sweeteners"}
          </h2>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            {product.name}
          </h1>

          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={18}
                className={
                  i < Math.round(product.averageRating || 0)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              ({product.averageRating.toFixed(1)} rating)
            </span>
          </div>

          {/* 💰 Dynamic Price */}
          <div className="text-3xl font-bold text-green-700 mb-4">
            ₹{updatedPrice}
            <span className="text-gray-400 line-through text-lg ml-2">
              ₹{Math.round(updatedPrice * 1.1)}
            </span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit.
          </p>

          {/* 🧂 Weight Selection */}
          <div className="mb-6">
            <span className="block mb-2 font-semibold text-gray-700">
              Weight:
            </span>
            <div className="flex gap-3">
              {Object.keys(weightMultipliers).map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedWeight === w
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* 📦 Quantity Selector */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-semibold text-gray-700">Quantity:</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-xl font-bold text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1 text-lg font-semibold text-gray-800">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-xl font-bold text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* 🛒 Buttons */}
          <div className="flex gap-4">
            <button
              disabled={product.stock === 0}
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    name: `${product.name} (${selectedWeight})`,
                    price: updatedPrice,
                    images: product.images ?? [],
                    quantity,
                  })
                )
              }
              className={`flex-1 py-3 text-lg font-semibold rounded-xl text-white transition ${
                product.stock > 0
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "text-white cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 py-3 text-lg font-semibold rounded-xl text-white bg-yellow-500 hover:bg-yellow-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ Reviews Section */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Ratings & Reviews
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Rating Summary */}
          <div className="md:w-1/3 bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-extrabold text-yellow-500 mb-1">
              {product.averageRating.toFixed(1)}
            </div>
            <p className="text-gray-600 mb-4">
              out of 5 ({product.ratings?.length || 34} reviews)
            </p>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium w-6">{star}</span>
                <FaStar className="text-yellow-400" />
                <div className="h-2 bg-gray-200 rounded-full flex-1">
                  <div
                    className="h-2 bg-yellow-400 rounded-full"
                    style={{ width: `${star * 10 + 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Review List */}
          <div className="md:w-2/3">
  {product.ratings && product.ratings.length > 0 ? (
    product.ratings.map((review, i) => (
      <div
        key={i}
        className="border-b py-4 flex flex-col md:flex-row gap-4"
      >
        {/* Initials Circle */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-lg">
          {review.userName?.charAt(0).toUpperCase() || "U"}
        </div>

        {/* Review Content */}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">
            {review.userName}
          </h4>

          {/* Star Ratings */}
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, j) => (
              <FaStar
                key={j}
                size={14}
                className={
                  j < review.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-gray-600 text-sm">{review.comment}</p>

          {/* Date */}
          <p className="text-gray-400 text-xs mt-1">{review.date}</p>

          {/* Optional image (product reference) */}
          <div className="flex gap-2 mt-3">
            <Image
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.name}
              width={70}
              height={70}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500 italic">No reviews yet for this product.</p>
  )}
</div>

        </div>
      </div>
    </section>
  );
}
