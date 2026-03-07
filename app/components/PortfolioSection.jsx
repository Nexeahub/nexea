"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Smartphone, Code2 } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "SkyLine E-Commerce",
    desc: "A high-performance fashion storefront with real-time inventory and Naira payment integration.",
    image: "/portfolio/ecommerce.jpg", // Replace with your actual screenshot path
    tech: ["Next.js", "Tailwind", "Paystack", "MongoDB"],
    live: "https://skyline.nexa.dev",
    github: "https://github.com/nexa/skyline",
    category: "Full-Stack",
  },
  {
    name: "FinTrack Dashboard",
    desc: "A complex data visualization tool for small businesses to track daily expenses and revenue.",
    image: "/portfolio/dashboard.jpg",
    tech: ["React", "Chart.js", "Firebase", "TypeScript"],
    live: "https://fintrack.nexa.dev",
    github: "https://github.com/nexa/fintrack",
    category: "Frontend",
  },
  {
    name: "Luxe Real Estate",
    desc: "A premium landing page for property listings with advanced filtering and map integration.",
    image: "/portfolio/realestate.jpg",
    tech: ["HTML5", "Sass", "JavaScript", "GSAP"],
    live: "https://luxe.nexa.dev",
    github: "https://github.com/nexa/luxe",
    category: "Landing Page",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-3">
              Our Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Crafted with <span className="text-orange-600">Precision.</span>
            </h3>
            <p className="mt-4 text-slate-500">
              From student capstones to enterprise-grade applications, see how
              we translate code into business value.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              <Monitor className="w-3 h-3" /> Fully Responsive
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-200 mb-6">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="px-2">
                <div className="flex items-center gap-2 mb-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2 flex items-center gap-2">
                  {project.name}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors"
                >
                  View Case Study <Code2 className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
