"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: "$19",
    cadence: "/mo",
    description: "For individuals and small teams getting started.",
    features: ["Unlimited workflows", "Basic automations", "Email support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$49",
    cadence: "/mo",
    description: "Advanced controls for growing teams.",
    features: ["All Starter features", "Advanced automations", "Role-based access", "Priority support"],
    cta: "Upgrade",
    featured: true,
  },
  {
    name: "Business",
    price: "Custom",
    cadence: "",
    description: "Security, compliance, and tailored onboarding.",
    features: ["SSO & SAML", "Audit logs", "Dedicated success manager"],
    cta: "Contact sales",
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-muted-foreground">Choose a plan that fits your team’s pace and complexity.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name} className={`transition-shadow hover:shadow-md ${t.featured ? "border-primary" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span className="text-lg">{t.name}</span>
                  <span className="text-2xl font-semibold">
                    {t.price}
                    <span className="text-sm font-normal text-muted-foreground">{t.cadence}</span>
                  </span>
                </CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 aria-hidden className="mt-0.5 size-4 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{t.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
