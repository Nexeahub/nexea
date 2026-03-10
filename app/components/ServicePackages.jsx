"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, ShieldCheck } from "lucide-react";

const packages = [
  {
    name: "Starter Launch",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    price: "₦150k - 250k",
    desc: "Perfect for startups and personal brands needing a high-impact presence.",
    features: [
      "5 Page Responsive Website",
      "Custom UI/UX Design",
      "SEO Optimization",
      "Contact Form Integration",
      "1 Month Free Support",
    ],
    highlight: false,
  },
  {
    name: "Business Growth",
    icon: <Crown className="w-6 h-6 text-orange-500" />,
    price: "₦400k - 750k",
    desc: "For established businesses looking to scale their operations online.",
    features: [
      "Up to 15 Custom Pages",
      "E-commerce / Payment Setup",
      "CMS (Content Management)",
      "Speed & Performance Tuning",
      "3 Months Maintenance",
    ],
    highlight: true, // This will be the "Recommended" card
  },
  {
    name: "Enterprise Custom",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    price: "Custom Quote",
    desc: "Bespoke web applications and complex systems built from scratch.",
    features: [
      "Unlimited Custom Features",
      "Advanced Web App Logic",
      "API & Database Integration",
      "Dedicated Project Manager",
      "Priority 24/7 Support",
    ],
    highlight: false,
  },
];

export default function ServicePackages() {
  return (
    <div id="solutions" className="mt-20 container mx-auto px-6">
      <div className="text-center mb-12">
        <h4 className="text-2xl font-black text-slate-900 tracking-tight">
          Standard Service Packages
        </h4>
        <p className="text-slate-500 text-sm mt-2">
          Transparent pricing for world-class digital products.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className={`relative p-8 rounded-[2.5rem] border-2 transition-all ${
              pkg.highlight
                ? "border-orange-500 bg-white shadow-2xl shadow-orange-100"
                : "border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200"
            }`}
          >
            {pkg.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                Most Popular
              </span>
            )}

            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                {pkg.icon}
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Starts at
                </span>
                <span className="text-xl font-black text-slate-900">
                  {pkg.price}
                </span>
              </div>
            </div>

            <h5 className="text-xl font-bold text-slate-900 mb-3">
              {pkg.name}
            </h5>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              {pkg.desc}
            </p>

            <ul className="space-y-4 mb-10">
              {pkg.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check
                      className="w-2.5 h-2.5 text-emerald-600"
                      strokeWidth={4}
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-2xl font-bold transition-all ${
                pkg.highlight
                  ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-200"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
