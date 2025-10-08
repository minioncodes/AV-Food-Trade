"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { dummyProducts } from "@/app/data/DummyProducts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart} from "@/redux/slices/user-slice/cartSlice";
import Link from "next/link";





export default function ProductsList() {
  const dispatch = useDispatch();
   const cart = useSelector((state: RootState) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const phoneNumber = "917880561870"; // ✅ Replace with your WhatsApp number (no +, no spaces)

    const itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} (x${item.quantity}) - ₹${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("%0A"); // line break in WhatsApp

    const message = `Hello, I’d like to place an order 🛒%0A%0AItems:%0A${itemsList}%0A%0ATotal: ₹${total.toFixed(
      2
    )}%0A%0ALink: https://avtradecorp.com/user/cart`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
    
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
          
            <div className="relative w-full h-64 bg-gray-50">
              <Link href={`/product/${product._id}`} className="block">
  <Image
    src={product.images?.[0] || "/placeholder.png"}
    alt={product.name}
    fill
    className="object-cover"
  />
</Link>
              {product.isFeatured && (
                <span className="absolute top-2 left-2 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 shadow-md">
                  Featured
                </span>
              )}
            </div>

            <div className="p-5 flex flex-col flex-grow space-y-3">
              <Link href={`/product/${product._id}`}  className="text-lg font-semibold text-gray-900 truncate">
                {product.name}
              </Link >
              <Link href={`/product/${product._id}`} className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </Link>

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
                  <button
                    onClick={handleCheckout}
                    className="px-3 py-2 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}
