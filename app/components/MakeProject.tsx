"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { supabase } from "../lib/supabase"

interface MakeProjectProps {
  open: boolean
  onClose: () => void
}

const peopleOptions = [
  "Frontend Dev",
  "Backend Dev",
  "Designer",
  "AI Engineer",
  "Web3 Dev",
  "Marketing",
]

const communicationOptions = [
  "Chat",
  "Calls",
  "Meetups",
  "Discord",
  "Voice Chat",
  "Async",
]

export default function MakeProject({ open, onClose }: MakeProjectProps) {
  const [step, setStep] = useState(1)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [githubLink, setGithubLink] = useState("")
  const [twitterLink, setTwitterLink] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [lookingFor, setLookingFor] = useState<string[]>([])
  const [communication, setCommunication] = useState<string[]>([])
  const [role, setRole] = useState("")
  const [preferredTeamSize, setPreferredTeamSize] = useState("")
  const [partnerSkills, setPartnerSkills] = useState("")
  const [saving, setSaving] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const resetForm = () => {
    setStep(1)
    setTitle("")
    setDescription("")
    setGithubLink("")
    setTwitterLink("")
    setContactEmail("")
    setLookingFor([])
    setCommunication([])
    setRole("")
    setPreferredTeamSize("")
    setPartnerSkills("")
    setSaving(false)
    setErrorMessage("")
  }

  const closeForm = () => {
    resetForm()
    onClose()
  }

  const toggleLookingFor = (item: string) => {
    setLookingFor((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const toggleCommunication = (item: string) => {
    setCommunication((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const continueFromBasics = () => {
    if (!title.trim() || !description.trim()) {
      setErrorMessage("Add a project title and description first.")
      return
    }

    setErrorMessage("")
    setStep(2)
  }

  const createProject = async () => {
    if (!title.trim() || !description.trim()) {
      setErrorMessage("Project title and description are required.")
      setStep(1)
      return
    }

    setSaving(true)
    setErrorMessage("")

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      setErrorMessage("Please sign in before creating a project.")
      setSaving(false)
      return
    }

    const { error } = await supabase.from("projects").insert({
      owner_id: user.id,
      owner_email: user.email,
      title: title.trim(),
      description: description.trim(),
      github_link: githubLink.trim() || null,
      looking_for: lookingFor,
      communication,
      role: role.trim() || null,
      preferred_team_size: preferredTeamSize.trim() || null,
      partner_skills: partnerSkills.trim() || null,
    })

    if (error) {
      setErrorMessage(error.message)
      setSaving(false)
      return
    }

    closeForm()
  }

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] overflow-y-auto bg-[#f8fafc] px-4 py-8 sm:px-6 sm:py-12"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-black sm:text-4xl">
                Create Project
              </h1>
              <p className="mt-2 text-gray-500">
                Answer a few questions to publish your project
              </p>
            </div>

            <button
              onClick={closeForm}
              className="shrink-0 text-2xl text-gray-500 hover:text-black"
              aria-label="Close create project form"
            >
              x
            </button>
          </div>

          <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>

          {errorMessage && (
            <p className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Project Title & Description
              </h2>

              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="Project Title"
              />

              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="mt-5 h-40 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="Quick description"
              />

              <button
                onClick={continueFromBasics}
                className="mt-8 w-full rounded-2xl bg-teal-500 py-4 text-white hover:bg-teal-600"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button onClick={() => setStep(1)} className="mb-5 text-gray-500">
                Back
              </button>

              <h2 className="text-2xl font-semibold sm:text-3xl">
                Project & Owner Links
              </h2>

              <input
                value={githubLink}
                onChange={(event) => setGithubLink(event.target.value)}
                className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="GitHub Link"
              />
              <input
                value={twitterLink}
                onChange={(event) => setTwitterLink(event.target.value)}
                className="mt-5 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="Twitter / X"
              />
              <input
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
                className="mt-5 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="Email"
              />

              <button
                onClick={() => setStep(3)}
                className="mt-8 w-full rounded-2xl bg-teal-500 py-4 text-white hover:bg-teal-600"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button onClick={() => setStep(2)} className="mb-5 text-gray-500">
                Back
              </button>

              <h2 className="text-2xl font-semibold sm:text-3xl">
                Who do you want to work with?
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {peopleOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleLookingFor(item)}
                    className={`rounded-full border px-5 py-3 ${
                      lookingFor.includes(item)
                        ? "border-teal-500 bg-teal-500 text-white"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(4)}
                className="mt-8 w-full rounded-2xl bg-teal-500 py-4 text-white hover:bg-teal-600"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button onClick={() => setStep(3)} className="mb-5 text-gray-500">
                Back
              </button>

              <h2 className="text-2xl font-semibold sm:text-3xl">
                Preferred Communication
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {communicationOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleCommunication(item)}
                    className={`rounded-2xl border p-5 ${
                      communication.includes(item)
                        ? "border-teal-500 bg-teal-500 text-white"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(5)}
                className="mt-8 w-full rounded-2xl bg-teal-500 py-4 text-white hover:bg-teal-600"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button onClick={() => setStep(4)} className="mb-5 text-gray-500">
                Back
              </button>

              <h2 className="text-2xl font-semibold sm:text-3xl">
                Role & Team Size
              </h2>

              <input
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="Your Role"
              />
              <input
                value={preferredTeamSize}
                onChange={(event) => setPreferredTeamSize(event.target.value)}
                className="mt-5 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="Team Size (e.g. 3-5)"
              />
              <textarea
                value={partnerSkills}
                onChange={(event) => setPartnerSkills(event.target.value)}
                className="mt-5 h-32 w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-teal-500"
                placeholder="Skills you want in teammates"
              />

              <button
                onClick={() => setStep(6)}
                className="mt-8 w-full rounded-2xl bg-teal-500 py-4 text-white hover:bg-teal-600"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button onClick={() => setStep(5)} className="mb-5 text-gray-500">
                Back
              </button>

              <h2 className="text-2xl font-semibold sm:text-3xl">
                Preview Project
              </h2>

              <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6">
                <h3 className="text-2xl font-semibold text-black">
                  {title || "Untitled project"}
                </h3>
                <p className="mt-3 text-gray-500">
                  {description || "No description added yet."}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {lookingFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="mt-8 w-full rounded-2xl bg-teal-500 py-4 text-white hover:bg-teal-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                onClick={createProject}
                disabled={saving}
              >
                {saving ? "Publishing..." : "Publish Project"}
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
