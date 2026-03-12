"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer:
      "Not at all. Our Frontend track is designed for absolute beginners. We start from the very basics of how the web works before moving into HTML, CSS, and JavaScript. All you need is a laptop and a hunger to learn.",
  },
  {
    question: "Can I take Frontend and Backend together?",
    answer:
      "While it's possible, we recommend mastering the Frontend first. Modern web development is vast, and focusing on one track allows you to build high-quality projects. However, our Full-Stack roadmap (coming soon) is designed to bridge both seamlessly.",
  },
  {
    question: "How long does it take to complete the training?",
    answer:
      "Our Frontend track is self-paced but structured to be completed in 10-12 weeks if you dedicate 10-15 hours a week. Since we focus on project-based learning, you'll have a professional portfolio by the time you finish.",
  },
  {
    question: "How much does it cost to build a website with Nexea Agency?",
    answer:
      "Every business is unique. Our starter professional sites begin at ₦150,000, while complex e-commerce or custom web apps are quoted based on features. Contact us for a free consultation and project roadmap.",
  },
  {
    question: "Will I get a certificate after the training?",
    answer:
      "Yes. Upon successful completion of all core projects and a final review by our senior engineers, you will receive a Nexea Verified Digital Certificate to showcase your skills to employers.",
  },
];

export default function FAQSection() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-4">
            <HelpCircle size={14} /> Support Center
          </div>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">
            Got Questions? <br />
            <span className="text-orange-600">We’ve Got Answers.</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-3xl border transition-all duration-300 ${
                activeIdx === i
                  ? "border-orange-200 bg-orange-50/30"
                  : "border-slate-100 bg-white"
              }`}
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`font-bold transition-colors ${activeIdx === i ? "text-orange-600" : "text-slate-900"}`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-1 rounded-full transition-all ${activeIdx === i ? "bg-orange-600 text-white rotate-180" : "bg-slate-100 text-slate-400"}`}
                >
                  {activeIdx === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-orange-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-[2rem] bg-slate-900 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-slate-400 text-sm mb-4">
              Still have questions about the ₦50,000 launch offer?
            </p>
            <a
              href="https://wa.me/2349030866613?text=Hello%20Nexea,%20I%20would%20like%20to%20make%20more%20enquiries%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-orange-500 font-bold hover:underline underline-offset-8">
                Chat with a Founder on WhatsApp →
              </button>
            </a>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
