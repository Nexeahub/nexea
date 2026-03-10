"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingBag,
  Smartphone,
  Settings,
  Palette,
  Rocket,
  MessageSquare,
  FileCode,
  Send,
} from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-5 h-5 text-orange-500" />,
    title: "Business Websites",
    desc: "Professional corporate presence.",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-orange-500" />,
    title: "E-commerce Systems",
    desc: "Full-scale online stores.",
  },
  {
    icon: <Palette className="w-5 h-5 text-orange-500" />,
    title: "UX/UI Design",
    desc: "Modern, high-conversion interfaces.",
  },
  {
    icon: <FileCode className="w-5 h-5 text-orange-500" />,
    title: "Custom Web Apps",
    desc: "Bespoke software solutions.",
  },
];

const steps = [
  { title: "Consult", icon: <MessageSquare /> },
  { title: "Design", icon: <Palette /> },
  { title: "Build", icon: <FileCode /> },
  { title: "Deploy", icon: <Send /> },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 px-6 text-slate-900">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT: CONTENT & PROCESS */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-4">
              Agency Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6">
              You Dream it. <br />
              <span className="text-orange-600 italic">We Build it.</span>
            </h3>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Beyond the academy, Nexa operates as a world-class development
              agency. We take your vision and turn it into a high-performance
              digital reality.
            </p>

            {/* THE PROCESS FLOW */}
            <div className="grid grid-cols-4 gap-2 mb-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group hover:border-orange-200 hover:text-orange-500 transition-all">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-slate-400 text-sm">Starting from</p>
                <p className="text-2xl font-black">Custom Pricing</p>
              </div>
              <a
                href="https://wa.me/2349030866613?text=Hello%20Nexa,%20I%20would%20like%20to%20build%20a%20website%20and%20get%20more%20details%20about%20your%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-500 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20 text-center"
              >
                Build My Website
              </a>
            </div>
          </div>

          {/* RIGHT: BENTO GRID OF SERVICES */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="mb-6 p-3 w-fit rounded-2xl bg-white shadow-sm">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}

            {/* MINI PORTFOLIO CTA CARD */}
            <motion.div
              className="sm:col-span-2 p-8 rounded-[2rem] bg-gradient-to-br from-orange-50 to-white border border-orange-100 flex items-center justify-between overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <h4 className="text-xl font-black text-orange-900 mb-1">
                  View our Work
                </h4>
                <p className="text-orange-700/70 text-sm">
                  Explore our agency portfolio of 50+ launched sites.
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-600 flex items-center justify-center text-white relative z-10">
                <Rocket className="w-5 h-5" />
              </div>
              {/* Decorative Circle */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
