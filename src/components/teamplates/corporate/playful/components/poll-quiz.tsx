"use client"
import { useMemo, useState } from "react"
import { AnimatedButton } from "./animated-button"

type Option = { id: string; label: string; color: "primary" | "accent" | "secondary" }
const options: Option[] = [
  { id: "a", label: "More pop-up events", color: "primary" },
  { id: "b", label: "New maker kits", color: "accent" },
  { id: "c", label: "Monthly challenges", color: "secondary" },
]

export function PollQuiz() {
  const [votes, setVotes] = useState<Record<string, number>>({ a: 14, b: 9, c: 7 })
  const total = useMemo(() => Object.values(votes).reduce((a, b) => a + b, 0), [votes])

  function vote(id: string) {
    setVotes((v) => ({ ...v, [id]: (v[id] ?? 0) + 1 }))
  }

  return (
    <div id="poll" className="mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl md:text-5xl text-balance">Quick poll</h2>
          <p className="text-muted-foreground mt-2">What should our community build next?</p>
        </div>
        <AnimatedButton className="bg-accent hover:bg-primary hover:text-primary-foreground">
          Submit idea
        </AnimatedButton>
      </div>

      <div className="mt-6 grid gap-4">
        {options.map((opt) => {
          const val = votes[opt.id] ?? 0
          const pct = total === 0 ? 0 : Math.round((val / total) * 100)

          const colorMap: Record<Option["color"], string> = {
            primary: "bg-primary",
            accent: "bg-accent",
            secondary: "bg-secondary",
          }

          return (
            <div key={opt.id} className="rounded-2xl border bg-card p-4">
              <div className="flex items-center justify-between gap-3">
                <button
                  className="group rounded-full border px-3 py-2 text-sm hover:bg-primary/20 transition-colors"
                  aria-label={`Vote for ${opt.label}`}
                  onClick={() => vote(opt.id)}
                >
                  <span className="font-medium">{opt.label}</span>
                </button>
                <span className="text-sm text-muted-foreground">{pct}%</span>
              </div>
              <div className="mt-3 h-3 w-full rounded-full bg-muted/70 overflow-hidden">
                <div
                  className={`h-full ${colorMap[opt.color]} transition-[width] duration-500`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
