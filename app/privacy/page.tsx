"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-900 mb-8 text-center"
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="prose prose-lg text-gray-700 leading-relaxed"
      >
        <p>
          At <strong>AV-TRADE</strong>, your privacy is important to us. This
          policy explains how we collect, use, and protect your personal data.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            Personal details such as name, email, phone number, and address.
          </li>
          <li>
            Order history, payment details, and product preferences for better
            service.
          </li>
          <li>
            Technical data such as device, browser type, and IP address for
            analytics and security.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To process and deliver your orders.</li>
          <li>To improve our services and customer support.</li>
          <li>
            To send order updates, promotions, or relevant product
            recommendations (only with your consent).
          </li>
        </ul>

        <h2>3. Data Protection</h2>
        <p>
          We use encryption, firewalls, and secure servers to protect your
          personal information. Only authorized staff have access to your data.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>
          We never sell your personal data. However, we may share limited
          information with:
        </p>
        <ul>
          <li>Delivery partners to fulfill your orders.</li>
          <li>
            Payment gateways for processing secure transactions (we do not store
            your card details).
          </li>
          <li>
            Legal authorities if required by law or for fraud prevention.
          </li>
        </ul>

        <h2>5. Cookies & Tracking</h2>
        <p>
          Our website uses cookies to enhance user experience and analyze
          traffic. You may disable cookies in your browser settings.
        </p>

        <h2>6. Your Rights</h2>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of marketing communications at any time.</li>
          <li>
            Request a copy of the personal data we hold about you by contacting
            our support.
          </li>
        </ul>

        <h2>7. Policy Updates</h2>
        <p>
          We may update this policy from time to time. Any significant changes
          will be communicated via email or website notice.
        </p>
      </motion.div>
    </section>
  );
}
