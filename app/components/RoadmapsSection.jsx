"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Server, Layers, ChevronRight } from "lucide-react";

const roadmaps = [
  {
    title: "Frontend Path",
    icon: <Globe className="w-5 h-5" />,
    color: "blue",
    steps: [
      "HTML5 & Semantic Web",
      "CSS3 & Tailwind Layouts",
      "Modern JavaScript (ES6+)",
      "React Components & Hooks",
      "Final: Portfolio Deployment",
    ],
    status: "Active",
  },
  {
    title: "Backend Path",
    icon: <Server className="w-5 h-5" />,
    color: "emerald",
    steps: [
      "Node.js Runtime",
      "Express Framework",
      "NoSQL with MongoDB",
      "JWT Authentication",
      "Final: Scalable API Shop",
    ],
    status: "Locked",
  },
  {
    title: "Full-Stack Mastery",
    icon: <Layers className="w-5 h-5" />,
    color: "orange",
    steps: [
      "Advanced Frontend",
      "Robust Backend",
      "State Management",
      "CI/CD & DevOps",
      "Final: Enterprise SaaS",
    ],
    status: "Locked",
  },
];

export default function RoadmapsSection() {
  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2">
              The Blueprint
            </h2>
            <h3 className="text-4xl font-black text-white">
              Your Path to Mastery
            </h3>
          </div>
          <p className="text-slate-400 text-sm md:text-right max-w-xs">
            A structured, industry-vetted sequence designed to take you from a
            curious beginner to a professional engineer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {roadmaps.map((route, routeIdx) => (
            <div
              key={routeIdx}
              className={`relative ${route.status === "Locked" ? "opacity-40" : ""}`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-slate-900 border border-white/10 text-orange-500">
                  {route.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{route.title}</h4>
              </div>

              {/* THE ROADMAP LINE */}
              <div className="space-y-0 relative">
                {route.steps.map((step, stepIdx) => (
                  <motion.div
                    key={stepIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: stepIdx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    {/* Vertical Connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${route.status === "Active" ? "border-orange-500 bg-orange-500" : "border-slate-700 bg-slate-800"} z-10`}
                      />
                      {stepIdx !== route.steps.length - 1 && (
                        <div className="w-[2px] h-16 bg-slate-800 group-hover:bg-orange-500/30 transition-colors" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="pt-0.5">
                      <p
                        className={`text-sm font-semibold ${route.status === "Active" ? "text-slate-200" : "text-slate-500"}`}
                      >
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {route.status === "Locked" && (
                <div className="absolute top-20 left-0 right-0 text-center pointer-events-none">
                  <span className="bg-slate-800 text-[10px] text-white px-3 py-1 rounded-full border border-white/10 font-bold uppercase tracking-widest">
                    Curriculum Pending
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
