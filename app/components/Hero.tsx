"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Hero() {
  const [signInOpen, setSignInOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [step, setStep] = useState(1)

  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState("")

  const skills = [
    "Frontend",
    "Backend",
    "UI/UX",
    "AI/ML",
    "Web3",
    "App Dev",
    "DevOps",
    "Content",
    "Video Editing",
    "Marketing",
  ]

  const statuses = [
    "1st Year Student",
    "2nd Year Student",
    "3rd Year Student",
    "4th Year Student",
    "Freelancer",
    "Working Professional",
    "Remote Worker",
    "Startup Founder",
    "Designer",
    "Open to Work",
  ]

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(
        selectedSkills.filter((s) => s !== skill)
      )
    } else {
      if (selectedSkills.length < 3) {
        setSelectedSkills([...selectedSkills, skill])
      }
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-teal-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-teal-300/10 blur-3xl rounded-full" />

      {/* Dotted Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#14b8a6 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* Navbar */}
      <div className="absolute top-8 left-8 right-8 z-30 flex items-center justify-between">

        {/* Logo */}
        <motion.h1
          whileHover={{ y: -2 }}
          className="text-2xl font-semibold tracking-tight"
        >
          <span className="text-teal-500">Build</span>
          <span className="text-black">Buddy</span>
        </motion.h1>

        {/* Sign In */}
        <motion.button
          whileHover={{
            y: -3,
            scale: 1.03,
          }}
          onClick={() => setSignInOpen(true)}
          className="px-5 py-2.5 rounded-full bg-teal-500 text-white text-sm font-medium shadow-lg shadow-teal-500/20"
        >
          Sign In
        </motion.button>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl text-center">

        {/* Top Pill */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-teal-200 bg-white/70 backdrop-blur-md shadow-sm mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />

          <span className="text-sm tracking-[0.25em] text-teal-600 font-medium">
            FIND
          </span>

          <div className="w-1 h-1 rounded-full bg-teal-400" />

          <span className="text-sm tracking-[0.25em] text-teal-600 font-medium">
            CONNECT
          </span>

          <div className="w-1 h-1 rounded-full bg-teal-400" />

          <span className="text-sm tracking-[0.25em] text-teal-600 font-medium">
            BUILD
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-[-0.04em]"
        >
          <motion.span
            whileHover={{ x: 6 }}
            className="text-teal-500 inline-block"
          >
            Find your
          </motion.span>

          <br />

          <motion.span
            whileHover={{ x: -6 }}
            className="text-black inline-block"
          >
            perfect
          </motion.span>

          <br />

          <motion.span
            whileHover={{ y: -4 }}
            className="text-black inline-block"
          >
            build buddy.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-7 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Connect with builders, share ideas,
          and{" "}
          <span className="text-teal-500 font-medium">
            build amazing projects
          </span>{" "}
          together.
        </motion.p>

        {/* Get Started */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-14"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setQuizOpen(true)
              setStep(1)
            }}
            className="px-10 py-5 rounded-full bg-teal-500 hover:bg-teal-600 transition-all duration-300 text-white text-lg font-medium shadow-2xl shadow-teal-500/30"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* SIGN IN MODAL */}
      <AnimatePresence>
        {signInOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
            >
              <button
                onClick={() => setSignInOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-black text-xl"
              >
                ×
              </button>

              <h2 className="text-3xl font-semibold text-black">
                Sign In
              </h2>

              <p className="mt-2 text-gray-500">
                Enter your email and continue.
              </p>

              <div className="mt-8 space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-teal-500 transition"
                />

                <button className="w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-4 font-medium transition">
                  Continue with Email
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUIZ MODAL */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
            >
              <button
                onClick={() => setQuizOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-black text-xl"
              >
                ×
              </button>

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <h2 className="text-3xl font-semibold text-black">
                    What are your skills?
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Select up to 3 skills.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    {skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`px-5 py-3 rounded-full border transition-all duration-300 ${
                          selectedSkills.includes(skill)
                            ? "bg-teal-500 text-white border-teal-500"
                            : "border-gray-200 text-gray-600 hover:border-teal-400"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="mt-10 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-4 font-medium transition"
                  >
                    Continue
                  </button>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <h2 className="text-3xl font-semibold text-black">
                    What’s your professional status?
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Choose the option that fits you best.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {statuses.map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-5 py-4 rounded-2xl border text-left transition-all duration-300 ${
                          selectedStatus === status
                            ? "bg-teal-500 text-white border-teal-500"
                            : "border-gray-200 text-gray-600 hover:border-teal-400"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>

                  <button
                    className="mt-10 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-4 font-medium transition"
                  >
                    Finish Setup
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}