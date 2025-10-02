"use client"
import { useEffect, useState } from "react"

const milestones = [
  { label: "Neighborhoods onboarded", current: 62, total: 100, color: "primary" },
  { label: "Stories shared", current: 340, total: 500, color: "accent" },
  { label: "Quizzes created", current: 78, total: 120, color: "secondary" },
] as const

export function MilestoneProgress() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const colorMap = {
    primary: "bg-primary",
    accent: "bg-accent",
    secondary: "bg-secondary",
  } as const

  return (
    <div id="progress" className="mx-auto max-w-6xl">
      <h2 className="font-display text-3xl md:text-5xl mb-6 text-balance">Community progress</h2>
      <div className="grid gap-4">
        {milestones.map((m, idx) => {
          const pct = Math.min(100, Math.round((m.current / m.total) * 100))
          return (
            <div key={idx} className="rounded-3xl border bg-card p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{m.label}</span>
                <span className="text-muted-foreground">
                  {m.current}/{m.total}
                </span>
              </div>
              <div className="mt-3 h-3 w-full rounded-full bg-muted/70 overflow-hidden">
                <div
                  className={`h-full ${colorMap[m.color as keyof typeof colorMap]} transition-[width] duration-700`}
                  style={{ width: mounted ? `${pct}%` : "0%" }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}