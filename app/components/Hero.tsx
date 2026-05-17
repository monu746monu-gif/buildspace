"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Join from "./Join"

export default function Hero() {
  const [signInOpen, setSignInOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)

  const [step, setStep] = useState(1)

  const [joinOpen, setJoinOpen] = useState(false)

  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState("")
  const [availability, setAvailability] = useState("")

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

      {/* Background */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-teal-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-teal-300/10 blur-3xl rounded-full" />

      {/* Grid */}
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

        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="text-teal-500">Build</span>
          <span className="text-black">Buddy</span>
        </h1>

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

      {/* Hero */}
      <div className="relative z-20 max-w-5xl text-center">

        {/* Top pill */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-teal-200 bg-white/70 backdrop-blur-md shadow-sm mb-8">

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
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-[-0.04em]"
        >
          <span className="text-teal-500">
            Find your
          </span>

          <br />

          <span className="text-black">
            perfect
          </span>

          <br />

          <span className="text-black">
            build buddy.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-7 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
          Connect with builders, share ideas,
          and{" "}
          <span className="text-teal-500 font-medium">
            build amazing projects
          </span>{" "}
          together.
        </p>

        {/* CTA */}
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

      {/* QUIZ */}
      <AnimatePresence>
        {quizOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#f8fafc] px-6 py-16"
          >

            <div className="max-w-6xl mx-auto">

              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-3xl mx-auto"
                >

                  <h2 className="text-5xl font-bold text-black text-center">
                    What are your skills?
                  </h2>

                  <p className="mt-4 text-center text-gray-500 text-lg">
                    Select up to 3 skills.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 mt-14">
                    {skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`px-6 py-4 rounded-full border transition-all duration-300 ${
                          selectedSkills.includes(skill)
                            ? "bg-teal-500 text-white border-teal-500"
                            : "bg-white border-gray-200 text-gray-600 hover:border-teal-400"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="mt-14 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-5 font-medium transition"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl mx-auto"
                >

                  <h2 className="text-5xl font-bold text-black text-center">
                    What’s your professional status?
                  </h2>

                  <p className="mt-4 text-center text-gray-500 text-lg">
                    Choose the option that fits you best.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
                    {statuses.map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-6 py-5 rounded-2xl border text-left transition-all duration-300 ${
                          selectedStatus === status
                            ? "bg-teal-500 text-white border-teal-500"
                            : "bg-white border-gray-200 text-gray-600 hover:border-teal-400"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(3)}
                    className="mt-14 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-5 font-medium transition"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl mx-auto"
                >

                  <h2 className="text-5xl font-bold text-black text-center">
                    What’s your availability?
                  </h2>

                  <p className="mt-4 text-center text-gray-500 text-lg">
                    Let others know how much time you can dedicate.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">

                    {[
                      "Full Time",
                      "Part Time",
                      "18 hrs / week",
                      "Weekends Only",
                      "Evenings",
                      "Flexible",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => setAvailability(item)}
                        className={`px-6 py-5 rounded-2xl border text-left transition-all duration-300 ${
                          availability === item
                            ? "bg-teal-500 text-white border-teal-500"
                            : "bg-white border-gray-200 text-gray-600 hover:border-teal-400"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(4)}
                    className="mt-14 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 text-white py-5 font-medium transition"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                >

                  <div className="text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
                      What brings you here today?
                    </h2>

                    <p className="mt-4 text-gray-500 text-lg">
                      Choose your path. You can always explore other options later.
                    </p>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">

                    {[
                      {
                        emoji: "🚀",
                        title: "Join a Project",
                        desc: "Explore projects looking for collaborators and start building with ambitious people.",
                        button: "Get Started →",
                      },
                      {
                        emoji: "💡",
                        title: "Create a Project",
                        desc: "Have an idea? Post your project and find people who want to build it with you.",
                        button: "Create Project →",
                      },
                      {
                        emoji: "🏆",
                        title: "Hackathon Team",
                        desc: "Find teammates for hackathons, college events, and startup competitions.",
                        button: "Find Team →",
                      },
                      {
                        emoji: "🤝",
                        title: "Find a BuildBuddy",
                        desc: "Meet like-minded builders who match your skills, niche, and energy.",
                        button: "Find Buddy →",
                      },
                    ].map((card, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                        }}
                        onClick={() => {
                          if (card.title === "Join a Project") {
                            setJoinOpen(true)
                          }
                        }}
                        className="group relative rounded-3xl p-[1px] overflow-hidden cursor-pointer"
                      >

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition duration-500" />

                        <div className="relative rounded-3xl bg-white p-10 border border-gray-100 shadow-md hover:shadow-2xl transition duration-500">

                          <div className="text-5xl mb-8">
                            {card.emoji}
                          </div>

                          <h3 className="text-3xl font-semibold text-black">
                            {card.title}
                          </h3>

                          <p className="mt-5 text-gray-500 leading-relaxed text-lg">
                            {card.desc}
                          </p>

                          <button className="mt-8 text-teal-500 font-medium text-lg">
                            {card.button}
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-10 text-center text-gray-400">
                    You can always explore other paths later.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* JOIN MODAL */}
      <Join
        open={joinOpen}
        onClose={() => setJoinOpen(false)}
      />
    </section>
  )
}