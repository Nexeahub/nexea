import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center px-3">
    <motion.span
      key={value}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-xl md:text-3xl font-bold tracking-tighter"
    >
      {value.toString().padStart(2, "0")}
    </motion.span>
    <span className="text-[10px] uppercase tracking-widest opacity-60">
      {label}
    </span>
  </div>
);

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex mx-auto items-centerjustify-center py-4">
      <div className="backdrop-blur-sm text-slate-600 bg-white/10 border border-slate-200 rounded-2xl p-4 shadow-md flex gap-2">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-2xl opacity-80 self-center mb-4 text-orange-600">
          :
        </span>
        <TimeUnit value={timeLeft.hours} label="Hrs" />
        <span className="text-2xl opacity-80 self-center mb-4 text-orange-600">
          :
        </span>
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <span className="text-2xl opacity-80 self-center mb-4 text-orange-600">
          :
        </span>
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
};

export default CountdownTimer;
