"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3-col bar so center stays truly centered */}
        <div className="grid grid-cols-3 items-center h-16 sm:h-20">
          {/* Left: Logo */}
          <span className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/av-trade.png"
                alt="AV Logo"
                width={40}
                height={40}
                className="mr-2 object-contain sm:mr-3 sm:w-[45px] sm:h-[45px]"
              />
            </Link>
          </span>

          {/* Center: Search — visible on mobile & desktop; size adapts */}
          <div className="flex justify-center">
            <div className="flex items-center bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm transition focus-within:ring-2 focus-within:ring-green-500 w-full max-w-[200px] sm:max-w-md">
              <FiSearch size={18} className="text-gray-500 shrink-0" />
              <input
                type="text"
                placeholder="Search…"
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 outline-none placeholder-gray-500 w-full"
              />
            </div>
          </div>

          {/* Right: Cart + Hamburger on mobile; full nav & account on desktop */}
          <div className="flex items-center justify-end space-x-3 sm:space-x-4">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold text-sm tracking-wide">
              <Link href="/catelog" className="hover:text-green-600 transition-colors">
                SHOP
              </Link>
              <Link href="/contact" className="hover:text-green-600 transition-colors">
                CONTACT
              </Link>
            </nav>

            {/* Cart (always visible) */}
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
            {session ? (
              <div className="hidden md:block relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
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
              </div>
            ) : (
              <div className="hidden md:flex space-x-3">
                <Link
                  href="https://wa.me/7880561870?text=Hi%20I%E2%80%99d%20like%20to%20know%20more%20about%20AV%20Trade%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-full shadow hover:bg-green-700 transition"
                >
                  Get In Touch
                </Link>
              </div>
            )}

            {/* Hamburger (mobile only) — sits to the right of cart */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Sheet */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 animate-fade-in">
          <nav className="flex flex-col px-4 py-3 text-gray-900 text-base font-medium">
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
                  <FiPackage className="shrink-0" size={18} />
                  <span>Orders</span>
                </Link>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setMobileOpen(false);
                  }}
                  className="py-3 flex items-center space-x-2 text-left hover:text-green-600 transition-colors"
                >
                  <FiLogOut className="shrink-0" size={18} />
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
