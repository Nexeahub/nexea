"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Check,
  Discord,
  Calendar,
  ArrowRight,
  Sparkles,
  Twitter,
  AlertCircle,
} from "lucide-react";
import AdmissionReceipt from "../components/AdmissionReceipt";
import Link from "next/link";

export default function SuccessPage() {
  const [registration, setRegistration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchRegistration = async () => {
      const params = new URLSearchParams(window.location.search);

      const paystackRef = params.get("reference");

      if (!paystackRef) {
        console.error("No reference found in URL");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Pass the paystackRef to your API
        const res = await fetch(`/api/registration?ref=${paystackRef}`);
        const data = await res.json();

        if (data.success) {
          setRegistration(data.data);
        } else {
          console.error(
            "Registration not found in DB for this ref:",
            paystackRef,
          );
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistration();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Pulsing Logo placeholder */}
          <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center font-black text-2xl italic mb-8 animate-bounce shadow-[0_0_30px_rgba(234,88,12,0.3)]">
            N
          </div>

          <h2 className="text-xl font-bold tracking-tight mb-2">
            Securing your spot...
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Verifying payment with Paystack
          </p>

          {/* Shimmering Progress Bar */}
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    );
  if (!registration || error)
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl text-center"
        >
          <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
            <AlertCircle size={40} />
          </div>

          <h2 className="text-2xl font-black tracking-tight text-white mb-4">
            Session Not Found
          </h2>

          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            We couldn&apos;t retrieve your enrollment details. This usually
            happens if the payment reference is invalid or the session expired.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors"
            >
              Retry Connection
            </button>

            <Link
              href="/"
              className="block w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
            >
              Back to Homepage
            </Link>
          </div>

          {error && (
            <p className="mt-6 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
              Error Code: {error}
            </p>
          )}
        </motion.div>
      </div>
    );
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
            Welcome to Nexa,&nbsp;
            <span className="text-orange-500 italic">{registration.name}</span>
            . You&apos;re officially enrolled in the <br />
            <span className="text-white font-bold">
              Frontend Founding Cohort (V1.0).
            </span>
          </p>

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
                <p className="font-mono text-xs text-slate-300 uppercase">
                  NX-{new Date(registration.createdAt).getFullYear()}-
                  {registration._id.toString().slice(-4)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                  Onboarding
                </p>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Calendar size={16} className="text-orange-500" /> May 4, 2026
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

            <div className="max-w-md mx-auto w-full">
              <AdmissionReceipt registration={registration} />
            </div>
          </motion.div>

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
