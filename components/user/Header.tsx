"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiChevronDown,
  FiPackage,
  FiLogOut,
} from "react-icons/fi";
import Image from "next/image";

// ⬇️ Adjust these paths
import { dummyProducts } from "@/app/data/DummyProducts";
import { addToCart } from "@/redux/slices/user-slice/cartSlice";
import PromoStrip from "../promo";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images?: string[];
  stock?: number;
};

const normalize = (s: string) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

const searchProducts = (items: Product[], q: string) => {
  const query = normalize(q).trim();
  if (!query) return [];
  const tokens = query.split(/\s+/).filter(Boolean);

  const results = items
    .map((p) => {
      const nameN = normalize(p.name);
      const descN = normalize(p.description || "");
      const hay = `${nameN} ${descN}`;
      const all = tokens.every((t) => hay.includes(t));
      if (!all) return null;

      const nameHits = tokens.reduce(
        (a, t) => a + (nameN.includes(t) ? 1 : 0),
        0
      );
      const firstIdx = Math.min(
        ...tokens.map((t) => hay.indexOf(t)).filter((i) => i >= 0)
      );
      const score = nameHits * 1000 - firstIdx;
      return { p, score };
    })
    .filter(Boolean) as { p: Product; score: number }[];

  results.sort((a, b) => b.score - a.score);
  return results.map((r) => r.p);
};

