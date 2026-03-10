"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Lock, Globe, Database, UserCheck } from "lucide-react";

const privacySections = [
  {
    title: "Information We Collect",
    icon: <Database className="text-orange-500" size={20} />,
    content:
      "We collect information you provide directly to us, such as your name, email address, and billing information when you enroll in a course or request agency services. We also collect technical data like your IP address and browser type to improve site performance.",
  },
  {
    title: "How We Use Your Data",
    icon: <Eye className="text-orange-500" size={20} />,
    content:
      "Your data allows us to provide personalized learning experiences, process payments, and send important course updates. For agency clients, we use your information to communicate project milestones and provide technical support.",
  },
  {
    title: "Payment Security",
    icon: <Lock className="text-orange-500" size={20} />,
    content:
      "We do not store your credit card details on our servers. All payments are processed through secure, PCI-compliant third-party gateways (e.g., Paystack). Your financial data is encrypted and handled exclusively by these providers.",
  },
  {
    title: "Third-Party Sharing",
    icon: <Globe className="text-orange-500" size={20} />,
    content:
      "Nexa does not sell your personal data. We only share information with essential service providers (like email hosting or cloud storage) that help us run the academy and agency, all of whom are committed to data protection.",
  },
  {
    title: "Your Rights",
    icon: <UserCheck className="text-orange-500" size={20} />,
    content:
      "You have the right to access, correct, or request the deletion of your personal information at any time. Simply reach out to our support team via email to manage your data preferences.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#020617] min-h-screen text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <Lock size={14} /> Data Protection
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-slate-400">
            Protecting your digital footprint at Nexa.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid gap-8">
          {privacySections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-orange-500/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-slate-800 border border-white/10 group-hover:bg-orange-500/10 transition-colors">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed pl-2">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* COOKIE NOTICE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-[#020617] border border-white/10 text-center"
        >
          <h3 className="text-lg font-bold mb-2">Cookies & Analytics</h3>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We use cookies to understand how you interact with Nexa. This helps
            us optimize our curriculum and agency workflows. By using our site,
            you consent to our use of these essential tracking tools.
          </p>
        </motion.div>

        {/* CONTACT FOOTER */}
        <div className="mt-20 text-center border-t border-white/5 pt-12">
          <p className="text-slate-500 text-sm">Questions about your data?</p>
          <a
            href="mailto:seansalvation@gmail.com"
            className="text-orange-500 font-bold hover:underline underline-offset-8 mt-2 inline-block"
          >
            privacy@nexa.academy
          </a>
        </div>
      </div>
    </div>
  );
}
