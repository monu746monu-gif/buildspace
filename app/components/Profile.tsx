"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

type ProfileData = {
  email: string | null
  skills: string[] | null
  status: string | null
  availability: string | null
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: userData } = await supabase.auth.getUser()

      const user = userData?.user

      if (!user) {
        setLoading(false)
        return
      }

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      setProfile(data)
      setLoading(false)
    }

    fetchProfile()
  }, [])

  if (loading) {
    return <div className="p-10">Loading profile...</div>
  }

  if (!profile) {
    return <div className="p-10">No profile found</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[500px]">

        <h1 className="text-3xl font-bold text-black mb-6">
          Your Profile
        </h1>

        <div className="space-y-4 text-gray-700">

          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p>{profile.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Skills</p>
            <p>{profile.skills?.join(", ")}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Status</p>
            <p>{profile.status}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Availability</p>
            <p>{profile.availability}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
