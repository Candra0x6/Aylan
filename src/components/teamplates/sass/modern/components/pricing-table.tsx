"use client"

import { Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and learning",
    features: [
      { name: "5 projects", included: true },
      { name: "100GB bandwidth", included: true },
      { name: "Community support", included: true },
      { name: "Basic integrations", included: true },
      { name: "Custom domains", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Priority support", included: false },
      { name: "Team collaboration", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "per month",
    description: "For professional developers and small teams",
    features: [
      { name: "Unlimited projects", included: true },
      { name: "1TB bandwidth", included: true },
      { name: "Priority support", included: true },
      { name: "All integrations", included: true },
      { name: "Custom domains", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Team collaboration", included: true },
      { name: "SLA guarantee", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large teams and organizations",
    features: [
      { name: "Unlimited everything", included: true },
      { name: "Dedicated support", included: true },
      { name: "Custom integrations", included: true },
      { name: "SLA guarantee", included: true },
      { name: "Advanced security", included: true },
      { name: "Audit logs", included: true },
      { name: "SSO integration", included: true },
      { name: "Custom contracts", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`relative transition-all duration-300 hover:scale-105 ${
            plan.popular
              ? "border-primary shadow-lg shadow-primary/20 bg-gradient-to-b from-primary/5 to-accent/5"
              : "border-border hover:border-primary/50"
          }`}
        >
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
          )}

          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
            <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground ml-2">/{plan.period}</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                  <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>{feature.name}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full transition-all duration-300 ${
                plan.popular
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
              size="lg"
            >
              {plan.cta}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
