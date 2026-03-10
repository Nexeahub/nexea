"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Lock, ArrowRight, Zap, Database, Globe } from "lucide-react";
import Link from "next/link";

const tracks = [
  {
    title: "Frontend Development",
    id: "frontend",
    status: "active",
    price: "₦50,000",
    color: "blue",
    icon: <Globe className="text-blue-500" />,
    description:
      "Master the art of building stunning, responsive user interfaces.",
    learn: [
      "HTML5, CSS3, Tailwind CSS",
      "JavaScript & DOM",
      "React.js",
      "Responsive Design",
      "Git & GitHub",
    ],
    projects: ["Portfolio Website", "Landing Page", "Dashboard UI"],
    benefits: [
      "Professional Certificate",
      "5–10 Real Projects",
      "Community Access",
      "Code Reviews",
    ],
    buttonText: "Start Frontend Training",
  },
  {
    title: "Backend Development",
    id: "backend",
    status: "locked",
    price: "₦XX,XXX",
    color: "emerald",
    icon: <Database className="text-emerald-500" />,
    description: "Build the engines that power the modern web.",
    learn: [
      "Node.js & Express.js",
      "MongoDB / Mongoose",
      "REST APIs",
      "Auth & Security",
    ],
    projects: ["User Auth System", "Blog API", "E-commerce Backend"],
    benefits: [
      "Professional Certificate",
      "GitHub Workflow",
      "Real Backend Projects",
      "1-on-1 Mentorship",
    ],
    buttonText: "Join Waitlist",
  },
  {
    title: "Full-Stack Development",
    id: "fullstack",
    status: "locked",
    price: "₦XX,XXX",
    color: "orange",
    icon: <Zap className="text-orange-500" />,
    description: "The complete journey from design to deployment.",
    learn: [
      "Everything in Frontend",
      "Everything in Backend",
      "API Integration",
      "Vercel / Render Deployment",
    ],
    projects: ["Full E-commerce Site", "Social Platform", "Admin Dashboard"],
    benefits: [
      "Gold Certificate",
      "4–6 Major World Projects",
      "Portfolio Review",
      "Job Placement Support",
    ],
    buttonText: "Notify Me",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#020617] py-24 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Choose Your <span className="text-orange-500">Learning Path</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Learn at your own pace. Pick the plan that fits your goals — from
            crafting beautiful UIs to architecting complex systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative group rounded-3xl border-2 transition-all duration-500 ${
                track.status === "active"
                  ? "bg-slate-900/40 border-slate-800 hover:border-orange-500/50 shadow-2xl"
                  : "bg-slate-950/20 border-white/5 grayscale opacity-75"
              }`}
            >
              {/* Locked Overlay */}
              {track.status === "locked" && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#020617]/40 rounded-3xl backdrop-blur-[2px]">
                  <div className="bg-white/10 p-4 rounded-full border border-white/10 mb-2">
                    <Lock className="text-white w-6 h-6" />
                  </div>
                  <span className="text-white font-bold uppercase tracking-widest text-xs">
                    Coming Soon
                  </span>
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-3 rounded-2xl bg-slate-800 border border-white/5`}
                  >
                    {track.icon}
                  </div>
                  <span className="text-2xl font-black text-white">
                    {track.price}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {track.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  {track.description}
                </p>

                <div className="space-y-6 mb-8">
                  {/* Curriculum */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">
                      Curriculum
                    </h4>
                    <ul className="space-y-2">
                      {track.learn.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-slate-300 text-sm"
                        >
                          <Check className="w-4 h-4 text-slate-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-3">
                      Key Projects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {track.projects.map((proj, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="pt-6 border-t border-white/5 mb-8">
                  <ul className="space-y-2">
                    {track.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-slate-400 text-xs italic"
                      >
                        <div className="w-1 h-1 bg-orange-500 rounded-full" />{" "}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {track.status === "active" ? (
                  <Link href="/register">
                    <button className="w-full py-4 cursor-pointer rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-white text-black hover:bg-orange-600 hover:text-white">
                      {track.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-800 text-slate-500 cursor-not-allowed"
                  >
                    {track.buttonText}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Interested in installments or group discounts?{" "}
            <a
              href="https://wa.me/2349030866613?text=Hello%20Nexa,%20I%20would%20like%20to%20make%20enquiries%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline underline-offset-4"
            >
              Contact Admissions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
