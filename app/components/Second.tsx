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
      button: "Browse Projects",
      onClick: () => setJoinOpen(true),
    },
    {
      emoji: "💡",
      title: "Create a Project",
      desc: "Post your own idea and find the right teammates.",
      button: "Create Project",
      onClick: () => setCreateProjectOpen(true),
    },
    {
      emoji: "🏆",
      title: "Hackathon Team",
      desc: "Find teammates for hackathons, events, and build sprints.",
      button: "Find Team",
      onClick: () => setHackathonOpen(true),
    },
    {
      emoji: "🤝",
      title: "Find a BuildBuddy",
      desc: "Connect with builders who match your interests and skills.",
      button: "Find Buddy",
      onClick: () => setFindBuddyOpen(true),
    },
  ]

  const cards = [
    {
      title: "Find Builders",
      desc: "Connect with students, developers, and creators who actually want to build.",
    },
    {
      title: "Build Real Projects",
      desc: "Turn raw ideas into real products with people who match your energy.",
    },
    {
      title: "Gain Experience",
      desc: "Work on meaningful projects, improve your skills, and grow your portfolio.",
    },
    {
      title: "Find Your Team",
      desc: "Hackathons, startups, side projects — find the right people faster.",
    },
    {
      title: "Explore Niches",
      desc: "AI, Web3, Design, SaaS, Hackathons — discover projects in your niche.",
    },
    {
      title: "Start Together",
      desc: "From idea to execution, collaborate with people who share your vision.",
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

            <span className="text-black">
              Built for people
            </span>

            <br />

            <span className="text-teal-500">
              who want to create,
            </span>

            <br />

            <span className="text-black">
              not scroll.
            </span>
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

        

        {/* Project Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {actionCards.map((card, index) => (
            <motion.button
              key={card.title}
              type="button"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              onClick={card.onClick}
              className="group relative rounded-3xl p-[1px] overflow-hidden text-left"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative h-full rounded-3xl bg-white/90 backdrop-blur-xl p-7 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="text-4xl mb-6">
                  {card.emoji}
                </div>

                <h3 className="text-2xl font-semibold text-black transition duration-300 group-hover:text-teal-600">
                  {card.title}
                </h3>

                <p className="mt-4 text-gray-500 leading-relaxed font-light">
                  {card.desc}
                </p>

                <span className="mt-7 inline-flex text-teal-500 font-medium">
                  {card.button}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  viewport={{ once: true }}
  className="mt-20 text-center max-w-3xl mx-auto"
>
  <p className="text-2xl md:text-3xl font-medium text-black leading-relaxed">
    “We help you find the perfect teammate to build, learn, and grow together.”
  </p>

  <p className="mt-6 text-lg md:text-xl text-black/70 leading-relaxed">
    “Because great products are never built alone — we help you find your people.”
  </p>
</motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-24">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative rounded-3xl p-[1px] overflow-hidden"
            >

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-teal-100/30 to-transparent rounded-3xl" />

                {/* Content */}
                <div className="relative z-10">

                  {/* Number */}
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 font-semibold text-lg mb-6 group-hover:bg-teal-500 group-hover:text-white transition duration-500">
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-black mb-4 transition duration-300 group-hover:text-teal-600">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-lg font-light">
                    {card.desc}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Join
        open={joinOpen}
        onClose={() => setJoinOpen(false)}
      />

      <MakeProject
        open={createProjectOpen}
        onClose={() => setCreateProjectOpen(false)}
      />

      <Hackathon
        open={hackathonOpen}
        onClose={() => setHackathonOpen(false)}
      />

      <FindBuddy
        open={findBuddyOpen}
        onClose={() => setFindBuddyOpen(false)}
      />
    </section>
  )
}
