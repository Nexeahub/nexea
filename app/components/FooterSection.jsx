"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import FooterForm from "./FooterForm";

const socialLinks = [
  { Icon: Twitter, href: "https://twitter.com/nexea" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/salvation-amoke-6b89a7248",
  },
  { Icon: Instagram, href: "https://www.instagram.com/salv_web" },
  { Icon: Github, href: "https://github.com/salv20" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Glow for Launch Feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CONTACT & NEWSLETTER SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 border-b border-white/5 pb-20">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-widest mb-6">
              Official V1.0 Launch
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Ready to build <br /> with{" "}
              <span className="text-orange-500 italic">Nexea?</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Whether you&apos;re joining the Academy or hiring our Agency,
              let&apos;s start a conversation that changes your digital future.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-orange-500">
                  <Mail size={18} />
                </div>
                <span className="font-medium text-sm">nexeahub@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-orange-500">
                  <Phone size={18} />
                </div>
                <span className="font-medium text-sm">+234 903 086 6613</span>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-orange-500">
                  <MapPin size={18} />
                </div>
                <span className="font-medium text-sm">
                  Rivers, Nigeria • Remote Global
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
            <h4 className="text-xl font-bold text-white mb-2">
              Send us a message
            </h4>
            <p className="text-slate-400 text-sm mb-8">
              Response time: Usually within 2 hours.
            </p>

            <FooterForm />
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-orange-600 flex items-center justify-center text-white font-bold italic">
                N
              </div>
              <span className="text-xl font-black text-white tracking-tighter">
                NEXeA
              </span>
            </div>
            <p className="text-slate-500 text-xs text-center md:text-left">
              &copy; {currentYear} Nexea Web Academy & Agency. <br /> All rights
              reserved. Built with precision in Nigeria.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {/* {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))} */}

              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Link
                href="/terms"
                className="hover:text-orange-500 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
