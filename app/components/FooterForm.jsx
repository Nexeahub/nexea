"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  RefreshCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FooterForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const emailRegex = /^\S+@\S+\.\S+$/;
  const isNameValid = values.name.trim().length > 0;
  const isEmailValid = emailRegex.test(values.email);
  const isMessageValid = values.message.trim().length >= 5;
  const canSubmit = isNameValid && isEmailValid && isMessageValid;

  const handleChange = (e) => {
    if (error) setError("");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // sendForm automatically maps input 'name' attributes to {{tags}} in your template
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
      );
      setSuccess(true);
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setError(
        `Failed to send message: ${err.text || "Please try again later."}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 min-h-[300px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            ref={form}
            className="space-y-4"
            onSubmit={sendEmail}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-slate-500 px-1">
                  <span>Name</span>
                  {!isNameValid && values.name && (
                    <span className="text-orange-500">Required</span>
                  )}
                </div>
                <input
                  name="name" // Matches {{name}} in template
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full capitalize bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-slate-500 px-1">
                  <span>Email</span>
                  {!isEmailValid && values.email && (
                    <span className="text-orange-500">Invalid</span>
                  )}
                </div>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-slate-500 px-1">
                <span>Message</span>
                <span
                  className={
                    isMessageValid ? "text-emerald-500" : "text-orange-500"
                  }
                >
                  {values.message.length} / 5 characters
                </span>
              </div>
              <textarea
                name="message" // Matches {{message}} in template
                value={values.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your goal..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 transition-all resize-none"
              />
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-orange-500 bg-orange-500/10 p-3 rounded-lg border border-orange-500/20"
                  >
                    <AlertCircle size={16} /> {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={!canSubmit || loading}
                className="w-full cursor-pointer disabled:cursor-not-allowed py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/20 active:scale-[0.98] disabled:bg-slate-800 disabled:text-slate-600 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 py-10 bg-slate-900/50 border border-slate-800 rounded-3xl p-6"
          >
            <div className="flex justify-center">
              <div className="h-20 w-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 size={40} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Message Received!
              </h3>
              <p className="text-slate-400">
                Thanks for reaching out. Our team will get back to you shortly.
              </p>
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-500 hover:text-orange-500 transition-colors"
            >
              <RefreshCcw size={14} /> Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
