"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface HackathonProps {
  open: boolean
  onClose: () => void
}

const profiles = [
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    bio: "React + Next.js builder",
  },
  {
    name: "Sara Khan",
    role: "AI Engineer",
    bio: "Loves building AI tools",
  },
  {
    name: "Rohan Verma",
    role: "Backend Developer",
    bio: "Node.js + system design",
  },
  {
    name: "Ananya Singh",
    role: "UI/UX Designer",
    bio: "Designs clean user flows",
  },
  {
    name: "Kunal Sharma",
    role: "Web3 Dev",
    bio: "Solidity & blockchain apps",
  },
  {
    name: "Ishita Roy",
    role: "Product & Growth",
    bio: "Hackathon strategist",
  },
]

export default function Hackathon({
  open,
  onClose,
}: HackathonProps) {

  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-[#f8fafc] overflow-y-auto px-6 py-12"
      >

        <div className="max-w-6xl mx-auto">

          {/* CLOSE */}
          <button
            onClick={() => {
              onClose()
              setStep(1)
            }}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          {/* STEP 1 → FILTER POPUP */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-20"
            >
              <h2 className="text-5xl font-bold">
                Who do you want to meet?
              </h2>

              <p className="text-gray-500 mt-4">
                Filter people for your hackathon team
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-12">

                {[
                  "College Student",
                  "Working Professional",
                  "Freelancer",
                  "Startup Founder",
                  "Designer",
                  "Developer",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedType(item)}
                    className={`px-6 py-4 rounded-full border transition ${
                      selectedType === item
                        ? "bg-teal-500 text-white border-teal-500"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-14 px-10 py-4 bg-teal-500 text-white rounded-2xl"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 2 → PROFILES GRID */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10"
            >

              <h2 className="text-4xl font-bold text-center">
                Find Your Hackathon Team
              </h2>

              <p className="text-center text-gray-500 mt-3">
                Based on: {selectedType || "All People"}
              </p>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                {profiles.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md"
                  >

                    <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-white text-lg font-bold">
                      {p.name[0]}
                    </div>

                    <h3 className="text-xl font-semibold mt-4">
                      {p.name}
                    </h3>

                    <p className="text-teal-600 font-medium mt-1">
                      {p.role}
                    </p>

                    <p className="text-gray-500 mt-2">
                      {p.bio}
                    </p>

                    {/* SOCIALS */}
                    <div className="flex gap-3 mt-5">
                      <button className="px-3 py-2 text-sm border rounded-xl hover:border-teal-400">
                        X
                      </button>
                      <button className="px-3 py-2 text-sm border rounded-xl hover:border-teal-400">
                        LinkedIn
                      </button>
                      <button className="px-3 py-2 text-sm border rounded-xl hover:border-teal-400">
                        GitHub
                      </button>
                    </div>

                    {/* CHAT */}
                    <button className="w-full mt-6 bg-teal-500 text-white py-3 rounded-2xl">
                      Quick Chat
                    </button>

                  </motion.div>
                ))}

              </div>

              {/* BACK */}
              <div className="text-center mt-12">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-500 hover:text-teal-500"
                >
                  ← Back
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  )
}