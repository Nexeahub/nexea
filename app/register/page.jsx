// "use client";

// import { useState } from "react";

// export default function RegisterPage() {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     whatsapp: "",
//   });

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/checkout", {
//       method: "POST",
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     window.location.href = data.authorization_url; // redirect to Paystack
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md"
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           Register & Pay
//         </h2>

//         <div className="mt-6 space-y-4">
//           <input
//             type="text"
//             required
//             placeholder="Full Name"
//             className="w-full p-3 rounded-lg border"
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />

//           <input
//             type="email"
//             required
//             placeholder="Email"
//             className="w-full p-3 rounded-lg border"
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />

//           <input
//             type="text"
//             required
//             placeholder="WhatsApp Number"
//             className="w-full p-3 rounded-lg border"
//             onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
//           />
//         </div>

//         <button
//           disabled={loading}
//           className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
//         >
//           {loading ? "Redirecting..." : "Proceed to Payment"}
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function RegistrationPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState({});

  // Hardcoded Track Data
  const track = {
    name: "Frontend Development",
    cohort: "Founding Cohort (V1.0)",
    price: 50000,
    currency: "₦",
  };

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

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
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
              Join the Nexa founding cohort. Fill in your details to proceed to
              payment.
            </p>
          </div>

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
                    placeholder="John Doe"
                    className={`w-full bg-slate-900/50 border ${errors.name ? "border-red-500" : "border-white/10"} rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-orange-500 transition-all`}
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
              className="w-full bg-orange-600 hover:bg-orange-500 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/20 active:scale-[0.98]"
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
                <h2 className="text-xl font-bold">{track.name}</h2>
              </div>
            </div>

            <div className="space-y-4 border-y border-white/5 py-8 mb-8 border-dashed">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Cohort</span>
                <span className="font-bold">{track.cohort}</span>
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
                  {track.currency}
                  {track.price.toLocaleString()}
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
