"use client";

import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import React from "react";

export default function AboutPage() {
  return (
    <>
<Header />
    <div className="bg-gradient-to-b from-amber-50 via-white to-green-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
          About AV-Trade
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
          Welcome to <span className="font-bold">AV-Trade</span>, your trusted
          partner for premium groceries — specializing in{" "}
          <span className="text-green-600 font-semibold">
            dry fruits, grains, pulses, and spices
          </span>
          . Based in the heart of Lucknow, we are dedicated to delivering
          high-quality, authentic, and affordable grocery essentials right to
          your doorstep.
        </p>

        {/* Who we are */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            AV-Trade was founded with a mission to bring natural, wholesome, and
            carefully sourced groceries to families and businesses. We believe
            that good food is the foundation of good health, and that’s why we
            ensure every product we deliver meets the highest standards of
            quality and freshness.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            From hand-picked{" "}
            <span className="font-medium">California almonds</span> and{" "}
            <span className="font-medium">premium cashews</span> to traditional{" "}
            <span className="font-medium">Basmati rice</span> and{" "}
            <span className="font-medium">aromatic Indian spices</span>, our
            selection is designed to serve households, restaurants, and bulk
            buyers alike.
          </p>
        </section>

        {/* What we offer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Dry Fruits:</span> Almonds,
              Cashews, Pistachios, Walnuts, Dates, and more.
            </li>
            <li>
              <span className="font-semibold">Grains & Pulses:</span> Basmati
              Rice, Wheat, Toor Dal, Moong Dal, Masoor Dal, Kabuli Chana.
            </li>
            <li>
              <span className="font-semibold">Spices:</span> Turmeric, Cardamom,
              Cumin, Black Pepper, Cloves, Red Chili Powder.
            </li>
            <li>
              <span className="font-semibold">Seeds & Sweeteners:</span> Chia
              Seeds, Flax Seeds, Organic Honey, Jaggery, Brown Sugar.
            </li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Whether you are looking for daily essentials, festive gifting, or
            wholesale bulk orders — we’ve got you covered.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Values
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At AV-Trade, we stand by three simple principles:
          </p>
          <ul className="list-decimal pl-6 mt-3 text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Quality First:</span> Only the
              finest products make it to our shelves.
            </li>
            <li>
              <span className="font-semibold">Trust & Transparency:</span> Clear
              sourcing, honest pricing, and genuine products.
            </li>
            <li>
              <span className="font-semibold">Customer Commitment:</span> Your
              satisfaction is our top priority, from order to delivery.
            </li>
          </ul>
        </section>

        {/* Address & Contact */}
        <section className="mb-12 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Visit or Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            📍 <span className="font-semibold">Office Address:</span>
          </p>
          <p className="text-gray-700 mb-4">
            Priyadarshini Apartment,
            <br />
            Wazir Hasan Road, Gokhale Marg,
            <br />
            Lucknow – 226001, Uttar Pradesh, India
          </p>
          <p className="text-gray-700 leading-relaxed">
            📞 <span className="font-semibold">Phone:</span> +91-9876543210
          </p>
          <p className="text-gray-700 leading-relaxed">
            📧 <span className="font-semibold">Email:</span>{" "}
            support@av-trade.com
          </p>
        </section>

        {/* Closing Note */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Why Choose AV-Trade?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With AV-Trade, you don’t just buy groceries — you invest in quality,
            trust, and care. Join thousands of happy customers who count on us
            for their daily essentials and premium grocery needs.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}