const Header = () => {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  // search state
  const [q, setQ] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const cart = useSelector((state: RootState) => state.cart.items);
  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  // debounce
  const [debouncedQ, setDebouncedQ] = useState(q);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q), 120);
    return () => clearTimeout(t);
  }, [q]);

  const results = useMemo(
    () => searchProducts(dummyProducts, debouncedQ).slice(0, 8),
    [debouncedQ]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const n = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(n)) setMenuOpen(false);
      if (searchWrapRef.current && !searchWrapRef.current.contains(n)) {
        setShowDropdown(false);
        setActiveIdx(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      if (activeIdx >= 0) {
        const target = results[activeIdx];
        window.location.href = `/product/${target._id}`;
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setActiveIdx(-1);
    }
  };

  const handleCheckout = () => {
    const phoneNumber = "917880561870"; // ✅ Replace with your WhatsApp number (no +, no spaces)

    const itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} (x${item.quantity}) - $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("%0A"); // line break in WhatsApp

    const message = `Hello, I’d like to place an order 🛒%0A%0AItems:%0A${itemsList}%0A%0ATotal: $${total.toFixed(
      2
    )}%0A%0ALink: https://avtradecorp.com/user/cart`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <PromoStrip />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3-col bar keeps search centered */}
        <div className="grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center h-16 sm:h-20 gap-3 sm:gap-4">
          {/* Left: Logo */}
          <span className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/av-trade.png"
                alt="AV Logo"
                width={35}
                height={30}
                className=" object-contain sm:mr-3 sm:w-[45px] sm:h-[45px]"
              />
              {/* Company name (visible only on desktop) */}
              {/* <span className="hidden md:inline-block text-3xl font-extrabold italic text-green-700 tracking-wide">
                TRADE CORPORATION
              </span> */}
            </Link>
          </span>

          {/* Center: Search */}
          <div className="relative flex justify-center" ref={searchWrapRef}>
            <div className="flex items-center bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm transition focus-within:ring-2 focus-within:ring-green-500 w-full max-w-[220px] sm:max-w-md">
              <FiSearch size={18} className="text-gray-500 shrink-0" />
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => q && setShowDropdown(true)}
                onKeyDown={onKeyDownSearch}
                type="text"
                placeholder="Search products…"
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 outline-none placeholder-gray-500 w-full"
                aria-label="Search products"
                autoComplete="off"
              />
            </div>

            {showDropdown && q && (
              <div
                // Mobile: fixed, wide; Desktop: absolute under input
                className="
      fixed inset-x-2 top-16 z-[60]
      sm:inset-auto sm:absolute sm:top-[110%] sm:z-50 sm:w-full sm:max-w-md
    "
              >
                <div className="mx-auto rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                  {results.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-600">
                      No results for “{q}”.
                    </div>
                  ) : (
                    <ul className="divide-y divide-gray-100">
                      {results.map((p, i) => (
                        <li
                          key={p._id}
                          className={activeIdx === i ? "bg-green-50" : ""}
                        >
                          {/* ONE COMPACT ROW — same layout as desktop, scaled down */}
                          <div className="px-3 py-2.5 flex items-center gap-2">
                            {/* Thumb */}
                            <Link
                              href={`/product/${p._id}`}
                              className="relative h-10 w-10 shrink-0 rounded-md overflow-hidden bg-gray-100"
                              onClick={() => {
                                setShowDropdown(false);
                                setQ("");
                                setActiveIdx(-1);
                              }}
                            >
                              {p.images?.[0] && (
                                <Image
                                  src={p.images[0]}
                                  alt={p.name}
                                  fill
                                  sizes="40px"
                                  className="object-cover"
                                />
                              )}
                            </Link>

                            {/* Title + tiny desc (truncated) */}
                            <div className="min-w-0 flex-1">
                              <Link
                                href={`/product/${p._id}`}
                                onClick={() => {
                                  setShowDropdown(false);
                                  setQ("");
                                  setActiveIdx(-1);
                                }}
                                className="block"
                              >
                                <p className="truncate text-[13px] font-semibold text-gray-900 leading-5">
                                  {p.name}
                                </p>
                                <p className="truncate text-[11px] text-gray-600 leading-4">
                                  {p.description}
                                </p>
                              </Link>
                            </div>

                            {/* Price */}
                            <div className="shrink-0 text-[13px] font-semibold text-green-700 ml-1">
                              ₹{p.price}
                            </div>

                            {/* Buttons — same size for both */}
                            <div className="shrink-0 flex items-center gap-1 ml-1 whitespace-nowrap">
                              {/* Add to Cart */}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  dispatch(
                                    addToCart({
                                      _id: String(p._id),
                                      name: p.name,
                                      price: p.price,
                                      images: p.images ?? [],
                                      quantity: 1,
                                    })
                                  );
                                }}
                                className="inline-flex items-center justify-center
               h-8 px-3 rounded-md text-[12px] font-semibold
               text-white bg-green-600 hover:bg-green-700 transition"
                              >
                                Add
                              </button>

                              {/* Buy Now (force same size/styles on the inner button/anchor) */}
                              <button
                                onClick={handleCheckout}
                                className="h-8 px-3 rounded-md text-[12px] font-semibold bg-blue-500 text-white hover:bg-blue-700"
                              >
                                Checkout
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Cart + Hamburger */}
          <div className="flex items-center justify-end space-x-5 sm:space-x-4">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-5  text-gray-800 font-semibold text-sm tracking-wide">
              <Link
                href="/catelog"
                className="hover:text-green-600 transition-colors"
              >
                SHOP
              </Link>
              <Link
                href="/contact"
                className="hover:text-green-600 transition-colors"
              >
                CONTACT
              </Link>
            </nav>

            {/* Cart (always) */}
            <Link
              href="/cart"
              className="relative hover:scale-105 transition-transform"
              aria-label="Cart"
            >
              <FiShoppingCart size={26} className="text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account (desktop only) */}
            <div className="hidden md:block relative" ref={menuRef}>
              {session ? (
                <>
                  <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition shadow-sm"
                  >
                    <FiUser size={20} className="text-gray-700" />
                    <span className="hidden sm:inline text-sm font-medium text-gray-700">
                      {session.user?.name || "Account"}
                    </span>
                    <FiChevronDown size={16} className="text-gray-500" />
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                      <ul className="flex flex-col py-2 text-gray-700 text-sm font-medium">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition"
                          >
                            <FiPackage size={16} />
                            <span>Orders</span>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="flex items-center w-full space-x-2 px-4 py-2 hover:bg-gray-100 transition text-left"
                          >
                            <FiLogOut size={16} />
                            <span>Sign Out</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href="https://wa.me/7880561870?text=Hi%20I%E2%80%99d%20like%20to%20know%20more%20about%20AV%20Trade%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-full shadow hover:bg-green-700 transition"
                >
                  Get In Touch
                </Link>
              )}
            </div>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 animate-fade-in">
          <nav className="flex flex-col px-4 py-4 text-gray-800 font-semibold">
            <Link
              href="/catelog"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-gray-100 hover:text-green-600 transition-colors"
            >
              SHOP
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-3 hover:text-green-600 transition-colors"
            >
              CONTACT
            </Link>

            {session ? (
              <>
                <Link
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 flex items-center space-x-2 hover:text-green-600 transition-colors"
                >
                  <FiPackage size={18} />
                  <span>Orders</span>
                </Link>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setMobileOpen(false);
                  }}
                  className="py-3 flex items-center space-x-2 text-left hover:text-green-600 transition-colors"
                >
                  <FiLogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                href="https://wa.me/7880561870?text=Hi%20I%E2%80%99d%20like%20to%20know%20more%20about%20AV%20Trade%20products"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2 text-center text-sm font-medium text-white bg-green-600 rounded-md shadow hover:bg-green-700 transition"
              >
                Get In Touch
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
