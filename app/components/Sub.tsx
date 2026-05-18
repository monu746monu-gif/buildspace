"use client"

import { motion } from "framer-motion"

export default function Sub() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-5 py-24 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
      <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-300/15 blur-3xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">

      {/* Header */}
      <div className="mb-14 text-center">
        <p className="text-teal-600 tracking-[0.3em] text-sm font-medium">
          PRICING
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl">
          Simple subscription plans
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          All workspace features included in every plan. Upgrade for more projects,
          unlimited applications, and access to the advisor marketplace.
        </p>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 items-stretch gap-5 md:grid-cols-3 lg:gap-6">

        {/* FREE */}
        <motion.div
          whileHover={{ y: -8 }}
          className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white/90 p-7 shadow-sm shadow-slate-200/70 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-slate-200/80"
        >
          <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500">FREE</h3>

          <h2 className="mt-3 text-4xl font-bold text-black">$0</h2>

          <div className="mt-7 flex-1 space-y-3 text-sm text-gray-600">
            <p className="flex gap-3"><span className="text-teal-500">✓</span>5 unlocked projects/day</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>10 more locked to preview</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>1 application per day</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>1 project and 1 workspace</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>All workspace tools</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>See Free founders only</p>
          </div>

          <button className="mt-8 w-full rounded-xl bg-gray-100 py-3 font-medium text-gray-700 transition hover:bg-gray-200">
            Current Plan
          </button>
        </motion.div>

        {/* PRO */}
        <motion.div
          whileHover={{ y: -10 }}
          className="relative flex h-full flex-col rounded-2xl border-2 border-teal-500 bg-white p-7 shadow-2xl shadow-teal-900/10 md:-mt-5"
        >
          {/* badge */}
          <span className="absolute -top-3 right-6 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-teal-500/25">
            Most Popular
          </span>

          <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500">PRO</h3>

          <div className="flex items-end gap-2 mt-3">
            <h2 className="text-4xl font-bold text-teal-600">$5/mo</h2>
            <span className="text-gray-400 line-through text-sm">$12/mo</span>
          </div>

          <div className="mt-7 flex-1 space-y-3 text-sm text-gray-600">
            <p className="flex gap-3"><span className="text-teal-500">✓</span>15 curated projects/day</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>Unlimited applications</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>Up to 3 projects</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>Unlimited workspaces</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>See Free + Pro founders</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>Advisor marketplace</p>
          </div>

          <button className="mt-8 w-full rounded-xl bg-teal-500 py-3 font-medium text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-600">
            Upgrade to Pro
          </button>
        </motion.div>

        {/* PRO+ */}
        <motion.div
          whileHover={{ y: -8 }}
          className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white/90 p-7 shadow-sm shadow-slate-200/70 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-slate-200/80"
        >
          <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500">PRO+</h3>

          <h2 className="mt-3 text-4xl font-bold text-black">$29/mo</h2>

          <div className="mt-7 flex-1 space-y-3 text-sm text-gray-600">
            <p className="flex gap-3"><span className="text-teal-500">✓</span>15 curated projects/day, all unlocked</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>See all founders</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>30-day post-match support</p>
            <p className="flex gap-3"><span className="text-teal-500">✓</span>Everything in Pro</p>
          </div>

          <button className="mt-8 w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800">
            Go Pro+
          </button>
        </motion.div>
      </div>

      {/* Footer note */}
      <div className="mt-10 max-w-3xl rounded-2xl border border-teal-100 bg-white/80 p-5 text-center text-sm leading-relaxed text-gray-500 shadow-sm backdrop-blur">
        Tier-based discovery: Free users see only Free founders&apos; projects.
        Pro users see Free + Pro. Pro+ sees everyone. This ensures aligned
        commitment levels when forming partnerships.
      </div>
      </div>

    </section>
  )
}
