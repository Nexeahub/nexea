"use client";
import { motion } from "framer-motion";
import AnimatedHeroBox from "./AnimatedHeroBox";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-orange-50/50 blur-[120px]" />

      <div className="mx-auto container grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 flex md:mx-auto lg:mx-0 items-center gap-2 w-fit rounded-full border border-orange-100 bg-orange-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
            </span>
            Nexa v1.0 is live
          </div>

          <h1 className="text-5xl md:text-center lg:text-left font-black leading-[1.1] tracking-tight text-slate-900 xl:text-6xl">
            Learn to Build <br />
            <span className="bg-gradient-to-r from-orange-600 to-rose-500 bg-clip-text text-transparent">
              Modern Websites
            </span>
            <br />— Or Let Us Build Yours
          </h1>

          <p className="mt-8 max-w-lg text-lg md:mx-auto lg:mx-0 leading-relaxed text-slate-600">
            Master real-world web development with hands-on lessons in
            <strong> React</strong>, <strong>Next.js</strong>,
            <strong> UI/UX</strong>, and <strong>deployment</strong>. Need a
            professional website instead? Our expert team can design and build
            it for you — fast, modern, and fully responsive.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 md:mx-auto lg:mx-0">
            <Link
              href="/#pricing"
              className="group relative cursor-pointer overflow-hidden rounded-full bg-slate-900 px-8 md:px-4 xl:px-8 py-4 font-bold text-white transition-all hover:bg-orange-600"
            >
              <span className="relative z-10">Start Learning</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>

            <Link
              href="/#solutions"
              className="flex items-center cursor-pointer justify-center gap-2 rounded-full border-2 border-slate-200 px-8 md:px-4 xl:px-8 py-4 font-bold text-slate-700 transition-all hover:border-slate-900 hover:bg-slate-50"
            >
              Hire Us to Build Your Site
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Social Proof / Trust Marks */}
          {/* <div className="mt-12 flex items-center gap-6 border-t border-slate-100 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"
                >
                  <div className="bg-slate-400 w-full h-full" />
                  image
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              Trusted by <span className="font-bold text-slate-900">500+</span>{" "}
              enterprise partners
            </p>
          </div> */}
        </motion.div>

        <div className="flex items-center justify-center relative">
          <AnimatedHeroBox />
        </div>
      </div>
    </section>
  );
}
