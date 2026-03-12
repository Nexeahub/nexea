"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundClient() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-2xl w-full text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 -mt-4 md:-mt-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Lost in the Digital Void?
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            The page you&apos;re looking for has been moved, deleted, or never
            existed in this dimension.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/20 active:scale-95"
          >
            <Home size={18} />
            Back to Reality
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-white/5 hover:border-white/20 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-2 text-slate-500 text-sm font-medium tracking-widest uppercase"
        >
          <div className="h-px w-8 bg-slate-800" />
          Nexea Tech Academy
          <div className="h-px w-8 bg-slate-800" />
        </motion.div>
      </div>
    </div>
  );
}
