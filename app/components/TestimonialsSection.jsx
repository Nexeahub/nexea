"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Rocket, UserCheck, ShieldCheck } from "lucide-react";

const clientProof = [
  {
    name: "Mensah P.",
    role: "Business Owner",
    content:
      "I hired the Nexa team to build my football academy portal. Not only did they deliver a fast site, but they explained the tech so clearly that I actually understood my own platform. They are natural teachers.",
    label: "Agency Client",
  },
  {
    name: "Princess P.",
    role: "Startup Founder",
    content:
      "The way Nexa handles code is different. They don't just 'fix' things; they show you why they work. If they are teaching now, you'd be crazy not to join.",
    label: "Early Partner",
  },
];

const betaStudent = {
  name: "Junior Developer",
  role: "Beta Access Student",
  content:
    "I was one of the first to see the Nexa Frontend curriculum. The 'Project-First' method is exactly what's missing in other courses. It's intense but worth every Naira.",
  label: "Beta Learner",
};

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">
              <Rocket className="w-4 h-4" /> The Founding Launch
            </div>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter">
              Trusted by clients. <br /> Built for{" "}
              <span className="text-orange-600">Future Devs.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-sm max-w-xs md:text-right">
            We&apos;ve spent years building professional products. Now,
            we&apos;re opening the doors to show you how we do it.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* CLIENT REVIEWS (Since you have experience here) */}
          {clientProof.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 italic">
                &apos;{review.content}&apos;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">
                    {review.name}
                  </h5>
                  <span className="text-[10px] font-black uppercase text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                    {review.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* THE BETA STUDENT (The 'First Student' Proof) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl border-t-4 border-orange-600 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-orange-500/20">
              <Quote size={60} />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-orange-500 text-[10px] font-black uppercase tracking-widest mb-6">
                <ShieldCheck className="w-3 h-3" /> Curriculum Vetted
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                &apos;{betaStudent.content}&apos;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-orange-500">
                  N
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">
                    {betaStudent.name}
                  </h5>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    {betaStudent.label}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
