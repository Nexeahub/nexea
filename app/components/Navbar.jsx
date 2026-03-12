"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Portfolio", href: "/#portfolio" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-orange-600 flex items-center justify-center text-white font-bold italic">
            N
          </div>
          <span className="text-xl font-bold tracking-tight">Nexea</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-orange-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/register"
            className="hidden cursor-pointer sm:block rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
          >
            Register
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="overflow-hidden md:hidden bg-white border-t border-slate-100"
          >
            <div className="flex flex-col gap-4 px-6 py-6 font-medium text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg hover:text-orange-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/register"
                onClick={() => setIsOpen(!isOpen)}
                className="mt-2 w-full text-center cursor-pointer rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white"
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
