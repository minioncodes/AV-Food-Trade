"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with ${email}`); // replace with API call later
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-4">Join Our Newsletter</h3>
      <p className="text-gray-500 mb-6 text-sm">
        Get the latest deals, offers, and grocery updates right in your inbox.
      </p>
      <form
  onSubmit={handleSubscribe}
  className="flex flex-col sm:flex-row gap-3 sm:items-center"
>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    required
    className="flex-1 min-w-0 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="shrink-0 px-5 py-2 rounded-xl bg-blue-600 text-white text-sm sm:text-base font-medium hover:bg-blue-700 transition"
  >
    Subscribe
  </button>
</form>

    </div>
  );
}
