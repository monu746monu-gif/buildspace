"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import FindBuddy from "./FindBuddy"
import Hackathon from "./Hackathon"
import Join from "./Join"
import MakeProject from "./MakeProject"

export default function Second() {
  const [joinOpen, setJoinOpen] = useState(false)
  const [createProjectOpen, setCreateProjectOpen] = useState(false)
  const [hackathonOpen, setHackathonOpen] = useState(false)
  const [findBuddyOpen, setFindBuddyOpen] = useState(false)

  const actionCards = [
    {
      emoji: "🚀",
      title: "Join a Project",
      desc: "Explore active projects looking for collaborators.",
      img: "/photo1.png",
      button: "Browse Projects",
      onClick: () => setJoinOpen(true),
    },
    {
      emoji: "💡",
      title: "Create a Project",
      desc: "Post your own idea and find the right teammates.",
      img: "/photo2.png",
      button: "Create Project",
      onClick: () => setCreateProjectOpen(true),
    },
    {
      emoji: "🏆",
      title: "Hackathon Team",
      desc: "Find teammates for hackathons, events, and build sprints.",
      img: "/hello.png",
      button: "Find Team",
      onClick: () => setHackathonOpen(true),
    },
    {
      emoji: "🤝",
      title: "Find a BuildBuddy",
      desc: "Connect with builders who match your interests and skills.",
      img: "/hello2.png",
      button: "Find Buddy",
      onClick: () => setFindBuddyOpen(true),
    },
  ]

  const cards = [
    {
      title: "Find Builders",
      desc: "Connect with students, developers, and creators who actually want to build.",
      img: "/photo1.png",
    },
    {
      title: "Build Real Projects",
      desc: "Turn raw ideas into real products with people who match your energy.",
      img: "/photo2.png",
    },
    {
      title: "Gain Experience",
      desc: "Work on meaningful projects, improve your skills, and grow your portfolio.",
      img: "/hello2.png",
    },
    {
      title: "Find Your Team",
      desc: "Hackathons, startups, side projects — find the right people faster.",
      img: "/hello.png",
    },
    {
      title: "Explore Niches",
      desc: "AI, Web3, Design, SaaS, Hackathons — discover projects in your niche.",
      img: "/33.png",
    },
    {
      title: "Start Together",
      desc: "From idea to execution, collaborate with people who share your vision.",
      img: "/11.png",
    },
  ]

  return (
    <section className="relative py-32 px-6 bg-[#f8fafc] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-400/10 blur-3xl rounded-full" />

      {/* Dotted Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#14b8a6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="px-5 py-2 rounded-full border border-teal-200 bg-white/70 backdrop-blur-md text-sm tracking-[0.25em] text-teal-600 font-medium">
            WHY BUILDBUDDY
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-[-0.04em]">
            <span className="text-black">Built for people</span>
            <br />
            <span className="text-teal-500">who want to create,</span>
            <br />
            <span className="text-black">not scroll.</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed font-light max-w-3xl mx-auto">
            Finding the right people to build with shouldn&apos;t be hard.
            <span className="text-teal-500 font-medium">
              {" "}BuildBuddy helps students connect,
              collaborate, and gain real experience
            </span>{" "}
            through projects.
          </p>
        </motion.div>

        {/* Action Cards */}
        {actionCards.map((card, index) => (
  <motion.button
    key={card.title}
    type="button"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08, duration: 0.6 }}
    whileHover={{ y: -8, scale: 1.01 }}
    onClick={card.onClick}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"
  >
    
    {/* OUTER GRADIENT BORDER (HIDDEN UNTIL HOVER) */}
    <motion.button
  className="w-[280px] flex-shrink-0 group relative rounded-2xl p-[1px] overflow-hidden text-left"
></motion.button>
    <div className="relative h-full rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-md group-hover:shadow-2xl transition-all duration-500 overflow-hidden">

      {/* IMAGE */}
      <div className="h-28 w-full overflow-hidden">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="text-xl font-semibold group-hover:text-teal-600 transition">
          {card.title}
        </h3>

        <p className="mt-2 text-gray-500 text-sm font-light">
          {card.desc}
        </p>

        <span className="mt-4 inline-block text-teal-500 font-medium text-sm">
          {card.button}
        </span>
      </div>

      </div>
      
  </motion.button>
        ))}

        {/* WHY TEXT */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-4xl md:text-3xl font-medium text-black leading-relaxed">
            We help you find the{" "}
            <span className="text-teal-600 font-semibold">
              perfect teammate
            </span>{" "}
            to build, learn, and grow together.
          </p>

          <p className="mt-6 text-lg text-black/70">
            “Because great products are never built alone — we help you find your people.”
          </p>
        </div>

        {/* ⭐ UPDATED CARDS SECTION (TOP HALF IMAGE BOX ADDED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-24">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg overflow-hidden">

                {/* TOP IMAGE BOX (ROUNDED RECTANGLE) */}
                <div className="p-4">
                  <div className="h-44 w-full rounded-2xl overflow-hidden border border-teal-400/40 group-hover:border-teal-500 transition">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="p-6">

                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 font-semibold mb-4 group-hover:bg-teal-500 group-hover:text-white transition">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-semibold group-hover:text-teal-600 transition">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-gray-500 text-sm">
                    {card.desc}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* MODALS */}
      <Join open={joinOpen} onClose={() => setJoinOpen(false)} />
      <MakeProject open={createProjectOpen} onClose={() => setCreateProjectOpen(false)} />
      <Hackathon open={hackathonOpen} onClose={() => setHackathonOpen(false)} />
      <FindBuddy open={findBuddyOpen} onClose={() => setFindBuddyOpen(false)} />

    </section>
  )
}