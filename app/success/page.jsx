"use client";

import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-5">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-green-600"
      >
        Payment Successful 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-gray-600 text-lg"
      >
        Thank you for registering! We will contact you shortly.
      </motion.p>
    </div>
  );
}
