"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Second from "./components/Second"
import Sub from "./components/Sub"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push("/login")
      }
    }

    checkUser()
  }, [router])

  return (
    <>
    <Hero />
    <Second/>
    <Sub/>
    <Footer/>
    </>
  )
}
