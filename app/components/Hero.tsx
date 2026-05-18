"use client"
import Hackathon from "./Hackathon"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Join from "./Join"
import FindBuddy from "./FindBuddy"
import MakeProject from "./MakeProject"
import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"


export default function Hero() {

  const [signInOpen, setSignInOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [hackathonOpen, setHackathonOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [user, setUser] = useState<User | null>(null)
  const [signInLoading, setSignInLoading] = useState(false)
  const [signInMessage, setSignInMessage] = useState("")
  const [findBuddyOpen, setFindBuddyOpen] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)
  const [createProjectOpen, setCreateProjectOpen] = useState(false)

  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState("")
  const [availability, setAvailability] = useState("")
  const [savingProfile, setSavingProfile] = useState(false)
  const [profileError, setProfileError] = useState("")

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

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }

    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => listener.subscription.unsubscribe()
  }, [])

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

  const saveProfile = async () => {
    setSavingProfile(true)
    setProfileError("")

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      setProfileError("Please sign in before continuing.")
      setSignInOpen(true)
      setSavingProfile(false)
      return
    }

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      email: user.email,
      skills: selectedSkills,
      status: selectedStatus,
      availability: availability,
    })

    if (error) {
      setProfileError(error.message)
      setSavingProfile(false)
      return
    }

    setSavingProfile(false)
    window.location.href = "/profile"
  }

  const signInWithEmail = async () => {
    setSignInLoading(true)
    setSignInMessage("")

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
    })

    if (error) {
      setSignInMessage(error.message)
    } else {
      setSignInMessage("Check your email for the login link.")
    }

    setSignInLoading(false)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] px-5 py-28 sm:px-6 lg:py-32">
      {/* Background */}
 {/* Video Background */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/picu2.mp4" type="video/mp4" />
</video>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

{/* Animated Cloud Background */}
<div className="absolute inset-0 overflow-hidden">

  {/* Cloud 1 */}
  <motion.div
    animate={{
      x: [0, 120, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-teal-300/25 blur-3xl rounded-full"
  />

  {/* Cloud 2 */}
  <motion.div
    animate={{
      x: [0, -100, 0],
      y: [0, 30, 0],
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-[20%] right-[-150px] w-[450px] h-[450px] bg-cyan-200/25 blur-3xl rounded-full"
  />

  {/* Cloud 3 */}
  <motion.div
    animate={{
      x: [0, 80, 0],
      y: [0, -40, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-[-180px] left-[20%] w-[600px] h-[600px] bg-sky-200/20 blur-3xl rounded-full"
  />

  {/* Cloud 4 */}
  <motion.div
    animate={{
      x: [0, -60, 0],
      y: [0, 25, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-[-100px] right-[10%] w-[380px] h-[380px] bg-white/40 blur-3xl rounded-full"
  />
</div>
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
      <div className="absolute top-5 left-5 right-5 z-30 flex items-center justify-between sm:top-8 sm:left-8 sm:right-8">

        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="text-teal-500">Build</span>
          <span className="text-black">Buddy</span>
        </h1>

        {user ? (
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
            {user.email?.charAt(0).toUpperCase()}
          </div>
        ) : (
          <button
            onClick={() => setSignInOpen(true)}
            className="px-5 py-2.5 rounded-full bg-teal-500 text-white text-sm shadow-lg shadow-teal-500/20 transition hover:bg-teal-600"
          >
            Sign In
          </button>
        )}
      </div>

      {/* Hero */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-14rem)] w-full max-w-7xl flex-col items-center justify-center gap-12 text-center">
      <div className="max-w-5xl">

        {/* Top pill */}
        <div className="mb-7 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-teal-200 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-md sm:gap-3 sm:px-5">

          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />

          <span className="text-xs tracking-[0.22em] text-teal-600 font-medium sm:text-sm sm:tracking-[0.25em]">
            FIND
          </span>

          <div className="w-1 h-1 rounded-full bg-teal-400" />

          <span className="text-xs tracking-[0.22em] text-teal-600 font-medium sm:text-sm sm:tracking-[0.25em]">
            CONNECT
          </span>

          <div className="w-1 h-1 rounded-full bg-teal-400" />

          <span className="text-xs tracking-[0.22em] text-teal-600 font-medium sm:text-sm sm:tracking-[0.25em]">
            BUILD
          </span>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl"
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
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg md:text-xl font-light">
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
          className="mt-10 sm:mt-12"
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
            className="rounded-full bg-teal-500 px-9 py-4 text-base font-medium text-white shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:bg-teal-600 sm:px-10 sm:py-5 sm:text-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
{/* Floating Feature Cards */}
<div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:items-stretch lg:gap-6">

  {/* Left Card */}
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    className="relative h-full rounded-2xl border border-white/70 bg-white/75 p-5 text-left shadow-xl shadow-teal-900/5 backdrop-blur-xl sm:mt-7"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-2xl">🚀</div>

    <h3 className="text-black text-lg font-semibold">
      Build Projects
    </h3>

    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
      Find builders and turn ideas into real products.
    </p>
  </motion.div>

  {/* Center Card */}
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      y: -14,
      scale: 1.03,
    }}
    className="relative z-20 h-full rounded-2xl border border-teal-200 bg-white/95 p-6 text-left shadow-2xl shadow-teal-900/10 backdrop-blur-2xl sm:-mt-1"
  >
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-3xl shadow-lg shadow-teal-500/25">🤝</div>

    <h3 className="text-black text-xl font-bold leading-tight">
      Find Perfect
      <br />
      Teammates
    </h3>

    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
      Connect with people matching your skills and goals.
    </p>
  </motion.div>

  {/* Right Card */}
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    className="relative h-full rounded-2xl border border-white/70 bg-white/75 p-5 text-left shadow-xl shadow-teal-900/5 backdrop-blur-xl sm:mt-7"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-2xl">🏆</div>

    <h3 className="text-black text-lg font-semibold">
      Hackathon Teams
    </h3>

    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
      Meet teammates for hackathons and startup ideas.
    </p>
  </motion.div>
</div>
      </div>
      {/* SIGN IN */}
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-teal-500 transition"
                />

                <button
                  onClick={signInWithEmail}
                  disabled={signInLoading || !email.trim()}
                  className="w-full rounded-2xl bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white py-4 font-medium transition"
                >
                  {signInLoading ? "Sending..." : "Continue with Email"}
                </button>

                {signInMessage && (
                  <p className="text-sm text-gray-500">
                    {signInMessage}
                  </p>
                )}
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

                  <button
                    onClick={() => {
                      setQuizOpen(false)
                      setStep(1)
                    }}
                    className="mb-10 text-gray-500 hover:text-teal-500 transition"
                  >
                    ← Back to Home
                  </button>

                  <h2 className="text-5xl font-bold text-black text-center">
                    What are your skills?
                  </h2>

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

                  <button
                    onClick={() => setStep(1)}
                    className="mb-10 text-gray-500 hover:text-teal-500 transition"
                  >
                    ← Back
                  </button>

                  <h2 className="text-5xl font-bold text-black text-center">
                    What’s your professional status?
                  </h2>

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

                  <button
                    onClick={() => setStep(2)}
                    className="mb-10 text-gray-500 hover:text-teal-500 transition"
                  >
                    ← Back
                  </button>

                  <h2 className="text-5xl font-bold text-black text-center">
                    What’s your availability?
                  </h2>

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

                  {profileError && (
                    <p className="mt-8 text-center text-sm text-red-500">
                      {profileError}
                    </p>
                  )}

                  <button
                    onClick={saveProfile}
                    disabled={savingProfile}
                    className="mt-14 w-full rounded-2xl bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white py-5 font-medium transition"
                  >
                    {savingProfile ? "Saving..." : "Continue"}
                  </button>
                </motion.div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                >

                  <button
                    onClick={() => setStep(3)}
                    className="mb-10 text-gray-500 hover:text-teal-500 transition"
                  >
                    ← Back
                  </button>

                  <div className="text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
                      What brings you here today?
                    </h2>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">

                    {[
                      {
                        emoji: "🚀",
                        title: "Join a Project",
                        desc: "Explore projects looking for collaborators.",
                        button: "Get Started →",
                      },
                      {
                        emoji: "💡",
                        title: "Create a Project",
                        desc: "Post your own project and find teammates.",
                        button: "Create Project →",
                      },
                      {
                        emoji: "🏆",
                        title: "Hackathon Team",
                        desc: "Find teammates for hackathons and events.",
                        button: "Find Team →",
                      },
                      {
                        emoji: "🤝",
                        title: "Find a BuildBuddy",
                        desc: "Connect with like-minded builders.",
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

                          if (card.title === "Create a Project") {
                            setCreateProjectOpen(true)
                          }

                          if (card.title === "Hackathon Team") {
                            setHackathonOpen(true)
                          }

                          if (card.title === "Find a BuildBuddy") {
                            setFindBuddyOpen(true)
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
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join */}
      <Join
        open={joinOpen}
        onClose={() => setJoinOpen(false)}
      />

      {/* Create Project */}
      <MakeProject
        open={createProjectOpen}
        onClose={() => setCreateProjectOpen(false)}
      />

      {/* Hackathon Team */}
      <Hackathon
        open={hackathonOpen}
        onClose={() => setHackathonOpen(false)}
      />

      {/* Find Buddy */}
      <FindBuddy
        open={findBuddyOpen}
        onClose={() => setFindBuddyOpen(false)}
      />
    </section>
  )
}
