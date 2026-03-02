"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const plans = [
    {
      title: "Basic Website",
      price: "₦50,000",
      desc: ["1–3 Pages", "Mobile Responsive", "Basic SEO", "Fast Delivery"],
      whatsapp:
        "https://wa.me/2348100000000?text=Hi%2C%20I'm%20interested%20in%20the%20Basic%20Website%20plan",
    },
    {
      title: "Standard Website",
      price: "₦120,000",
      desc: [
        "3–6 Pages",
        "Custom Design",
        "SEO Optimized",
        "Blog Integration",
        "Fast Delivery",
      ],
      whatsapp:
        "https://wa.me/2348100000000?text=Hi%2C%20I'm%20interested%20in%20the%20Standard%20Website%20plan",
      featured: true,
    },
    {
      title: "Premium Website",
      price: "₦180,000+",
      desc: [
        "Unlimited Pages",
        "Premium UI/UX",
        "Custom Dashboard",
        "API Integrations",
        "Priority Support",
      ],
      whatsapp:
        "https://wa.me/2348100000000?text=Hi%2C%20I'm%20interested%20in%20the%20Premium%20Website%20plan",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-900"
      >
        Website Development Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
      >
        Choose a plan that suits your business. Get a modern website delivered
        fast!
      </motion.p>

      <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + idx * 0.1 }}
            className={`border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition ${plan.featured ? "bg-blue-50" : "bg-white"}`}
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {plan.title}
            </h3>
            <p className="text-gray-500 mt-2">Plan Description</p>
            <p className="mt-6 text-4xl font-bold text-blue-600">
              {plan.price}
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              {plan.desc.map((d, i) => (
                <li key={i}>✓ {d}</li>
              ))}
            </ul>
            <a
              href={plan.whatsapp}
              target="_blank"
              className="block w-full text-center mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Contact on WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
