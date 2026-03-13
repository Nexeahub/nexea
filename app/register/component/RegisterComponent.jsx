"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  Globe,
} from "lucide-react";

export default function RegisterComponent() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState({});

  // Hardcoded Track Data
  const tracks = [
    {
      name: "Frontend Development",
      cohort: "Founding Cohort (V1.0)",
      price: 50000,
      currency: "₦",
      selectable: true,
    },
    {
      name: "Backend Development",
      cohort: "Founding Cohort (V1.0)",
      price: "XX,XXX",
      currency: "₦",
      selectable: false,
    },
    {
      name: "Fullstack Development",
      cohort: "Founding Cohort (V1.0)",
      price: "XX,XXX",
      currency: "₦",
      selectable: false,
    },
  ];

  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (formData.whatsapp.length < 10)
      newErrors.whatsapp = "Enter a valid WhatsApp number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProcess = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    console.log(formData);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, track: selectedTrack }),
      });

      if (!res.ok) {
        throw new Error("Failed to process payment");
      }

      const data = await res.json();

      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white py-20 px-6 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-2xl lg:max-w-5xl container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: THE FORM */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">
              Secure Your Spot
            </h1>
            <p className="text-slate-400">
              Join the Nexea founding cohort. Fill in your details to proceed to
              payment.
            </p>
          </div>

          {/*  */}

          <div className="space-y-4">
            <label className="text-xs font-bold uppercase text-slate-500 ml-1 mb-2 block">
              Select Track
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tracks.map((track, i) => (
                <button
                  key={i}
                  type="button"
                  disabled={!track.selectable}
                  onClick={() => track.selectable && setSelectedTrack(track)}
                  className={`
                    rounded-2xl p-4 border transition-all
                    ${track.selectable ? "hover:border-orange-500 cursor-pointer" : "opacity-50 cursor-not-allowed"}
                    ${selectedTrack.name === track.name ? "border-orange-500 bg-orange-600/10" : "border-white/10"}
                  `}
                >
                  <h3 className="font-bold text-sm">{track.name}</h3>
                  <p className="text-[10px] text-slate-400">{track.cohort}</p>
                  <p className="text-xs font-black mt-2">
                    {track.currency}
                    {track.price.toLocaleString()}
                  </p>
                  {!track.selectable && (
                    <span className="text-[10px] text-red-500 mt-1 block">
                      Not Available
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/*  */}
          <form onSubmit={handleProcess} className="space-y-6">
            <div className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className={`w-full capitalize bg-slate-900/50 border ${errors.name ? "border-red-500" : "border-white/10"} rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-orange-500 transition-all`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full bg-slate-900/50 border ${errors.email ? "border-red-500" : "border-white/10"} rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-orange-500 transition-all`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* WhatsApp Input */}
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0801 234 5678"
                    className={`w-full bg-slate-900/50 border ${errors.whatsapp ? "border-red-500" : "border-white/10"} rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-orange-500 transition-all`}
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                  />
                </div>
                {errors.whatsapp && (
                  <span className="text-red-500 text-xs mt-1 ml-1">
                    {errors.whatsapp}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-orange-600 hover:bg-orange-500 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/20 active:scale-[0.98]"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Proceed to Payment <ArrowRight size={20} />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
              <ShieldCheck size={14} className="text-emerald-500" /> Secure
              Payment via Paystack
            </div>
          </form>
        </motion.div>

        {/* RIGHT: THE SUMMARY TICKET */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            {/* Decorative Ticket Notch */}
            <div className="absolute top-1/2 -left-4 w-8 h-8 bg-[#020617] rounded-full -translate-y-1/2 border-r border-white/10" />
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#020617] rounded-full -translate-y-1/2 border-l border-white/10" />

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-600/20 rounded-2xl text-orange-500">
                <Globe size={24} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-orange-500 tracking-widest">
                  Selected Track
                </span>
                <h2 className="text-xl font-bold">{selectedTrack.name}</h2>
              </div>
            </div>

            <div className="space-y-4 border-y border-white/5 py-8 mb-8 border-dashed">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Cohort</span>
                <span className="font-bold">{selectedTrack.cohort}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Duration</span>
                <span className="font-bold">12 Weeks</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Platform Access</span>
                <span className="font-bold text-emerald-500">Lifetime</span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase">
                  Grand Total
                </span>
                <p className="text-4xl font-black italic">
                  {selectedTrack.currency}
                  {selectedTrack.price.toLocaleString()}
                </p>
              </div>
              <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                <span className="text-[10px] font-bold text-slate-400">
                  V1.0 SPECIAL
                </span>
              </div>
            </div>
          </div>

          {/* Quick Perks */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "24/7 Mentor Support",
              "Private Discord",
              "Hiring Network",
              "Project Reviews",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-slate-400"
              >
                <CheckCircle2 size={14} className="text-orange-500" /> {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
