"use client"

import { motion } from "framer-motion"

interface ProjectsProps {
  open: boolean
}

export default function Projects({
  open,
}: ProjectsProps) {
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

      {/* Content */}
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

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-[32px] p-[1px] overflow-hidden"
          >

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative rounded-[32px] bg-white border border-gray-100 p-9 shadow-lg">

              {/* Top */}
              <div className="flex items-start justify-between">

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
              <div className="flex items-center justify-between mt-10">

                <div>
                  <p className="text-sm text-gray-400">
                    Looking for teammates
                  </p>

                  <p className="text-black font-medium mt-1">
                    3 Members Needed
                  </p>
                </div>

                <button className="px-6 py-3 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-medium transition">
                  Join Project
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}