"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface FindBuddyProps {
  open: boolean
  onClose: () => void
}

export default function FindBuddy({ open, onClose }: FindBuddyProps) {

  const [step, setStep] = useState(1)
  const [niche, setNiche] = useState("")
  const [location, setLocation] = useState("")

  if (!open) return null

  const niches = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Dev",
    "UI/UX Designer",
    "AI/ML Engineer",
    "Web3 Builder",
    "App Developer",
    "Startup Co-founder",
    "Hackathon Partner",
    "Marketing/Growth",
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-white px-6 py-12 overflow-y-auto"
      >

        <div className="max-w-4xl mx-auto">

          {/* Close */}
          <button
            onClick={() => {
              onClose()
              setStep(1)
              setNiche("")
              setLocation("")
            }}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-16"
            >

              <h1 className="text-5xl font-bold text-black">
                What kind of buddy do you want?
              </h1>

              <p className="text-gray-500 mt-4">
                Choose the niche you want to connect with
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">

                {niches.map((item) => (
                  <button
                    key={item}
                    onClick={() => setNiche(item)}
                    className={`p-4 rounded-2xl border transition ${
                      niche === item
                        ? "bg-teal-500 text-white border-teal-500"
                        : "bg-white border-gray-200 hover:border-teal-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-12 px-10 py-4 bg-teal-500 text-white rounded-2xl"
              >
                Continue
              </button>

            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-16"
            >

              <button
                onClick={() => setStep(1)}
                className="text-gray-500 mb-10"
              >
                ← Back
              </button>

              <h1 className="text-5xl font-bold text-black">
                Any location preference?
              </h1>

              <p className="text-gray-500 mt-4">
                (Optional — you can skip this)
              </p>

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city / country (optional)"
                className="mt-12 w-full max-w-xl mx-auto p-5 border rounded-2xl outline-none focus:border-teal-500"
              />

              <button
                onClick={() => setStep(3)}
                className="mt-10 px-10 py-4 bg-teal-500 text-white rounded-2xl"
              >
                Find Buddies
              </button>

            </motion.div>
          )}

          {/* STEP 3 (RESULT PREVIEW UI) */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12"
            >

              <h2 className="text-4xl font-bold text-center">
                Best Buddies for You
              </h2>

              <p className="text-center text-gray-500 mt-3">
                {niche} {location ? `• ${location}` : ""}
              </p>

              {/* SAMPLE RESULTS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="p-6 rounded-3xl border bg-white shadow-md hover:shadow-xl transition"
                  >

                    <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                      U{i}
                    </div>

                    <h3 className="text-xl font-semibold mt-4">
                      User {i}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {niche}
                    </p>

                    <button className="mt-6 w-full bg-teal-500 text-white py-3 rounded-2xl">
                      Connect
                    </button>

                  </div>
                ))}

              </div>

              <div className="text-center mt-12">
                <button
                  onClick={() => {
                    setStep(1)
                    setNiche("")
                    setLocation("")
                  }}
                  className="text-gray-500"
                >
                  ← Start Over
                </button>
              </div>

            </motion.div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  )
}