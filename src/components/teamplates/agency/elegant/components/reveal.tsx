"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  delay?: number
}

export default function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = as as any
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Comp
      ref={ref}
      data-visible={visible}
      className={cn(
        "transition-all duration-700 ease-out opacity-0 translate-y-6 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0",
        className,
      )}
    >
      {children}
    </Comp>
  )
}
