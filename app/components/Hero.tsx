"use client"
import Hackathon from "./Hackathon"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Join from "./Join"
import FindBuddy from "./FindBuddy"
import MakeProject from "./MakeProject"
import { ArrowRight } from "lucide-react"
import { Code2, Users, Rocket, Trophy, Sparkles } from "lucide-react"
import { supabase } from "../lib/supabase"
import gsap from "gsap"

import { Handshake } from "lucide-react"
import { useRef , useCallback} from "react"
import type { User } from "@supabase/supabase-js"

export default function Hero() {

  const [signInOpen, setSignInOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [hackathonOpen, setHackathonOpen] = useState(false)
  const [step, setStep] = useState(1)
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const zoneRef = useRef<HTMLDivElement | null>(null)
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
  useEffect(() => {
    const zone = zoneRef.current
    const btn = buttonRef.current
  
    if (!zone || !btn) return
  
    const strength = 0.25
  
    const handleMouseMove = (e: MouseEvent) => {
      const rect = zone.getBoundingClientRect()
  
      const x = gsap.utils.mapRange(
        rect.left,
        rect.right,
        -rect.width / 2,
        rect.width / 2,
        e.clientX
      )
  
      const y = gsap.utils.mapRange(
        rect.top,
        rect.bottom,
        -rect.height / 2,
        rect.height / 2,
        e.clientY
      )
  
      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      })
    }
  
    const handleLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: true,
      })
    }
  
    zone.addEventListener("mousemove", handleMouseMove)
    zone.addEventListener("mouseleave", handleLeave)
  
    return () => {
      zone.removeEventListener("mousemove", handleMouseMove)
      zone.removeEventListener("mouseleave", handleLeave)
    }
  }, [])
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
{/* Floating Mini Feature Cards */}

{/* LEFT TOP */}
<motion.div
  animate={{
    y: [0, -14, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  left-[6%]
  top-[24%]
  z-10
  hidden lg:block
  "
>
  <div
    className="
    w-[180px]
    rounded-3xl
    bg-white/60
    backdrop-blur-2xl
    border border-white/50
    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    p-5
    "
  >
    <div className="text-3xl">🚀</div>

    <h3 className="mt-3 text-lg font-semibold text-black">
      Launch Ideas
    </h3>

    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
      Turn concepts into real products.
    </p>
  </div>
</motion.div>

{/* RIGHT TOP */}
<motion.div
  animate={{
    y: [0, 12, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  right-[8%]
  top-[20%]
  z-10
  hidden lg:block
  "
>
  <div
    className="
    w-[190px]
    rounded-3xl
    bg-white/60
    backdrop-blur-2xl
    border border-white/50
    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    p-5
    "
  >
    <div className="text-3xl">🤝</div>

    <h3 className="mt-3 text-lg font-semibold text-black">
      Find Teammates
    </h3>

    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
      Connect with builders worldwide.
    </p>
  </div>
</motion.div>

{/* LEFT BOTTOM */}
<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  left-[10%]
  bottom-[18%]
  z-10
  hidden lg:block
  "
>
  <div
    className="
    w-[180px]
    rounded-3xl
    bg-white/60
    backdrop-blur-2xl
    border border-white/50
    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    p-5
    "
  >
    <div className="text-3xl">🏆</div>

    <h3 className="mt-3 text-lg font-semibold text-black">
      Hackathons
    </h3>

    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
      Build winning teams fast.
    </p>
  </div>
</motion.div>

{/* RIGHT BOTTOM */}
<motion.div
  animate={{
    y: [0, 14, 0],
  }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  right-[10%]
  bottom-[14%]
  z-10
  hidden lg:block
  "
>
  <div
    className="
    w-[190px]
    rounded-3xl
    bg-white/60
    backdrop-blur-2xl
    border border-white/50
    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    p-5
    "
  >
    <div className="text-3xl">💡</div>

    <h3 className="mt-3 text-lg font-semibold text-black">
      Smart Matching
    </h3>

    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
      AI-powered teammate discovery.
    </p>
  </div>
</motion.div>

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
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <div
    className="
    flex items-center gap-2
    px-2 py-2
    rounded-full
    bg-white/50
    backdrop-blur-2xl
    border border-white/40
    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
    "
  >

    {["Home", "About", "Demo", "Start"].map((item) => (
      <button
        key={item}
        className="
        group
        relative
        overflow-hidden
        px-5 py-2.5
        rounded-full
        text-sm font-medium
        text-gray-600

        transition-all duration-300
        hover:text-teal-600
        hover:bg-teal-50
        hover:scale-110
        active:scale-95
        "
      >

        {/* LIGHT SWEEP */}
        <span
          className="
          absolute inset-0
          -translate-x-full
          group-hover:translate-x-full
          transition-transform duration-700
          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
          skew-x-12
          "
        />

        {/* TEXT */}
        <span className="relative z-10">
          {item}
        </span>
      </button>
    ))}
  </div>
</nav>
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

          <span className="text-xs tracking-[0.22em] text-black-800 font-medium sm:text-sm sm:tracking-[0.25em]">
            FIND
          </span>

          <div className="w-1 h-1 rounded-full bg-teal-400" />

          <span className="text-xs tracking-[0.22em] text-teal-600 font-medium sm:text-sm sm:tracking-[0.25em]">
            CONNECT
          </span>

          <div className="w-1 h-1 rounded-full bg-teal-400" />

          <span className="text-xs tracking-[0.22em] text-black-800 font-medium sm:text-sm sm:tracking-[0.25em]">
            BUILD
          </span>
        </div>
        <div className="tracking-wide">

{/* Heading */}
<motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl font-bold leading-[1] tracking-[-0.04em] sm:text-5xl md:text-7xl"
>

  {/* First Line */}
  <div className="flex items-center justify-center gap-4 flex-wrap">

    <span className="text-black">
      Find your
    </span>

    <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center relative top-1">
      <Handshake className="w-6 h-6 text-teal-600" />
    </div>

    <motion.span
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block text-teal-600"
    >
      perfect
    </motion.span>

  </div>

  {/* Second Line */}
  <div className="mt-3 text-black">
    build buddy.
  </div>

</motion.h1>


</div>
        {/* Subtitle */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg md:text-xl font-light">
          Connect with builders, share ideas,
          and{" "}
          <span className="text-teal-500 font-medium">
            build amazing projects
          </span>{" "}
          together.
        </p>
        
        <div
  ref={zoneRef}
  className="mt-14 flex items-center justify-center"
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
  className="px-10 py-5 rounded-full bg-teal-500 hover:bg-teal-600 transition-all duration-300 text-white text-lg font-medium shadow-2xl shadow-teal-500/30 flex items-center gap-3 mx-auto"
>
  Get Started

  <ArrowRight className="w-5 h-5" />
</motion.button>
</div>

        {/* Floating Feature Cards */}

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
