"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Zap, LineChart, CalendarCheck2 } from "lucide-react"

const features = [
  {
    title: "Enterprise-grade security",
    description: "Role-based access, audit logs, and least-privilege defaults build trust into every workflow.",
    icon: ShieldCheck,
  },
  {
    title: "Automations that save time",
    description: "Trigger steps, approvals, and notifications to keep work moving without micromanagement.",
    icon: Zap,
  },
  {
    title: "Clarity through analytics",
    description: "See blockers, throughput, and trends to optimize processes with data—not guesswork.",
    icon: LineChart,
  },
  {
    title: "Scheduling that works",
    description: "Dependable timelines, calendar sync, and clear ownership reduce delays and confusion.",
    icon: CalendarCheck2,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Built for productivity and trust
            </h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground">
            A structured, grid-first system that keeps your team aligned and accountable while reducing noise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <Card key={f.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 inline-flex size-9 items-center justify-center rounded-md bg-accent">
                    <Icon aria-hidden className="size-5 text-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{f.description}</CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
