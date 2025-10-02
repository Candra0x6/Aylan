"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Operations Lead, Northwind",
    quote:
      "Acme helped us cut approval times by 42% without introducing complexity. The interface keeps our team focused.",
    avatar: "/profile-photo-alex.jpg",
    initials: "AR",
  },
  {
    name: "Priya Shah",
    role: "Program Manager, Contoso",
    quote:
      "We finally have a reliable way to track ownership and unblock work quickly. It’s clean, stable, and trustworthy.",
    avatar: "/profile-photo-priya.jpg",
    initials: "PS",
  },
  {
    name: "Daniel Chen",
    role: "Head of Delivery, Fabrikam",
    quote: "Minimalist by design, powerful under the hood. Our weekly status reviews went from 60 minutes to 20.",
    avatar: "/profile-photo-daniel.jpg",
    initials: "DC",
  },
]

export default function Testimonials() {
  return (
    <section id="customers" className="border-t border-border bg-card/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Trusted by professionals</h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground">
            Designed for teams that value reliability, security, and predictable delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={t.avatar || "/placeholder.svg"} alt={`${t.name} profile photo`} />
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
