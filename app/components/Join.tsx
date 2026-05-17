"use client"
import { useState } from "react"
import Projects from "./Projects"
import { motion, AnimatePresence } from "framer-motion"

interface JoinProps {
  open: boolean
  onClose: () => void
}
const [showProjects, setShowProjects] = useState(false)
export default function Join({
  open,
  onClose,
}: JoinProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-2xl rounded-[32px] bg-white p-10 shadow-2xl"
          >

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black text-2xl"
            >
              ×
            </button>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-black tracking-tight">
              Almost there!
            </h2>

            <p className="mt-3 text-gray-500 text-lg">
              Tell us a bit about yourself to get started.
            </p>

            {/* Skills */}
            <div className="mt-10">

              <h3 className="text-lg font-semibold text-black">
                What are your skills?
              </h3>

              <div className="mt-4 flex gap-3">

                <input
                  type="text"
                  placeholder="Type a skill and press Enter"
                  className="flex-1 rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-teal-500 transition"
                />

                <button className="px-6 rounded-2xl bg-gray-100 text-gray-500 font-medium hover:bg-gray-200 transition">
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-600">
                  Frontend
                  <span className="cursor-pointer">
                    ×
                  </span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-600">
                  UI/UX
                  <span className="cursor-pointer">
                    ×
                  </span>
                </div>
              </div>

              <div className="mt-7">

                <p className="text-sm text-gray-400 mb-3">
                  Quick add:
                </p>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Frontend",
                    "Backend",
                    "UI/UX",
                    "AI/ML",
                    "Web3",
                    "Marketing",
                    "Video Editing",
                    "App Dev",
                  ].map((skill) => (
                    <button
                      key={skill}
                      className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 hover:border-teal-400 hover:text-teal-500 transition"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>

           
            

              
            {/* Location */}
            <div className="mt-10">

              <div className="flex items-center gap-2">

                <h3 className="text-lg font-semibold text-black">
                  Where are you based?
                </h3>

                <span className="text-gray-400 text-sm">
                  (optional)
                </span>
              </div>

              <div className="mt-4">

                <input
                  type="text"
                  placeholder="City or Remote"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-teal-500 transition"
                />
              </div>

              <p className="mt-3 text-sm text-gray-400">
                Type your city or enter "Remote"
              </p>
            </div>
            <button
  onClick={() => setShowProjects(true)}
  className="mt-12 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-5 text-lg font-medium shadow-lg shadow-teal-500/20 transition-all duration-300"
>
  Continue
</button>
           
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}