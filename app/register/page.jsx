"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    window.location.href = data.authorization_url; // redirect to Paystack
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Register & Pay
        </h2>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            required
            placeholder="Email"
            className="w-full p-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="text"
            required
            placeholder="WhatsApp Number"
            className="w-full p-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          />
        </div>

        <button
          disabled={loading}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Redirecting..." : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
}
