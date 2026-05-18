"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { supabase } from "../lib/supabase"

interface MakeProjectProps {
  open: boolean
  onClose: () => void
}
const createProject = async () => {

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    alert("Please sign in")
    return
  }

  const { error } = await supabase
    .from("projects")
    .insert({
      owner_id: user.id,

      title,
      description,
      github_link,

      owner_email: user.email,

      looking_for,
      communication,

      role,
      preferred_team_size,
      partner_skills,
    })

  if (error) {
    console.log(error)
    alert(error.message)
    return
  }

  alert("Project created successfully!")
  onClose()
}
export default function MakeProject({
  open,
  onClose,
}: MakeProjectProps) {

  const [step, setStep] = useState(1)

  const [people, setPeople] = useState<string[]>([])
  const [style, setStyle] = useState<string[]>([])

  const togglePeople = (item: string) => {
    setPeople((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    )
  }

  const toggleStyle = (item: string) => {
    setStyle((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    )
  }

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-[#f8fafc] overflow-y-auto px-6 py-12"
      >

        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-4xl font-bold text-black">
                Create Project
              </h1>
              <p className="text-gray-500 mt-2">
                Answer a few questions to publish your project
              </p>
            </div>

            <button
              onClick={() => {
                onClose()
                setStep(1)
              }}
              className="text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-10 overflow-hidden">
            <div
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-semibold">
                Project Title & Description
              </h2>

              <input
                className="w-full mt-8 p-5 rounded-2xl border"
                placeholder="Project Title"
              />

              <textarea
                className="w-full mt-5 p-5 rounded-2xl border h-40"
                placeholder="Quick description (5 lines)"
              />

              <button
                onClick={() => setStep(2)}
                className="mt-8 w-full bg-teal-500 text-white py-4 rounded-2xl"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button onClick={() => setStep(1)} className="mb-5 text-gray-500">
                ← Back
              </button>

              <h2 className="text-3xl font-semibold">
                Project & Owner Links
              </h2>

              <input className="w-full mt-8 p-5 border rounded-2xl" placeholder="GitHub Link" />
              <input className="w-full mt-5 p-5 border rounded-2xl" placeholder="Twitter / X" />
              <input className="w-full mt-5 p-5 border rounded-2xl" placeholder="Email" />

              <button
                onClick={() => setStep(3)}
                className="mt-8 w-full bg-teal-500 text-white py-4 rounded-2xl"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div>
              <button onClick={() => setStep(2)} className="mb-5 text-gray-500">
                ← Back
              </button>

              <h2 className="text-3xl font-semibold">
                Who do you want to work with?
              </h2>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Frontend Dev",
                  "Backend Dev",
                  "Designer",
                  "AI Engineer",
                  "Web3 Dev",
                  "Marketing",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => togglePeople(item)}
                    className={`px-5 py-3 rounded-full border ${
                      people.includes(item)
                        ? "bg-teal-500 text-white"
                        : "bg-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(4)}
                className="mt-8 w-full bg-teal-500 text-white py-4 rounded-2xl"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <motion.div>
              <button onClick={() => setStep(3)} className="mb-5 text-gray-500">
                ← Back
              </button>

              <h2 className="text-3xl font-semibold">
                Preferred Communication
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Chat",
                  "Calls",
                  "Meetups",
                  "Discord",
                  "Voice Chat",
                  "Async",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleStyle(item)}
                    className={`p-5 rounded-2xl border ${
                      style.includes(item)
                        ? "bg-teal-500 text-white"
                        : "bg-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(5)}
                className="mt-8 w-full bg-teal-500 text-white py-4 rounded-2xl"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <motion.div>
              <button onClick={() => setStep(4)} className="mb-5 text-gray-500">
                ← Back
              </button>

              <h2 className="text-3xl font-semibold">
                Role & Team Size
              </h2>

              <input className="w-full mt-8 p-5 border rounded-2xl" placeholder="Your Role" />
              <input className="w-full mt-5 p-5 border rounded-2xl" placeholder="Team Size (e.g. 3-5)" />
              <textarea className="w-full mt-5 p-5 border rounded-2xl h-32" placeholder="Skills you want in teammates" />

              <button
                onClick={() => setStep(6)}
                className="mt-8 w-full bg-teal-500 text-white py-4 rounded-2xl"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 6 */}
          {step === 6 && (
            <motion.div>
              <button onClick={() => setStep(5)} className="mb-5 text-gray-500">
                ← Back
              </button>

              <h2 className="text-3xl font-semibold">
                Preview Project
              </h2>

              <div className="mt-8 p-6 border rounded-3xl bg-white">
                <p className="text-gray-500">Project preview will appear here...</p>
              </div>

              <button
                className="mt-8 w-full bg-teal-500 text-white py-4 rounded-2xl"
                onClick={createProject}
              >
                Publish Project
              </button>
            </motion.div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  )
}