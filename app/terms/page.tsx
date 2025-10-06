"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-900 mb-8 text-center"
      >
        Terms & Conditions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="prose prose-lg text-gray-700 leading-relaxed"
      >
        <p>
          Welcome to <strong>AV Trade Corporation</strong>. By using our platform, you agree
          to the following terms and conditions. Please read carefully before
          placing an order.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 18 years old to use our services. By registering
          or ordering, you confirm that all information provided is accurate and
          complete.
        </p>

        <h2>2. Orders & Payments</h2>
        <ul>
          <li>All orders are confirmed only after full or partial payment.</li>
          <li>Prices are subject to change without prior notice.</li>
          <li>
            Bulk orders may require additional verification and payment terms.
          </li>
          <li>
            We reserve the right to cancel orders if fraud, misuse, or policy
            violations are suspected.
          </li>
        </ul>

        <h2>3. Delivery & Shipping</h2>
        <p>
          We partner with trusted logistics providers. Delivery timelines vary
          based on your location and courier availability. Any delays caused by
          third-party logistics are beyond our control.
        </p>

        <h2>4. Returns & Refunds</h2>
        <p>
          We only accept returns for damaged or defective items reported within
          48 hours of delivery. Refunds will be processed within 7-10 business
          days after inspection.
        </p>

        <h2>5. User Responsibilities</h2>
        <ul>
          <li>Provide accurate delivery address and contact details.</li>
          <li>
            Ensure availability to receive the order at the given timeframe.
          </li>
          <li>
            Do not misuse our platform for illegal or unauthorized activities.
          </li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>
          All content, branding, and images on AV Trade Corporation are protected by
          copyright and trademark laws. Unauthorized use is prohibited.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          AV Trade Corporation is not responsible for indirect damages, losses, or delays
          caused by external factors such as courier delays, natural disasters,
          or third-party service failures.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by Indian law. Any disputes will be subject
          to the jurisdiction of the courts in <strong>Delhi, India</strong>.
        </p>
      </motion.div>
    </section>
  );
}
