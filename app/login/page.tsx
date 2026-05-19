"use client"

import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  
  const [message, setMessage] = useState("")

  const handleLogin = async () => {
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signInWithOtp({
      email,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage("Check your email for login link 🚀")
    }

    setLoading(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-80 p-6 border rounded-xl bg-white">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-black text-white p-2 rounded"
        >
          {loading ? "Sending..." : "Send Magic Link"}
        </button>

        {message && (
          <p className="text-sm mt-3 text-gray-600">{message}</p>
        )}
      </div>
    </div>
  )
}
