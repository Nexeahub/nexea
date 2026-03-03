"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedHeroBox() {
  const beamVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 400,
      opacity: [0, 1, 1, 0],
      transition: {
        delay: 0.8,
        duration: 4,
        times: [0, 0.2, 0.8, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    }),
  };

  return (
    <div className="relative text-white overflow-hidden font-sans">
      <section className="relative flex flex-col items-center max-h-[400px] bg-orange-50/20 justify-center ">
        {/* THE HOLOGRAPHIC BEAM */}
        <motion.div
          variants={beamVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute bottom-[200px] w-[300px] z-0"
          style={{
            background:
              "linear-gradient(to top, rgba(234, 88, 12, 0.4) 0%, rgba(234, 88, 12, 0) 100%)",
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10 flex gap-6 mb-8">
          {[
            {
              label: "React",
              color: "from-blue-500/20",
              icon: "/images/react-logo.png",
            },
            {
              label: "Next",
              color: "from-white/20",
              icon: "/images/next-sphere.png",
            },
            {
              label: "Tailwind",
              color: "from-cyan-500/20",
              icon: "/images/tailwind-icon.png",
            },
            {
              label: "JavaScript",
              color: "from-purple-500/20",
              icon: "/images/js-icon.png",
            },
          ].map((asset, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                },
              }}
              className="flex flex-col items-center gap-4"
            >
              <div
                className={`w-10 h-10 md:w-20 md:h-20 rounded-3xl bg-gradient-to-b ${asset.color} to-transparent border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl relative group`}
              >
                <Image
                  src={asset.icon}
                  height={40}
                  width={40}
                  alt={asset.label}
                  className="relative z-10 rounded-xl"
                />
              </div>
              <span className="text-[10px] font-black tracking-[0.3px] text-orange-500/60 uppercase">
                {asset.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* THE QUANTUM VAULT (BOX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative w-64 h-48 md:w-80 md:h-56 z-20"
        >
          <div className="absolute inset-0 bg-slate-900 border-2 border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold italic shadow-[0_0_30px_rgba(234,88,12,0.4)]">
              N
            </div>
            <motion.div
              animate={{ y: [-100, 300] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[2px] bg-orange-500/20 blur-sm"
            />
          </div>

          <motion.div
            initial={{ x: "0%" }}
            whileInView={{
              x: ["0%", "-90%", "-90%", "0%"],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 4.5,
              times: [0, 0.2, 0.8, 1],
              ease: [0.45, 0, 0.55, 1],
              delay: 0.5,
            }}
            className="absolute inset-0 bg-slate-800 border-2 border-white/20 rounded-3xl z-30 shadow-2xl flex items-center justify-end px-4 overflow-hidden"
          >
            {/* --- ANIMATED DOT PATTERN LAYER --- */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ea580c 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              animate={{
                rotate: 360,
                scale: [1.4],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <div className="relative z-10 flex items-center w-full justify-center gap-2">
              <div className="h-8 w-8 rounded bg-orange-600 flex items-center justify-center text-white font-bold italic">
                N
              </div>
              <span className="text-xl font-bold tracking-tight">Nexa</span>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <div className="w-1 h-8 bg-white/10 rounded-full" />
              <div className="w-1 h-8 bg-white/10 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* GROUND ENERGY RING */}
        <div className="relative mt-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="m-2 border border-orange-500/20 rounded-full blur-xl"
            style={{ transform: "rotateX(85deg)" }}
          />
        </div>
      </section>
    </div>
  );
}
