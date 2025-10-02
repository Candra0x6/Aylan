"use client"

import type React from "react"

function Badge({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-4">
      <div className="text-[color:var(--accent)]">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

const ShieldIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.5 12.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

const LockIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 10V8a4 4 0 118 0v2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

const TruckIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7h11v8H3z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 11h4l3 3v1h-7" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export function TrustBadges() {
  return (
    <div>
      <h3 className="sr-only">Trust and Security</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <Badge
          icon={ShieldIcon}
          title="30‑Day Guarantee"
          desc="Returns accepted within 30 days—no hassle, full support."
        />
        <Badge
          icon={LockIcon}
          title="Secure Checkout"
          desc="Protected payments and encrypted data across all devices."
        />
        <Badge icon={TruckIcon} title="Fast Delivery" desc="Instant downloads and priority support for all orders." />
      </div>
    </div>
  )
}
