"use client";

import { motion } from "framer-motion";

export default function LearnSection() {
  const points = [
    "HTML, CSS & JavaScript Basics",
    "Responsive Web Design",
    "React & Next.js Fundamentals",
    "Backend with Node.js & MongoDB",
    "Build Real Projects & Portfolio",
  ];

  return (
    <section id="learn" className="py-20 bg-gray-100 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-900"
      >
        What You’ll Learn
      </motion.h2>

      <div className="mt-10 max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <p className="text-gray-700 font-semibold">{point}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
