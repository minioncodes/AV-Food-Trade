"use client";

import { useState } from "react";
import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
<>
<Header />
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-sm">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Have questions about bulk orders, pricing, or deliveries?  
              Our team is here to help you with all your wholesale grocery needs.  
              Drop us a message and we’ll get back to you quickly.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-green-800">📍 Address:</span>  
                123 AV-TRADE Street, Lucknow, India
              </p>
              <p>
                <span className="font-semibold text-green-800">📞 Phone:</span>  
                +91 98765 43210
              </p>
              <p>
                <span className="font-semibold text-green-800">✉️ Email:</span>  
                support@avtrade.com
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Write your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
</>
  );
}
