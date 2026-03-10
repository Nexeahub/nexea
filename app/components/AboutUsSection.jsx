"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Code2 className="text-orange-500" />,
    title: "Project-First Learning",
    description:
      "Forget dry theory. We build real-world SaaS applications from day one.",
  },
  {
    icon: <Users className="text-orange-500" />,
    title: "Expert Mentorship",
    description:
      "Learn directly from senior engineers who build for global enterprise clients.",
  },
  {
    icon: <Rocket className="text-orange-500" />,
    title: "Agency-Grade Standards",
    description:
      "We don't just teach code; we teach the professional workflow used in our own dev agency.",
  },
];

export default function AboutUsSection() {
  return (
    <section className="relative bg-[#020617] py-24 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-0 h-[500px] w-[500px] bg-orange-600/5 blur-[120px] rounded-full" />

      <div className="mx-auto container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Professional Image/Icon Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-64 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-8 flex flex-col justify-end shadow-2xl">
                <Award className="text-orange-500 w-10 h-10 mb-4" />
                <h4 className="text-white font-bold text-xl">
                  Industry Certified
                </h4>
                <p className="text-slate-400 text-sm">
                  Curriculum vetted by top CTOs.
                </p>
              </div>
              <div className="h-48 rounded-3xl bg-orange-600 p-8 flex flex-col justify-center text-white shadow-orange-900/20 shadow-2xl">
                <span className="text-4xl font-black italic">10k+</span>
                <p className="font-medium">Students Graduated</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 rounded-3xl bg-slate-800 border border-white/10 overflow-hidden relative group">
                {/* Minimalist Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ea580c 1px, transparent 1px)",
                    backgroundSize: "15px 15px",
                  }}
                />
                <div className="relative z-10 p-8">
                  <h4 className="text-white font-bold">24/7 Support</h4>
                  <p className="text-slate-400 text-sm">
                    Active developer community.
                  </p>
                </div>
              </div>
              <div className="h-64 rounded-3xl bg-gradient-to-t from-slate-900 to-slate-800 border border-white/10 p-8 flex flex-col justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"
                    />
                  ))}
                </div>
                <h4 className="text-white font-bold text-lg">
                  Hiring Partners
                </h4>
                <p className="text-slate-400 text-sm">
                  Direct pipeline to tech giants.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
              Our Mission
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Closing the gap between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
                Learning and Building.
              </span>
            </h3>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nexa was born from a simple observation: most bootcamps teach you
              how to code, but very few teach you how to ship. We operate as a
              hybrid **Development Academy & Full-Service Agency**, meaning our
              students learn the exact stack we use to build for our enterprise
              clients.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-xl shadow-orange-500/10"
            >
              Learn More About Nexa
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
