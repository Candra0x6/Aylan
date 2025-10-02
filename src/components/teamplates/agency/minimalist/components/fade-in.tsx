"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export function FadeIn({ children, delay = 0, as = "section", className }: FadeInProps) {
  const RefTag = as as any
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <RefTag
      ref={ref as any}
      className={[
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className || "",
      ].join(" ")}
    >
      {children}
    </RefTag>
  )
}
