import Image from "next/image";

import { motion } from "framer-motion"
import { useState } from "react"
import FindBuddy from "./FindBuddy"
import Hackathon from "./Hackathon"
import Join from "./Join"

import MakeProject from "./MakeProject"
const cards = [
  {
    title: "Find Teammates",
    desc: "Connect with builders instantly Discover developers, designers, and creators based on skills, interests, and goals. Stop building alone — find your perfect match in seconds. ",
    img: "/hello.png",
  },
  {
    title: "Join Projects",
    desc: "Work on real world ideas Explore active projects from the community and join the ones that match your skillset. Gain experience by building with others.",
    img: "/photo2.png",
  },
  {
    title: "Build Together",
    desc: "Collaborate in real time Work side-by-side with your teammates, share ideas, and ship faster with a focused collaboration environment.",
    img: "/hello2.png",
  },
  {
    title: "Grow Skills",
    desc: "Learn by building Improve your development skills through real projects, feedback, and teamwork instead of just tutorials.",
    img: "/22.png",
  },
];
const [joinOpen, setJoinOpen] = useState(false)
  const [createProjectOpen, setCreateProjectOpen] = useState(false)
  const [hackathonOpen, setHackathonOpen] = useState(false)
  const [findBuddyOpen, setFindBuddyOpen] = useState(false)

export default function FeatureCards() {
  return (
    <section className="w-full flex justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 w-full max-w-6xl">

        {cards.map((card, i) => (
          <div
            key={i}
            className="
               group
    relative
    rounded-3xl
    overflow-hidden
    bg-white/30
    backdrop-blur-xl
    border border-white/40
    shadow-lg
    transition-all duration-300
    hover:border-teal-500
    hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]
    hover:scale-[1.03]
            "
          >
            {/* IMAGE TOP SECTION */}
            <div className="relative w-full h-40 p-2">
  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-teal-500/40 group-hover:border-teal-500 transition-all duration-300">
    <Image
      src={card.img}
      alt={card.title}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
  </div>
</div>

            {/* TEXT SECTION */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-black">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {card.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}