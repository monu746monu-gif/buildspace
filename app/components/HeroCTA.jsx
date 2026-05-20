"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function HeroCTA() {
  return (
    <div className="z-30 mt-auto flex shrink-0 justify-center pb-8 pt-30 sm:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0], // floating animation
          scale: 1,
        }}
        transition={{
          opacity: { duration: 0.6 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.1,
          y: -12,
          transition: { duration: 0.25 },
        }}
        className="
          flex items-center gap-3
          px-6 py-3
          rounded-full
          bg-white/20
          backdrop-blur-xl
          border border-white/30
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          cursor-pointer
          relative
          overflow-hidden
        "
      >
        {/* soft glow animation background */}
        <motion.div
          className="absolute inset-0 bg-teal-400/10"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* icon */}
        <div className="relative w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center">
          <Users className="w-4 h-4 text-teal-600" />
        </div>

        {/* text */}
        <p className="relative text-sm md:text-base text-gray-700 font-medium">
          Ready to meet your <span className="text-teal-600">buddy</span>?
        </p>
      </motion.div>
    </div>
  );
}