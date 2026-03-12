"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, AlertCircle } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing Nexea Web Academy & Agency, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services or enroll in our courses.",
  },
  {
    title: "2. Academy Enrollment & Access",
    content:
      "Course access is granted to a single user per purchase. Sharing account credentials or redistributing Nexea curriculum materials (videos, code snippets, PDFs) is strictly prohibited and will result in immediate termination of access without refund.",
  },
  {
    title: "3. Payments & Refunds (Academy)",
    content:
      "Our Frontend Development track is priced at ₦50,000 (Launch Offer). Due to the digital nature of our content, all sales are final. Refunds are only considered in cases of double-billing or technical failure on our end that prevents access for more than 72 hours.",
  },
  {
    title: "4. Agency Services & Projects",
    content:
      "Service projects require a 50% upfront deposit before work commences. The remaining balance is due upon project completion but before final deployment/handover. Nexea retains ownership of all code until final payment is received.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All content, including the 'Nexea' brand, logos, and educational frameworks, are the property of Nexea. Students are granted a limited license to use the code they build for their own portfolios but cannot resell our curriculum.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "Nexea provides education and services 'as is.' While we strive for 100% student success and high-performance websites, we do not guarantee specific employment outcomes or third-party API uptimes.",
  },
];

export default function TermsAndConditions() {
  return (
    <div className="bg-[#020617] min-h-screen text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl container mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-widest mb-6">
            <Scale size={14} /> Legal Framework
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Terms & <span className="text-orange-500">Conditions</span>
          </h1>
          <p className="text-slate-400">Last Updated: March 10, 2026</p>
        </motion.div>

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {sections.map((section, idx) => (
            <div key={idx} className="group">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-orange-500 text-sm font-mono">
                  0{idx + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-slate-400 leading-relaxed pl-8 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
                {section.content}
              </p>
            </div>
          ))}

          {/* WARNING BOX */}
          <div className="p-8 rounded-[2rem] bg-orange-600/5 border border-orange-600/20 mt-16">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-orange-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Important Notice</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  These terms are subject to change as Nexea evolves. We will
                  notify active students and clients via email regarding
                  significant updates. Continued use of the platform after
                  changes constitutes acceptance of the new terms.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER ACTION */}
        <div className="mt-20 text-center border-t border-white/5 pt-12">
          <p className="text-slate-500 text-sm mb-6">
            Have questions about our legal policies?
          </p>
          <a
            href="https://wa.me/2349030866613?text=Hello%20Nexea,%20I%20would%20like%20to%20contact%20the%20Legal%20Department%20for%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-orange-600 hover:text-white transition-all">
              Contact Legal Dept
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
