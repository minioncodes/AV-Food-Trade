"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Newsletter from "./NewsLetter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">  
        <div>
          <h2 className="text-3xl font-extrabold text-white">AV-TRADE</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Premium groceries and dry fruits delivered fresh to your door.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white"><FaFacebook size={22} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={22} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={22} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={22} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="/user/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/user/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/user/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

     
        <div>
          <Newsletter />
        </div>
      </div>

  
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </footer>
  );
}
