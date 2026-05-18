"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface ProjectsProps {
  open: boolean
}

export default function Projects({
  open,
}: ProjectsProps) {

  const [joinPopup, setJoinPopup] = useState(false)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[120] bg-[#f8fafc] overflow-y-auto">

      {/* Navbar */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-teal-500">
              Build
            </span>
            <span className="text-black">
              Buddy
            </span>
          </h1>

          <div className="flex items-center gap-4">

            <input
              type="text"
              placeholder="Search projects..."
              className="hidden md:block px-5 py-3 rounded-2xl border border-gray-200 bg-white outline-none focus:border-teal-500 transition w-[260px]"
            />

            <div className="w-11 h-11 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold">
              M
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Heading */}
        <div>

          <h2 className="text-5xl font-bold tracking-tight text-black">
            Explore Projects
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Discover projects, startups, and hackathon ideas people are building right now.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mt-10">

          {[
            "All",
            "AI",
            "Web3",
            "Frontend",
            "Hackathon",
            "Startup",
          ].map((item) => (
            <button
              key={item}
              className={`px-5 py-2.5 rounded-full border transition ${
                item === "All"
                  ? "bg-teal-500 text-white border-teal-500"
                  : "bg-white border-gray-200 text-gray-600 hover:border-teal-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">

          {/* Card */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-[32px] p-[1px] overflow-hidden"
          >

            {/* Hover Border */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Card Content */}
            <div className="relative rounded-[32px] bg-white border border-gray-100 p-9 shadow-lg">

              {/* Top */}
              <div className="flex items-start justify-between gap-6">

                <div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm">
                    AI Project
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold text-black">
                    BuildSpace AI
                  </h3>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    An AI platform where students can collaborate,
                    share startup ideas, and build real-world projects together.
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-3xl">
                  🚀
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Next.js",
                  "UI/UX",
                  "AI",
                  "Backend",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-10">

                <div className="flex items-center justify-between flex-wrap gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-white text-lg font-semibold">
                      M
                    </div>

                    <div>
                      <p className="text-black font-semibold">
                        Monu
                      </p>

                      <p className="text-sm text-gray-400">
                        Project Owner
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Looking for teammates
                    </p>

                    <p className="text-black font-medium mt-1">
                      3 Members Needed
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">

                  <button className="px-6 py-3 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-medium transition">
                    Quick Chat
                  </button>

                  <button
                    onClick={() => setJoinPopup(true)}
                    className="px-6 py-3 rounded-2xl border border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition"
                  >
                    Join Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* JOIN POPUP */}
      <AnimatePresence>
        {joinPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg rounded-[32px] bg-white p-10 shadow-2xl"
            >

              {/* Close */}
              <button
                onClick={() => setJoinPopup(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl"
              >
                ×
              </button>

              {/* Header */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-semibold">
                  M
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-black">
                    Monu
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Creator of BuildSpace AI
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="mt-8 text-gray-500 leading-relaxed">
                Connect with the project owner directly through social platforms
                or start a quick chat inside BuildBuddy.
              </p>

              {/* Social Buttons */}
              <div className="flex flex-col gap-4 mt-10">

                <button className="w-full rounded-2xl border border-gray-200 py-4 hover:border-teal-400 hover:bg-teal-50 transition">
                  Connect on X / Twitter
                </button>

                <button className="w-full rounded-2xl border border-gray-200 py-4 hover:border-teal-400 hover:bg-teal-50 transition">
                  Connect on LinkedIn
                </button>

                <button className="w-full rounded-2xl border border-gray-200 py-4 hover:border-teal-400 hover:bg-teal-50 transition">
                  Join Discord
                </button>
              </div>

              {/* Main Action */}
              <button className="mt-10 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-5 text-lg font-medium shadow-lg shadow-teal-500/20 transition-all duration-300">
                Start Quick Chat
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}