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
  FiUserCheck,
  FiPackage,
  FiLogOut,
} from "react-icons/fi";

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
        <div className="flex justify-between items-center h-20">

<span className="flex items-center">
  <img
    src="/av-trade.png"
    alt="AV Logo"
    width={45}
    height={45}
    className="mr-3 object-contain"
  />
</span>


          <nav className="hidden md:flex space-x-10 text-gray-800 font-semibold text-sm tracking-wide">
            <Link href="#" className="hover:text-green-600 transition-colors">
              SHOP
            </Link>
            <Link href="#" className="hover:text-green-600 transition-colors">
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center space-x-4">

            <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm transition focus-within:ring-2 focus-within:ring-green-500">
              <FiSearch size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search wholesale groceries..."
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 outline-none placeholder-gray-500 w-40"
              />
            </div>

            {/* Cart */}
            <Link
              href="/user/cart"
              className="relative hover:scale-105 transition-transform"
            >
              <FiShoppingCart size={26} className="text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {session ? (
              <div className="relative" ref={menuRef}>
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
                          href={`/user/profile/${session.user?.id}`}
                          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition"
                        >
                          <FiUserCheck size={16} />
                          <span>Profile</span>
                        </Link>
                      </li>
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
                  href="/user/signin"
                  className="px-5 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-full hover:bg-gray-100 transition shadow-sm"
                >
                  Sign In
                </Link>
                <Link
                  href="#"
                  className="px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-full shadow hover:bg-green-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
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

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 animate-fade-in">
          <nav className="flex flex-col space-y-3 px-4 py-4 text-gray-800 font-semibold">
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="hover:text-green-600 transition-colors"
            >
              SHOP
            </Link>
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="hover:text-green-600 transition-colors"
            >
              CONTACT
            </Link>

            {session ? (
              <>
                <Link
                  href={`/user/profile/${session.user?.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium hover:text-green-600 transition"
                >
                  <FiUserCheck size={18} />
                  <span>Profile</span>
                </Link>
                <Link
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium hover:text-green-600 transition"
                >
                  <FiPackage size={18} />
                  <span>Orders</span>
                </Link>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setMobileOpen(false);
                  }}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium hover:text-green-600 transition"
                >
                  <FiLogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/user/signin"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-center text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  Sign In
                </Link>
                <Link
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-center text-sm font-medium text-white bg-green-600 rounded-md shadow hover:bg-green-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
