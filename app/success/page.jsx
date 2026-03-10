"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Check,
  Discord,
  Calendar,
  ArrowRight,
  Copy,
  Sparkles,
  Download,
  Twitter,
} from "lucide-react";

export default function SuccessPage() {
  // Trigger confetti on mount
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ea580c", "#ffffff"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ea580c", "#ffffff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          {/* Animated Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, delay: 0.2 }}
            className="w-24 h-24 bg-orange-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(234,88,12,0.4)]"
          >
            <Check size={48} strokeWidth={4} />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Payment <span className="text-orange-500 italic">Confirmed!</span>
          </h1>
          <p className="text-slate-400 text-lg mb-12">
            Welcome to Nexa, Pioneer. You&apos;re officially enrolled in the{" "}
            <br />
            <span className="text-white font-bold">
              Frontend Founding Cohort (V1.0).
            </span>
          </p>

          {/* THE MEMBER TICKET / ID CARD */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[2.5rem] p-8 mb-12 relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Sparkles size={120} />
            </div>

            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-1">
                  Student Status
                </p>
                <h3 className="text-2xl font-black italic">FOUNDING MEMBER</h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                  Receipt ID
                </p>
                <p className="font-mono text-xs text-slate-300">NX-2026-0042</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                  Onboarding
                </p>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Calendar size={16} className="text-orange-500" /> March 25,
                  2026
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                  Access Level
                </p>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Check size={16} className="text-emerald-500" /> Full
                  Curriculum
                </div>
              </div>
            </div>

            <button className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">
              <Download size={14} /> Download Admissions Receipt
            </button>
          </motion.div>

          {/* NEXT STEPS */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.gg/your-link"
              className="flex items-center justify-center gap-3 bg-[#5865F2] py-4 rounded-2xl font-bold shadow-lg shadow-indigo-900/20"
            >
              Join Private Discord <ArrowRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(29, 155, 240, 0.1)",
                borderColor: "rgba(29, 155, 240, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              href="https://twitter.gg/your-link"
              className="relative flex items-center justify-center gap-3 bg-slate-900/50 backdrop-blur-md py-4 px-8 rounded-2xl font-bold border border-white/10 group overflow-hidden transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <Twitter
                size={18}
                className="text-[#1D9BF0] group-hover:animate-bounce"
              />

              <span className="text-slate-200 group-hover:text-white transition-colors">
                Follow the Journey
              </span>

              <ArrowRight
                size={18}
                className="text-slate-500 group-hover:text-[#1D9BF0] group-hover:translate-x-1 transition-all"
              />
            </motion.a>
          </div>

          <p className="mt-12 text-slate-500 text-xs italic">
            A confirmation email has been sent to your inbox. Check your
            &quot;Promotions&quot; folder if you don&apos;t see it!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
