"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chinonso",
      text: "The academy helped me build real projects and land my first freelance job!",
    },
    {
      name: "Amaka",
      text: "I learned web development step by step. Easy to follow and practical.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-900"
      >
        Testimonials
      </motion.h2>

      <div className="mt-10 max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <p className="text-gray-700">&quot;{t.text}&quot;</p>
            <p className="mt-4 font-semibold text-gray-800">- {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
