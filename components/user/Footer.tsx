"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram} from "react-icons/fa";
import Newsletter from "./NewsLetter";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">  
        <div>
          <Link href="/" className="flex items-center">
              <Image
                src="/avtw.svg"
                alt="AV Logo"
                width={150}
                height={50}
              />
            </Link>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Premium groceries and dry fruits delivered fresh to your door.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="https://www.facebook.com/avtradecorp/" className="hover:text-white"><FaFacebook size={22} /></Link>
            <Link href="https://www.instagram.com/avtradecorp/" className="hover:text-white"><FaInstagram size={22} /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

     
        <div>
          <Newsletter />
        </div>
      </div>

  
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AV Trade Corporation. All rights reserved.
      </div>
    </footer>
  );
}
